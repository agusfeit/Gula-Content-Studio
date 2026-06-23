import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sobre-nosotras", label: "Sobre Nosotras" },
  { href: "#la-manada", label: "La manada" },
  { href: "#marcas", label: "Colaboraciones" },
  { href: "#metricas", label: "Métricas" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contactanos" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-xl" : "bg-cream/80 backdrop-blur-md"} border-b-2 border-dashed border-foreground/10`}>
      <div className="font-display text-2xl md:text-3xl text-primary">
        Gula<span className="text-foreground">.la.border</span>
      </div>

      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-foreground font-bold text-sm no-underline hover:text-primary transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream/95 backdrop-blur-xl border-b-2 border-dashed border-foreground/10 md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground font-bold text-base no-underline" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
