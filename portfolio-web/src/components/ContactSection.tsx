import { useRef, useEffect, useState } from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactSection = () => {
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
    <section id="contacto" ref={ref} className="bg-accent px-6 md:px-20 py-20 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 text-3xl opacity-[0.06] tracking-[12px] leading-none break-all pointer-events-none select-none text-accent-foreground">
        🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾
      </div>
      <div className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="inline-block font-display text-xs uppercase tracking-[3px] bg-primary text-primary-foreground px-3.5 py-1 rounded border-2 border-accent-foreground/30 mb-4">
          Contacto
        </div>
        <h2 className="font-display text-3xl md:text-[3.2rem] leading-tight text-accent-foreground mb-5">
          Trabajemos juntas 💌
        </h2>
        <p className="text-base text-accent-foreground/70 leading-relaxed mb-10">
          Si creés que tu marca puede encajar con nuestra comunidad, nos encantaría escucharte. Estamos abiertos a colaboraciones creativas y contenido auténtico con marcas que compartan nuestros valores.
        </p>

        {/* WhatsApp destacado */}
        <a href="https://wa.me/5491167517095?text=Hola!%20Quiero%20trabajar%20con%20ustedes%20🐾" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3.5 w-full px-6 py-5 bg-primary text-primary-foreground border-[2.5px] border-accent-foreground/20 rounded-2xl font-extrabold text-lg no-underline transition-all hover:-translate-y-0.5 mb-4">
          <WhatsAppIcon />
          <span>Quiero trabajar con ustedes</span>
        </a>

        {/* IG y TikTok */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://instagram.com/gula.la.border" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 flex-1 px-5 py-4 bg-accent-foreground/[0.07] border-2 border-accent-foreground/[0.12] rounded-2xl text-accent-foreground font-bold no-underline transition-all hover:translate-y-[-2px] hover:bg-accent-foreground/[0.12]">
            <InstagramIcon />
            <span>@gula.la.border</span>
          </a>
          <a href="https://tiktok.com/@lasprimas.border" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 flex-1 px-5 py-4 bg-accent-foreground/[0.07] border-2 border-accent-foreground/[0.12] rounded-2xl text-accent-foreground font-bold no-underline transition-all hover:translate-y-[-2px] hover:bg-accent-foreground/[0.12]">
            <TikTokIcon />
            <span>@lasprimas.border</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
