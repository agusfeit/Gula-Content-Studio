# Estrategia de Growth — Gula

> Documento de estrategia que define **el rol, las métricas y el método** de un especialista en growth marketing aplicado a @gula (Border Collie merle, creadora de contenido en TikTok / Reels / Instagram).
>
> Es la base teórica del agente `growth-gula` (ver `.claude/agents/growth-gula.md`) y el primer caso real de prueba del nodo **"Redes & Contenido"** del ecosistema **Kairos 360**.

---

## 0. Por qué este documento existe (el encaje con Kairos 360)

Kairos 360 modela un negocio como un ecosistema de **8 nodos** conectados a un cerebro de IA. Uno de esos nodos es **"Redes & Contenido"** (📱 *"Descubrimiento y comunidad"*), definido como *"un especialista en growth marketing para el dueño que no es marketer"*.

El diferencial de ese nodo en Kairos **no** es programar posts o generar captions (eso es commodity: lo dan Buffer, Metricool, Later). Es la **atribución punta a punta** que sale del 360:

```
Post → DM → WhatsApp → venta → CRM   →  "este reel te trajo $X", no "200 likes"
```

**Gula es el banco de pruebas de la pata de adquisición de ese nodo**, con un matiz clave:

- Gula es una **creator account**, no una PyME con stock/ventas/checkout.
- Su monetización son los **partnerships con marcas** (ver `01_Marcas/`), no e-commerce.
- Por eso con Gula probamos lo que **todavía no está construido** en Kairos: el motor de **crecimiento de audiencia con data y experimentación** — bajo riesgo, real, medible.

Cuando esto funcione con Gula, la lógica de loop de growth se transplanta al nodo de Kairos y se le agrega la capa de atribución a venta para PyMEs.

---

## 1. Qué es un especialista en growth marketing (y qué NO es)

No es un community manager con otro nombre. La diferencia es de **mentalidad y método**:

| | Social Media Manager | **Growth Marketing Specialist** |
|---|---|---|
| Foco | Crear y publicar, moderar comunidad | **Hacer crecer un número** vía experimentación |
| Mentalidad | "publiquemos esto" | "cada hook/formato/horario es una **hipótesis a testear**" |
| Mira | Likes, cantidad de posts, alcance | El **funnel completo** y qué palanca mueve la aguja |
| Método | Calendario editorial | **Data → hipótesis → test → aprendizaje → escalar** |
| Pregunta clave | "¿qué subimos hoy?" | "¿qué experimento de esta semana nos hace crecer más?" |

Un growth specialist trata **todo** —el primer segundo del reel, el copy, el formato, el horario, la portada— como una variable que se testea, no como una rutina que se repite. Su trabajo es encontrar las **palancas de mayor apalancamiento** y explotarlas con evidencia.

*Fuentes: [Growth Method](https://growthmethod.com/growth-marketing-specialist/), [Averi](https://www.averi.ai/learn/what-is-growth-marketing-how-it-differs-from-traditional-marketing), [thecmo.com](https://thecmo.com/demand-generation/social-media-marketing-vs-social-media-management/).*

---

## 2. El modelo mental: AARRR aplicado a Gula

El framework "Pirate Metrics" (Dave McClure / Sean Ellis) traducido a una cuenta de creador:

| Etapa | Pregunta | En Gula se ve como |
|---|---|---|
| **Acquisition** | ¿La descubren? | Alcance a **no-seguidores**, % de reach desde Explorar/Reels/feed |
| **Activation** | ¿El que la ve, "engancha"? | Retención del reel (% visto), entra al perfil |
| **Retention** | ¿Vuelve? | Seguidores que consumen recurrente, follback de seguidores |
| **Referral** | ¿La comparten? | **Shares / "sends per reach"** ← motor de crecimiento de IG |
| **Revenue** | ¿Monetiza? | Partnerships con marcas (`01_Marcas/`), canjes, fees |

**Pensar en loops, no en embudos.** En Instagram el output (un reel que se comparte) trae automáticamente input nuevo (gente que aún no la sigue la descubre). Eso es un **growth loop** auto-reforzado: contenido compartible → más alcance a no-seguidores → más follows → más base que comparte el próximo.

*Fuentes: [Amplitude](https://amplitude.com/blog/pirate-metrics-framework), [GrowWithWard](https://growwithward.com/aaarrr-pirate-funnel/).*

---

## 3. El sistema de métricas

### 🌟 North Star Metric: **Share Rate ("sends per reach")**

Adam Mosseri (CEO de Instagram) declaró que la métrica más importante de la plataforma es **qué porcentaje de los que vieron el contenido se lo mandaron a un amigo**. Es lo que más amplifica el alcance y lo que el algoritmo premia, porque un *send* es un voto de valor genuino.

```
Share Rate = (shares ÷ views) × 100
```

| Share Rate | Lectura |
|---|---|
| < 0.5% | Contenido flojo / no compartible |
| **0.5%+** | **Baseline de contenido de calidad** |
| 2–5% | Potencial viral (la comedia llega ahí naturalmente) |

> Para Gula, la NSM es el **Share Rate promedio de sus reels**. Todo lo demás es palanca o diagnóstico de esta métrica.

*Fuente: [David Zucker / Mosseri](https://davidzucker.substack.com/p/the-most-important-metric-on-instagram).*

### Métricas de tablero (revisión semanal)

| Métrica | Qué dice | Benchmark sano |
|---|---|---|
| **Follower Growth Rate** | Velocidad de crecimiento | 1–2%/mes ok · 2.5–5% ideal |
| **Reach a no-seguidores** | Adquisición real | Cuanto más alto, más descubrimiento |
| **Retención de Reels** (% visto) | Calidad del hook + ritmo | La palanca #1 del algoritmo de reels |
| **Engagement Rate** | Resonancia | 3–6% |
| **Saves** | "Esto me sirve / lo quiero después" | Pesa más que un like |
| **Shares** (→ NSM) | "Esto se lo muestro a alguien" | Ver Share Rate arriba |
| **Profile visits → follow** | Conversión del perfil | Optimizable con bio/destacadas |

⚠️ **Contexto 2025–2026:** el engagement orgánico cayó ~24% interanual, el crecimiento de seguidores se desaceleró en general, e Instagram reemplazó *impressions* por *views*. La consigna es **calidad sobre volumen**: mejor un reel con 100 views y 2% de share rate que 10.000 views con 0.5%.

*Fuentes: [Sprout Social](https://sproutsocial.com/insights/instagram-metrics/), [Socialinsider](https://www.socialinsider.io/social-media-benchmarks/instagram), [Social Champ](https://www.socialchamp.com/blog/instagram-metrics/).*

### Vanity vs. accionable

Likes y nº de seguidores son **vanity**: miden actividad, no valor. Las métricas que mueven decisiones son **share rate, retención, saves y reach a no-seguidores**. Los seguidores son el *resultado*, no el objetivo a optimizar directamente.

---

## 4. El método: el loop operativo de growth

1. **Analizar** — leer la data de la semana (`06_Metricas_Instagram/`) y detectar qué picó y por qué.
2. **Hipótesis** — formato obligatorio:
   > *"Si hacemos **X** para audiencia **Y**, esperamos **Z** porque **W**."*
   >
   > Ej: *"Si arrancamos los reels con el perro ya en acción en el frame 1 (X) para la audiencia de descubrimiento (Y), esperamos +20% de retención a 3s (Z) porque el primer segundo es sagrado y hoy perdemos gente en la intro (W)."*
3. **Priorizar** con **ICE** (Impact × Confidence × Ease, 1–10 cada uno; score = producto). Se atacan primero los de score más alto.
4. **Testear** con cadencia: **2–3 experimentos/semana** al arrancar; revisión semanal fija para que ningún test quede colgado.
5. **Escalar y registrar** — lo que funciona se vuelve patrón; el aprendizaje se guarda en `02_Biblioteca_Creativa/` (Hooks, Aprendizajes). La carpeta se actualiza siempre.

*Fuentes: [Reforge](https://www.reforge.com/blog/growth-experiment-management-system), [ICE / GrowthMarketer](https://growthmarketer.co/ice-prioritization-framework/), [CXL](https://cxl.com/blog/growth-experimentation-culture/).*

---

## 5. Qué expone realmente la Instagram Graph API (insumo para la conexión)

La conexión a la cuenta de Gula irá por la **Instagram Graph API oficial** (cuenta Business/Creator, vinculada a una Página de FB, app en Meta for Developers). Esto es lo que vamos a poder leer:

**Nivel cuenta** (`GET /{ig-user-id}/insights`):
`reach` (con breakdown por `follow_type` y `media_product_type`), `follows_and_unfollows`, `accounts_engaged`, `total_interactions`, `likes`, `comments`, `shares`, `saves`, `views`, `replies`, y **demografía** de seguidores (`follower_demographics`) y de audiencia engaged (`engaged_audience_demographics`) por edad/género/ciudad/país.

**Nivel reel/post** (`GET /{ig-media-id}/insights`):
`reach`, `likes`, `comments`, `shares`, `saves`, `total_interactions`, y **retención (%)** del reel (+ *skip rate* agregado en ene-2026).

⚠️ **Gotchas del setup:**
- `impressions` → **deshabilitada** (abr-2025). Usar `views` / `reach`.
- `profile_views`, `website_clicks`, `email_contacts`, etc. → **deprecadas** en v21 (ene-2025).
- `follower_count` / follower data → solo para cuentas con **+100 seguidores**.
- La NSM (share rate) se computa nosotros: `shares` ÷ `views` por pieza.

*Fuentes: [Meta for Developers — IG User Insights](https://developers.facebook.com/docs/instagram-platform/api-reference/instagram-user/insights/), [Phyllo](https://www.getphyllo.com/post/how-to-use-the-instagram-graph-api-for-audience-insight-iv).*

---

## 6. Cómo se conecta con la estructura del repo

| Carpeta | Rol en el loop de growth |
|---|---|
| `00_Identidad_Gula/` | El "producto" y su posicionamiento. Toda hipótesis lo respeta. |
| `01_Marcas/` | Revenue (partnerships). El crecimiento de audiencia es el activo que se monetiza acá. |
| `02_Biblioteca_Creativa/` | Donde se **registran los aprendizajes y hooks** ganadores. Memoria del loop. |
| `06_Metricas_Instagram/` | La fuente de verdad de la data. Input del paso 1 del loop. |
| `07_Growth/` (este doc) | La estrategia y el método. |

---

## 7. Las 5 reglas de oro de Gula (no negociables)

Todo experimento de growth las respeta:

1. **Identidad antes que oportunidad.** Si una idea empuja a Gula a ser otra cosa, se rechaza.
2. **TikTok-native siempre.** Lo que no se filma fácil con un celu y un humano, se replantea.
3. **Tres opciones a cada marca** (segura / sweet spot / upside viral).
4. **Aprender de cada pieza** — lo que funciona y lo que no se registra.
5. **El primer segundo es sagrado.** Sin hook fuerte, no hay video. *(Es, además, la palanca directa de la retención de reels.)*

---

## 8. Próximos pasos

- [x] Definir rol, métricas y método (este doc).
- [x] Construir el agente `growth-gula` sobre esta base.
- [ ] **Conectar la cuenta de Gula vía Instagram Graph API** (cuenta Business/Creator + Página FB + app Meta + token).
- [ ] Cargar la data histórica de `06_Metricas_Instagram/` y correr el primer ciclo: 3 hipótesis priorizadas por ICE para el próximo mes.

---

*Documento generado el 2026-06-22. Research con fuentes citadas inline. Mantener vivo: actualizar benchmarks y métricas de la API a medida que Meta cambia su plataforma.*
