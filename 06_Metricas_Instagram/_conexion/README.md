# Conexión Instagram Graph API → métricas de Gula

Script sin dependencias (Node 18+) que baja las métricas de growth de @gula de la
**Instagram Graph API oficial** y las vuelca a `06_Metricas_Instagram/` en el mismo
formato que la carpeta (log mensual `AAAA-MM.md` + snapshot crudo en `_api/`).

Reemplaza la carga 100% manual: ahora los números los trae la API, y a mano solo
enriquecés lo cualitativo (por qué funcionó un contenido, hipótesis).

---

## Requisitos (lado Meta — esto lo configuran ustedes)

1. La cuenta de Gula tiene que ser **Business** o **Creator** (no personal).
2. Vinculada a una **Página de Facebook**.
3. Una **app en [Meta for Developers](https://developers.facebook.com/)** con el producto
   *Instagram Graph API* agregado.
4. Un **access token** con estos permisos:
   `instagram_basic`, `instagram_manage_insights`, `pages_read_engagement`, `pages_show_list`.

> El token corto se saca rápido desde el **Graph API Explorer**. Para que dure ~60 días,
> convertilo a *long-lived* (ver abajo).

---

## Setup (3 pasos)

```bash
cd 06_Metricas_Instagram/_conexion
cp .env.example .env          # 1) creá tu .env
# 2) pegá el IG_ACCESS_TOKEN en el .env

node fetch-metricas.mjs --discover   # 3) descubrí el IG_USER_ID de @gula
# copiá el IG_USER_ID que imprime al .env
```

Validá que quedó todo bien:

```bash
node fetch-metricas.mjs --check
# ✅ Token OK. Cuenta conectada: @gula · seguidores: ...
```

---

## Uso

```bash
node fetch-metricas.mjs            # baja todo (ventana 30 días) y escribe el log del mes
node fetch-metricas.mjs --days 7   # ventana de 7 días
node fetch-metricas.mjs --limit 40 # cuántos posts/reels recientes analizar (default 25)
```

Genera:
- `06_Metricas_Instagram/_api/AAAA-MM-DD.json` → snapshot crudo (lo lee el agente `growth-gula`).
- `06_Metricas_Instagram/AAAA-MM.md` → log del mes autocompletado (si ya existe uno editado a mano, escribe `_api/AAAA-MM_auto.md` para no pisarlo).

Después: commiteá y pusheá para que quede actualizado en el repo.

---

## Qué métricas trae

- **Perfil:** seguidores, follows, posts.
- **Cuenta (ventana):** reach, views, interacciones, likes, comments, shares, saves.
- **% de alcance de no-seguidores** (reach desglosado por `follow_type`) → señal de descubrimiento.
- **🌟 Share rate por reel** (`shares ÷ views`) → la North Star (Mosseri "sends per reach").
- **Demografía** de seguidores (edad, género, país).
- **Por pieza:** reach, views, likes, comments, shares, saves, interacciones y share rate.

### Gotchas de la API (ya contemplados en el script)
- `impressions` y `profile_views` están **deprecadas** (2025) → usamos `views`/`reach`. Las visitas al perfil quedan para cargar a mano si las necesitás.
- El share rate lo computa el script (la API no lo da hecho).
- La demografía de seguidores requiere **+100 seguidores**.
- Si Meta rechaza alguna métrica (cambian por versión), el script la saltea y sigue; los errores quedan logueados en el JSON bajo `_errores`.

---

## Conseguir un token long-lived (opcional, recomendado)

Con un token corto del Explorer, intercambialo por uno de ~60 días:

```bash
curl "https://graph.facebook.com/v22.0/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=TOKEN_CORTO"
```

Pegá el `access_token` que devuelve en el `.env`. Para algo permanente, lo ideal es un
**System User token** desde Meta Business Suite (no expira).
