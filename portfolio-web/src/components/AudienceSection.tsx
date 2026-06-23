import { useEffect, useRef, useState } from "react";

const ageData = [
  { label: "18-24", pct: 35 },
  { label: "25-34", pct: 42 },
  { label: "35-44", pct: 15 },
  { label: "45+", pct: 8 },
];

const locationData = [
  { label: "CABA", pct: 38 },
  { label: "GBA", pct: 25 },
  { label: "Interior", pct: 22 },
  { label: "Exterior", pct: 15 },
];

const interestData = [
  { label: "Mascotas", pct: 85 },
  { label: "Lifestyle", pct: 60 },
  { label: "Bienestar", pct: 45 },
  { label: "Naturaleza", pct: 40 },
];

const AudienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const BarRows = ({ data }: { data: typeof ageData }) => (
    <div className="space-y-3.5">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-2.5">
          <span className="text-sm font-bold text-accent-foreground/80 w-20 flex-shrink-0">{d.label}</span>
          <div className="flex-1 h-2 bg-accent-foreground/10 rounded overflow-hidden">
            <div
              className="h-full rounded bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
              style={{ width: visible ? `${d.pct}%` : "0%" }}
            />
          </div>
          <span className="text-sm font-extrabold text-accent-foreground w-10 text-right flex-shrink-0">{d.pct}%</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="audiencia" ref={ref} className="bg-accent px-6 md:px-20 py-20 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-primary text-primary-foreground px-3.5 py-1 rounded border-2 border-accent-foreground/30 mb-4">
          Audiencia
        </div>
        <h2 className="font-display text-3xl md:text-[3.2rem] leading-tight text-accent-foreground">
          Nuestra comunidad 📊
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Gender */}
        <div className={`bg-accent-foreground/[0.06] border-2 border-accent-foreground/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-display text-sm text-accent-foreground/60 uppercase tracking-widest mb-5">Género</div>
          <div className="mb-5">
            <div className="flex justify-between font-bold text-sm text-accent-foreground/80 mb-2">
              <span>👩 Mujeres 78%</span>
              <span>👨 Hombres 22%</span>
            </div>
            <div className="w-full h-3 bg-accent-foreground/10 rounded-md overflow-hidden flex">
              <div className="bg-primary h-full transition-all duration-1000" style={{ width: visible ? "78%" : "0%" }} />
              <div className="bg-secondary h-full transition-all duration-1000" style={{ width: visible ? "22%" : "0%" }} />
            </div>
            <div className="flex gap-4 mt-2.5">
              <span className="flex items-center gap-1.5 text-xs font-bold text-accent-foreground/70">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Mujeres
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-accent-foreground/70">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" /> Hombres
              </span>
            </div>
          </div>
        </div>

        {/* Age */}
        <div className={`bg-accent-foreground/[0.06] border-2 border-accent-foreground/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "100ms" }}>
          <div className="font-display text-sm text-accent-foreground/60 uppercase tracking-widest mb-5">Edad</div>
          <BarRows data={ageData} />
        </div>

        {/* Location */}
        <div className={`bg-accent-foreground/[0.06] border-2 border-accent-foreground/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <div className="font-display text-sm text-accent-foreground/60 uppercase tracking-widest mb-5">Ubicación</div>
          <BarRows data={locationData} />
        </div>

        {/* Interests */}
        <div className={`bg-accent-foreground/[0.06] border-2 border-accent-foreground/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "300ms" }}>
          <div className="font-display text-sm text-accent-foreground/60 uppercase tracking-widest mb-5">Intereses</div>
          <BarRows data={interestData} />
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
