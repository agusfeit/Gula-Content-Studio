import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "📡",
    title: "ALCANCE",
    items: ["10K+ cuentas alcanzadas/semana", "3K–5K alcance por Reel", "Picos de hasta 12K en contenido viral"],
    color: "text-primary",
  },
  {
    icon: "💬",
    title: "INTERACCIÓN",
    items: ["4.5% engagement rate promedio", "200+ interacciones por post", "Alto volumen de saves y shares"],
    color: "text-secondary",
  },
  {
    icon: "🔍",
    title: "DESCUBRIMIENTO",
    items: ["70% de alcance viene de no seguidores", "Contenido optimizado para Explore", "Alta tasa de descubrimiento orgánico"],
    color: "text-primary",
  },
  {
    icon: "📈",
    title: "CRECIMIENTO",
    items: ["Crecimiento orgánico constante", "+500 seguidores/mes en promedio", "Comunidad activa y leal"],
    color: "text-secondary",
  },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="metricas"
      ref={ref}
      className="bg-accent px-6 md:px-20 py-16 relative overflow-hidden"
    >
      {/* Stripe pattern */}
      <div className="absolute inset-0 opacity-100" style={{
        background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)"
      }} />

      <div className="text-center mb-12 relative z-10">
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground mb-4">
          Métricas
        </div>
        <h2 className={`font-display text-3xl md:text-[3.2rem] leading-tight text-accent-foreground transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Nuestros números hablan 📊
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className={`text-center px-5 py-8 rounded-3xl border-2 border-accent-foreground/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-foreground/40 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className={`font-display text-base md:text-lg tracking-tight mb-4 ${stat.color}`}>
              {stat.title}
            </div>
            <ul className="space-y-2">
              {stat.items.map((item) => (
                <li key={item} className="text-accent-foreground/70 text-xs md:text-sm font-semibold leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
