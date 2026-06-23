#!/usr/bin/env node
/**
 * Conexión a la Instagram Graph API para @gula.
 *
 * Lee las métricas de growth (reach, views, shares, saves, retención, demografía)
 * de la cuenta Business/Creator de Gula y las vuelca a `06_Metricas_Instagram/`
 * en el mismo formato que usa la carpeta (log mensual AAAA-MM + snapshot JSON).
 *
 * Sin dependencias externas: usa fetch nativo (Node 18+).
 *
 * Modos:
 *   node fetch-metricas.mjs              → baja métricas y escribe snapshot + log del mes
 *   node fetch-metricas.mjs --check      → valida token y muestra la cuenta (no escribe)
 *   node fetch-metricas.mjs --discover   → lista Páginas FB + su IG business account (para conseguir IG_USER_ID)
 *   node fetch-metricas.mjs --days 7     → ventana de la métrica de cuenta (default 30)
 *
 * Config por env o por archivo `.env` en esta carpeta:
 *   IG_USER_ID       id de la cuenta IG business/creator (ver --discover)
 *   IG_ACCESS_TOKEN  token de acceso (long-lived recomendado)
 *   GRAPH_VERSION    versión de la Graph API (default v22.0)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const METRICS_DIR = resolve(__dirname, ".."); // 06_Metricas_Instagram/
const OUT_DIR = resolve(METRICS_DIR, "_api"); // snapshots generados por la API

// ---------- config / env ----------

function loadEnv() {
  const envPath = resolve(__dirname, ".env");
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
loadEnv();

const TOKEN = process.env.IG_ACCESS_TOKEN;
const IG_USER_ID = process.env.IG_USER_ID;
const VERSION = process.env.GRAPH_VERSION || "v22.0";
const BASE = `https://graph.facebook.com/${VERSION}`;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};

// ---------- helpers Graph API ----------

async function gget(path, params = {}) {
  const url = new URL(`${BASE}/${path}`);
  for (const [k, v] of Object.entries(params)) if (v != null) url.searchParams.set(k, v);
  url.searchParams.set("access_token", TOKEN);
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || json.error) {
    const e = json.error || {};
    throw new Error(`Graph API ${res.status}: ${e.message || JSON.stringify(json)} (code ${e.code ?? "?"})`);
  }
  return json;
}

/**
 * Pide insights de forma resiliente: intenta el batch y, si Meta rechaza
 * (deprecaciones varían por versión), reintenta métrica por métrica para que
 * una sola métrica rota no tire abajo todo el snapshot.
 */
async function safeInsights(path, metrics, params = {}) {
  const out = {};
  try {
    const r = await gget(path, { metric: metrics.join(","), ...params });
    for (const d of r.data || []) out[d.name] = d;
    return out;
  } catch (_) {
    for (const m of metrics) {
      try {
        const r = await gget(path, { metric: m, ...params });
        for (const d of r.data || []) out[d.name] = d;
      } catch (err) {
        out[`_error_${m}`] = String(err.message || err);
      }
    }
    return out;
  }
}

function totalValue(insightObj) {
  // estructura nueva: data[].total_value.value
  if (!insightObj) return null;
  if (insightObj.total_value && typeof insightObj.total_value.value === "number") return insightObj.total_value.value;
  // estructura vieja time-series: data[].values[].value
  if (Array.isArray(insightObj.values)) return insightObj.values.reduce((a, v) => a + (v.value || 0), 0);
  return null;
}

const requireCreds = (needId = true) => {
  if (!TOKEN) fail("Falta IG_ACCESS_TOKEN (poné el token en el .env o como variable de entorno).");
  if (needId && !IG_USER_ID) fail("Falta IG_USER_ID. Corré primero:  node fetch-metricas.mjs --discover");
};
const fail = (msg) => {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
};

// ---------- modo --discover ----------

async function discover() {
  if (!TOKEN) fail("Falta IG_ACCESS_TOKEN para descubrir la cuenta.");
  console.log("🔎 Buscando Páginas de Facebook y sus cuentas de Instagram vinculadas...\n");
  const pages = await gget("me/accounts", { fields: "name,id,instagram_business_account{id,username,followers_count}" });
  if (!pages.data?.length) fail("No hay Páginas de FB en este token. La cuenta IG tiene que ser Business/Creator vinculada a una Página.");
  for (const p of pages.data) {
    const ig = p.instagram_business_account;
    console.log(`📄 Página: ${p.name} (id ${p.id})`);
    if (ig) {
      console.log(`   📷 IG: @${ig.username}  ·  followers: ${ig.followers_count ?? "?"}`);
      console.log(`   ➡️  IG_USER_ID=${ig.id}\n`);
    } else {
      console.log("   (sin cuenta de Instagram vinculada)\n");
    }
  }
  console.log("Copiá el IG_USER_ID de @gula al archivo .env y volvé a correr el script sin flags.");
}

// ---------- modo --check ----------

async function check() {
  requireCreds();
  const acc = await gget(IG_USER_ID, { fields: "username,followers_count,follows_count,media_count" });
  console.log("\n✅ Token OK. Cuenta conectada:");
  console.log(`   @${acc.username}`);
  console.log(`   seguidores: ${acc.followers_count}  ·  sigue a: ${acc.follows_count}  ·  posts: ${acc.media_count}`);
  console.log(`   Graph API ${VERSION}\n`);
}

// ---------- modo principal: fetch ----------

const ACCOUNT_METRICS = [
  "reach", "views", "accounts_engaged", "total_interactions",
  "likes", "comments", "shares", "saves", "replies",
];
const MEDIA_METRICS = ["reach", "views", "likes", "comments", "shares", "saved", "total_interactions"];

async function fetchAll() {
  requireCreds();
  const days = parseInt(opt("--days", "30"), 10);
  const until = Math.floor(Date.now() / 1000);
  const since = until - days * 24 * 60 * 60;

  console.log(`📊 Bajando métricas de @gula (últimos ${days} días, Graph API ${VERSION})...\n`);

  // 1) Perfil
  const acc = await gget(IG_USER_ID, { fields: "username,followers_count,follows_count,media_count" });

  // 2) Insights de cuenta (ventana)
  const accIns = await safeInsights(`${IG_USER_ID}/insights`, ACCOUNT_METRICS, {
    period: "day", metric_type: "total_value", since, until,
  });

  // 3) Reach desglosado por tipo de seguidor (para % de no-seguidores)
  let reachByFollow = null;
  try {
    const r = await gget(`${IG_USER_ID}/insights`, {
      metric: "reach", period: "day", metric_type: "total_value", breakdown: "follow_type", since, until,
    });
    const results = r.data?.[0]?.total_value?.breakdowns?.[0]?.results || [];
    reachByFollow = {};
    for (const b of results) reachByFollow[b.dimension_values?.[0] || "?"] = b.value;
  } catch (e) { reachByFollow = { _error: String(e.message || e) }; }

  // 4) Demografía de seguidores (best-effort)
  const demographics = {};
  for (const dim of ["age", "gender", "country"]) {
    try {
      const r = await gget(`${IG_USER_ID}/insights`, {
        metric: "follower_demographics", period: "lifetime", metric_type: "total_value",
        timeframe: "last_30_days", breakdown: dim,
      });
      const results = r.data?.[0]?.total_value?.breakdowns?.[0]?.results || [];
      demographics[dim] = Object.fromEntries(results.map((b) => [b.dimension_values?.[0] || "?", b.value]));
    } catch (e) { demographics[dim] = { _error: String(e.message || e) }; }
  }

  // 5) Medios recientes + insights por pieza
  const media = await gget(`${IG_USER_ID}/media`, {
    fields: "id,caption,media_type,media_product_type,timestamp,permalink,like_count,comments_count",
    limit: opt("--limit", "25"),
  });
  const pieces = [];
  for (const m of media.data || []) {
    const ins = await safeInsights(`${m.id}/insights`, MEDIA_METRICS);
    const views = totalValue(ins.views);
    const shares = totalValue(ins.shares);
    pieces.push({
      id: m.id,
      tipo: m.media_product_type || m.media_type,
      fecha: m.timestamp,
      permalink: m.permalink,
      caption: (m.caption || "").slice(0, 120),
      reach: totalValue(ins.reach),
      views,
      likes: totalValue(ins.likes) ?? m.like_count,
      comments: totalValue(ins.comments) ?? m.comments_count,
      shares,
      saves: totalValue(ins.saved),
      total_interactions: totalValue(ins.total_interactions),
      // 🌟 North Star: share rate = shares / views
      share_rate_pct: views && shares != null ? +((shares / views) * 100).toFixed(2) : null,
    });
  }

  // 6) Derivados
  // Meta devuelve las claves del breakdown en MAYÚSCULAS ("FOLLOWER"/"NON_FOLLOWER"),
  // pero por las dudas las buscamos sin importar mayúsc/minúsc ni guiones.
  const rb = reachByFollow || {};
  const findFollow = (re) => {
    for (const k of Object.keys(rb)) if (re.test(k)) return rb[k];
    return null;
  };
  const reachFollower = findFollow(/^follower$/i);
  const reachNonFollower = findFollow(/non.?follower/i);
  const reachTotal = (reachFollower ?? 0) + (reachNonFollower ?? 0) || totalValue(accIns.reach);
  const pctNonFollower = reachNonFollower != null && reachTotal ? +((reachNonFollower / reachTotal) * 100).toFixed(1) : null;
  const reels = pieces.filter((p) => /reel/i.test(p.tipo));
  const avgShareRate = reels.length
    ? +(reels.filter((r) => r.share_rate_pct != null).reduce((a, r) => a + r.share_rate_pct, 0) /
        Math.max(1, reels.filter((r) => r.share_rate_pct != null).length)).toFixed(2)
    : null;

  const snapshot = {
    generado: new Date().toISOString(),
    cuenta: `@${acc.username}`,
    ventana_dias: days,
    perfil: {
      seguidores: acc.followers_count,
      sigue_a: acc.follows_count,
      posts: acc.media_count,
    },
    cuenta_insights: Object.fromEntries(
      ACCOUNT_METRICS.map((m) => [m, totalValue(accIns[m])]).filter(([, v]) => v != null),
    ),
    reach_por_tipo: reachByFollow,
    pct_alcance_no_seguidores: pctNonFollower,
    north_star_share_rate_reels_pct: avgShareRate,
    demografia: demographics,
    piezas: pieces,
    _errores: Object.fromEntries(
      Object.entries({ ...accIns }).filter(([k]) => k.startsWith("_error")),
    ),
  };

  writeOutputs(snapshot);
}

// ---------- escritura de archivos ----------

function ym(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function ymd(d = new Date()) {
  return `${ym(d)}-${String(d.getDate()).padStart(2, "0")}`;
}
const n = (v) => (v == null ? "_" : v);

function writeOutputs(s) {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  // 1) snapshot JSON crudo (lo lee el agente growth-gula)
  const jsonPath = resolve(OUT_DIR, `${ymd()}.json`);
  writeFileSync(jsonPath, JSON.stringify(s, null, 2));

  // 2) log mensual en el formato de _Plantilla_Log_Mensual.md
  const ci = s.cuenta_insights;
  const topByShare = [...s.piezas].sort((a, b) => (b.share_rate_pct ?? -1) - (a.share_rate_pct ?? -1)).slice(0, 3);
  const reels = s.piezas.filter((p) => /reel/i.test(p.tipo));
  const avgViews = reels.length ? Math.round(reels.reduce((a, r) => a + (r.views || 0), 0) / reels.length) : null;

  const log = `# Métricas Instagram — ${ym()}

> ⚙️ Generado automáticamente por la Graph API el ${s.generado.slice(0, 16).replace("T", " ")} (ventana ${s.ventana_dias}d).
> Fuente cruda: \`_api/${ymd()}.json\`. Editá a mano lo que quieras enriquecer (top contenidos, por qué funcionó, hipótesis).

## Resumen del mes
- **Seguidores (fin de mes):** ${n(s.perfil.seguidores)}
- **Crecimiento neto (altas − bajas):** _  ← cargar a mano (API no da neto histórico directo)
- **Alcance total:** ${n(ci.reach)}
- **% de alcance de no-seguidores:** ${n(s.pct_alcance_no_seguidores)}%
- **Interacciones totales:** ${n(ci.total_interactions)}
- **Visitas al perfil:** _  ← deprecada en la API (cargar a mano si la necesitás)
- **Clics a link / bio:** _

## Reels / Videos
- **Reels publicados (en la ventana):** ${reels.length}
- **Vistas promedio por Reel:** ${n(avgViews)}
- **🌟 Share rate promedio de Reels (shares÷views):** ${n(s.north_star_share_rate_reels_pct)}%  ← North Star (0.5%+ = calidad, 2-5% = viral)
- **Guardados totales:** ${n(ci.saves)}
- **Compartidos totales:** ${n(ci.shares)}

## Top 3 contenidos por Share Rate
| # | Link | Tipo | Vistas | Guardados | Compartidos | Share rate | Por qué funcionó |
|---|------|------|--------|-----------|-------------|-----------|------------------|
${topByShare.map((p, i) => `| ${i + 1} | ${p.permalink || "_"} | ${p.tipo} | ${n(p.views)} | ${n(p.saves)} | ${n(p.shares)} | ${n(p.share_rate_pct)}% | _ |`).join("\n")}

## Contenido que no funcionó (y por qué)
- _

## Hipótesis de growth para el mes que viene
- _  ← las arma el agente growth-gula a partir de este snapshot

## Capturas asociadas
- (opcional)
`;
  const logPath = resolve(METRICS_DIR, `${ym()}.md`);
  // No pisar un log que editaste a mano. Pero si el que existe lo generamos
  // nosotros (tiene el marcador), lo sobrescribimos sin drama.
  let finalLogPath = logPath;
  if (existsSync(logPath)) {
    const isAuto = readFileSync(logPath, "utf8").includes("Generado automáticamente por la Graph API");
    if (!isAuto) finalLogPath = resolve(OUT_DIR, `${ym()}_auto.md`);
  }
  writeFileSync(finalLogPath, log);

  // 3) consola
  console.log("✅ Listo.\n");
  console.log(`   @${s.cuenta.replace("@", "")}  ·  seguidores: ${s.perfil.seguidores}`);
  console.log(`   alcance ${n(ci.reach)}  ·  no-seguidores ${n(s.pct_alcance_no_seguidores)}%  ·  interacciones ${n(ci.total_interactions)}`);
  console.log(`   🌟 share rate Reels: ${n(s.north_star_share_rate_reels_pct)}%`);
  if (Object.keys(s._errores).length) console.log(`   ⚠️  métricas con error: ${Object.keys(s._errores).join(", ")}`);
  console.log(`\n   📄 ${jsonPath.replace(METRICS_DIR, "06_Metricas_Instagram")}`);
  console.log(`   📄 ${finalLogPath.replace(METRICS_DIR, "06_Metricas_Instagram")}\n`);
}

// ---------- router ----------

try {
  if (flag("--discover")) await discover();
  else if (flag("--check")) await check();
  else await fetchAll();
} catch (err) {
  fail(String(err.message || err));
}
