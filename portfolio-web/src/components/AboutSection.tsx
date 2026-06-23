import { useEffect, useRef, useState } from "react";
import gulaAgus from "@/assets/gula-agus.jpg";

const tags = [
  "UGC Creator", "Lifestyle", "Educativo", "Naturaleza",
  "Manada", "Aventuras",
];

const AboutSection = () => {
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
    <section id="sobre-nosotras" ref={ref} className="bg-card relative overflow-hidden px-6 md:px-20 py-20 md:py-24">
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "repeating-linear-gradient(90deg, hsl(var(--coral)) 0px, hsl(var(--coral)) 40px, hsl(var(--peach)) 40px, hsl(var(--peach)) 80px, hsl(var(--navy)) 80px, hsl(var(--navy)) 120px)" }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex md:block justify-center md:justify-start mb-4">
            <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground">
              Sobre nosotras
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-[3.2rem] leading-tight text-foreground mb-5 text-center md:text-left">
            La dupla detrás<br />del contenido
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-4">
            Somos Agus y su perrita Gula, creando contenido real sobre la vida con perros. Desde paseos hasta viajes, mostramos todo sin filtros.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mb-7">
            Nuestro contenido conecta porque es auténtico. La comunidad nos sigue por nuestra energía, humor y el amor genuino por los animales.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag, i) => (
              <span key={tag} className={`px-4 py-2 rounded-full font-bold text-sm border-2 border-foreground transition-transform hover:rotate-[-3deg] hover:scale-105 ${i % 2 === 0 ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={`flex justify-center transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <div className="rounded-3xl overflow-hidden border-[2.5px] border-foreground shadow-brutalist-sm max-w-[340px]">
            <img src={gulaAgus} alt="Agus y Gula juntas en la playa" className="w-full h-[450px] object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
