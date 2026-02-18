import { useState, useEffect } from "react";
import logo from "@/assets/ausp-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Programs", href: "#programs" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-3">
          <img src={logo} alt="AUSP Logo" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block text-left">
            <span className={`font-display font-bold text-lg leading-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              AUSP
            </span>
            <span className={`block text-xs font-medium ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Educate • Connect • Empower
            </span>
          </div>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                  : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="ml-3 px-5 py-2 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            Join AUSP
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left px-4 py-3 rounded-md text-foreground hover:bg-accent transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="mt-2 px-5 py-3 rounded-lg bg-gold-gradient text-foreground font-semibold shadow-gold"
            >
              Join AUSP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
