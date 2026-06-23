import { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import manada5 from "@/assets/manada-5.jpeg";
import manada6 from "@/assets/manada-6.jpeg";
import manada7 from "@/assets/manada-7.jpeg";
import manada8 from "@/assets/manada-8.jpeg";
import manada9 from "@/assets/manada-9.jpeg";
import manada10 from "@/assets/manada-10.jpeg";
import manada11 from "@/assets/manada-11.jpeg";
import manada12 from "@/assets/manada-12.jpeg";
import manada13 from "@/assets/manada-13.jpeg";
import manada14 from "@/assets/manada-14.jpeg";
import manada15 from "@/assets/manada-15.jpeg";

const PackSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const images = useMemo(
    () => [
      { src: manada5, alt: "Gula posando en el pasto" },
      { src: manada6, alt: "La manada jugando juntos" },
      { src: manada7, alt: "Gula y Alaska descansando al atardecer" },
      { src: manada8, alt: "Tías border en el campo" },
      { src: manada9, alt: "La manada grande con su humana" },
      { src: manada10, alt: "Border collie junto a los troncos" },
      { src: manada11, alt: "Borders mirando el atardecer" },
      { src: manada12, alt: "Gula y los caballos en el campo" },
      { src: manada13, alt: "Jugando en la playa" },
      { src: manada14, alt: "Border collie al atardecer" },
      { src: manada15, alt: "Gula en el campo" },
    ],
    [],
  );

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="la-manada" ref={ref} className="bg-background px-6 md:px-20 py-20 md:py-24 overflow-hidden">
      <div className="text-center mb-10">
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-secondary text-foreground px-3.5 py-1 rounded border-2 border-foreground mb-4">
          La manada
        </div>
        <h2
          className={`font-display text-3xl md:text-[3.2rem] leading-tight text-foreground transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Parte de nuestra vida (y del contenido)
        </h2>

        <div
          className={`max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground space-y-4 transition-all duration-600 text-left md:text-center ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <p>
            Gula tiene una gran familia y muchos amigos perrunos, que también suelen aparecer en nuestro contenido. En el día a día comparte aventuras con su pequeña manada: Alaska (su prima) y Zeta (su amigo).
          </p>
          <p>
            Y los fines de semana solemos visitar el campo, al que llamamos "el paraíso de los Border", donde la espera una manada aún más grande: 4 tías y 5 primas con las que corre, juega y se divierte muchísimo.
          </p>
          <p>
            Esto nos permite mostrar dinámicas reales entre varios perros: juego, socialización, convivencia y mucha energía perruna.
          </p>
        </div>
      </div>

      <div
        className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "180ms" }}
      >
        <Carousel
          className="mx-auto max-w-5xl"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-4">
            {images.map((img) => (
              <CarouselItem
                key={img.src}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="group relative overflow-hidden rounded-3xl border-[2.5px] border-foreground bg-card shadow-brutalist-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, hsl(var(--navy) / 0.18) 75%, hsl(var(--navy) / 0.26) 100%)",
                      }}
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PackSection;
