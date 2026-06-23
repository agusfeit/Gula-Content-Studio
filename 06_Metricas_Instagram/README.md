# 06 · Métricas de Instagram

Área de datos de performance de Gula en Instagram. Pensada para alimentar el trabajo de **growth marketing**: detectar qué crece, qué se estanca y qué replicar.

Las métricas se cargan **a mano** (capturas + números), porque hoy no hay conector automático con Meta. La idea es que sea rápido: una vez por semana o por mes, volcás los números clave y listo.

---

## Cómo cargar métricas (workflow)

1. Entrá a **Instagram → Profesional dashboard / Insights** (o Meta Business Suite).
2. Sacá captura de los paneles clave (alcance, interacciones, seguidores, mejores publicaciones).
3. Guardá las capturas en `capturas/` con el formato `AAAA-MM_tema.png` (ej: `2026-06_alcance.png`).
4. Volcá los números en el log del mes: copiá `_Plantilla_Log_Mensual.md`, renombralo `AAAA-MM.md` y completalo.
5. Commiteá y pusheá (ver runbook en la raíz). Así Iñaki lo ve actualizado.

> Regla: no hace falta cargar todo. Mejor pocos números consistentes mes a mes que un panel gigante una sola vez.

---

## Estructura

```
06_Metricas_Instagram/
├── README.md                  → Este archivo
├── _Plantilla_Log_Mensual.md  → Copiar para cada mes
├── Historico_Resumen.md       → Tabla viva mes a mes (la métrica de un vistazo)
└── capturas/                  → Screenshots de Insights (AAAA-MM_tema.png)
```

---

## Qué mirar para growth (no solo vanity metrics)

- **Alcance vs. seguidores:** cuánto del alcance viene de no-seguidores (señal de viralidad/recomendación).
- **Tasa de retención de Reels:** % que ve hasta el final y replays.
- **Guardados y compartidos:** mejor señal de valor que los likes.
- **Crecimiento neto de seguidores:** altas menos bajas, no solo el total.
- **Conversión a perfil:** visitas al perfil y clics a link desde un contenido.
- **Qué formato/tema dispara cada pico:** anotarlo al lado del número.
