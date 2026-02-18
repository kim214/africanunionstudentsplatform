import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/ausp-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Programs", href: "/programs" },
  { label: "Timeline", href: "/timeline" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AUSP Logo" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block text-left">
            <span className={`font-display font-bold text-lg leading-tight ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}>
              AUSP
            </span>
            <span className={`block text-xs font-medium ${showTransparent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              Educate • Connect • Empower
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  showTransparent
                    ? `text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 ${isActive ? "bg-primary-foreground/15 text-primary-foreground" : ""}`
                    : `text-foreground hover:bg-accent hover:text-accent-foreground ${isActive ? "bg-accent text-accent-foreground" : ""}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            Join AUSP
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}
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
              <Link
                key={link.href}
                to={link.href}
                className={`text-left px-4 py-3 rounded-md hover:bg-accent transition-colors font-medium ${
                  location.pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-5 py-3 rounded-lg bg-gold-gradient text-foreground font-semibold shadow-gold text-center"
            >
              Join AUSP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
