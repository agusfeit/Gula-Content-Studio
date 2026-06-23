import gulaHero from "@/assets/gula-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-0 flex flex-col md:grid md:grid-cols-2 items-center px-4 md:px-20 pt-24 pb-8 md:pt-32 md:pb-20 relative overflow-hidden gap-2 md:gap-0">
      {/* Floating blobs */}
      <div className="absolute w-[400px] h-[400px] bg-primary rounded-full blur-[60px] opacity-35 -top-24 -right-24 animate-float" />
      <div className="absolute w-[300px] h-[300px] bg-secondary rounded-full blur-[60px] opacity-35 bottom-0 -left-20 animate-float [animation-delay:2s]" />
      <div className="absolute w-[200px] h-[200px] bg-primary rounded-full blur-[60px] opacity-35 top-1/2 right-[30%] animate-float [animation-delay:4s]" />

      {/* Decorations - pig nose emojis */}
      <span className="absolute top-[15%] left-[55%] text-2xl animate-float-deco pointer-events-none">🐽</span>
      <span className="absolute top-[70%] left-[48%] text-2xl animate-float-deco [animation-delay:1.5s] pointer-events-none">🐽</span>
      <span className="absolute top-[30%] right-[5%] text-2xl animate-float-deco [animation-delay:0.8s] pointer-events-none">🐽</span>
      <span className="absolute bottom-[20%] right-[8%] text-2xl animate-float-deco [animation-delay:2.2s] pointer-events-none">🐽</span>

      {/* Badge + Title */}
      <div className="relative z-10 text-center md:text-left [animation:slideInLeft_0.6s_ease_forwards] md:row-start-1 md:col-start-1">
        <div className="inline-block bg-secondary text-foreground font-extrabold text-[10px] md:text-xs px-3 md:px-4 py-1 md:py-1.5 rounded-full border-2 border-foreground mb-3 md:mb-5 tracking-widest uppercase">
          ✦ UGC Creator ✦
        </div>
        <h1 className="font-display text-4xl md:text-[5.5rem] leading-none text-foreground [animation:slideInLeft_0.6s_ease_0.1s_forwards] opacity-0">
          Hola,<br />soy <span className="text-primary">Gula</span>
        </h1>
      </div>

      {/* Image - between title and CTAs on mobile, right side on desktop */}
      <div className="flex relative z-10 justify-center items-center [animation:slideInRight_0.7s_ease_0.2s_forwards] opacity-0 mt-2 md:mt-0 md:row-span-2 md:col-start-2 md:row-start-1">
        <div className="w-[220px] h-[280px] md:w-[380px] md:h-[480px] animate-morph bg-gradient-to-br from-primary via-secondary to-accent border-4 border-foreground shadow-brutalist relative overflow-hidden">
          <img
            src={gulaHero}
            alt="Gula la Border Collie"
            className="w-full h-full object-cover object-top"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>

      {/* CTAs */}
      <div className="relative z-10 [animation:slideInLeft_0.6s_ease_0.3s_forwards] opacity-0 md:row-start-2 md:col-start-1">
        <div className="gap-3 md:gap-4 flex-wrap md:justify-start mt-3 md:mt-9 flex-col md:flex-row flex items-center justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full font-extrabold text-sm md:text-base bg-primary text-primary-foreground border-[2.5px] border-foreground transition-all hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutalist no-underline">
            Ver portfolio 🎬
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full font-extrabold text-sm md:text-base bg-card text-foreground border-[2.5px] border-foreground transition-all hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutalist no-underline">
            Trabajemos juntas 💌
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
