import { useEffect, useRef, useState } from "react";
import brandGrowis from "@/assets/brand-growis.png";
import brandTonipets from "@/assets/brand-tonipets.png";
import brandHappet from "@/assets/brand-happet.png";
import brandLavakan from "@/assets/brand-lavakan.png";
import brandBeepex from "@/assets/brand-beepex.png";
import brandCancat from "@/assets/brand-cancat.png";
import brandOoogy from "@/assets/brand-ooogy.png";

const brands = [
  { name: "Tonipets", logo: brandTonipets },
  { name: "Happet", logo: brandHappet },
  { name: "Lavakan", logo: brandLavakan },
  { name: "Beepex", logo: brandBeepex },
  { name: "Cancat", logo: brandCancat },
  { name: "Ooogy", logo: brandOoogy },
  { name: "Growis Snacks", logo: brandGrowis },
];

const BrandsSection = () => {
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

  return (
    <section id="marcas" ref={ref} className="bg-background px-6 md:px-20 py-20 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground mb-4">
          Colaboraciones
        </div>
        <h2 className={`font-display text-3xl md:text-[3.2rem] leading-tight text-foreground transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Marcas que confiaron en nosotras 🤝
        </h2>
      </div>

      {/* Mobile: scroll táctil nativo + marquee automático */}
      <div className="md:hidden overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
        <div
          className="flex gap-4 w-max px-2"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center w-[95px] h-[95px] bg-card border-[2px] border-foreground rounded-2xl p-3 flex-shrink-0">
              <img src={brand.logo} alt={brand.name} className="max-h-[52px] max-w-full object-contain" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Fixed grid */}
      <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-5xl mx-auto">
        {brands.map((brand, i) => (
          <div key={brand.name} className={`flex items-center justify-center w-full h-[120px] bg-card border-[2.5px] border-foreground rounded-3xl p-4 transition-all duration-500 hover:-translate-y-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
            <img src={brand.logo} alt={brand.name} className="max-h-[70px] max-w-full object-contain" />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        ¿Querés que tu marca sea la próxima? <a href="#contacto" className="text-primary font-bold underline">Hablemos 💌</a>
      </p>
    </section>
  );
};

export default BrandsSection;
