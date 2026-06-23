import { useEffect, useRef, useState } from "react";

const ImpactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metricas" ref={ref} className="bg-accent px-6 md:px-20 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)" }} />

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground mb-3">
          Métricas
        </div>
        <h2 className={`font-display text-3xl md:text-[2.8rem] leading-tight text-accent-foreground transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Los números que importan
        </h2>
      </div>

      {/* BLOQUE 1 — Impacto */}
      <div className="relative z-10 mb-8">
        <p className="text-center text-accent-foreground/50 text-xs font-bold uppercase tracking-widest mb-4">Impacto del contenido · Febrero 2026</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: "👁️", value: "1.25M+", label: "Visualizaciones" },
            { icon: "📡", value: "762K+", label: "Cuentas alcanzadas" },
            { icon: "💬", value: "89K+", label: "Interacciones" },
            { icon: "📈", value: "+436", label: "Nuevos seguidores/mes" },
          ].map((stat, i) => (
            <div key={stat.label} className={`bg-accent-foreground/[0.07] border-2 border-accent-foreground/10 rounded-2xl p-4 text-center transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-display text-2xl md:text-3xl text-primary mb-0.5">{stat.value}</div>
              <div className="text-accent-foreground/60 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-dashed border-accent-foreground/10 mb-8" />

      {/* BLOQUE 2 — Descubrimiento */}
      <div className="relative z-10">
        <p className="text-center text-accent-foreground/50 text-xs font-bold uppercase tracking-widest mb-4">Descubrimiento orgánico</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: "🔍", value: "96%", label: "Alcance a no seguidores" },
            { icon: "🎬", value: "96%", label: "Alcance vía Reels" },
            { icon: "↗️", value: "10.7K+", label: "Shares" },
            { icon: "🔖", value: "2K+", label: "Guardados" },
          ].map((stat, i) => (
            <div key={stat.label} className={`bg-accent-foreground/[0.07] border-2 border-accent-foreground/10 rounded-2xl p-4 text-center transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-display text-2xl md:text-3xl text-secondary mb-0.5">{stat.value}</div>
              <div className="text-accent-foreground/60 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
