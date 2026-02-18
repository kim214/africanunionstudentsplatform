import { Link } from "react-router-dom";
import logo from "@/assets/ausp-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-ausp-gold/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-ausp-blue-light/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <img
          src={logo}
          alt="AUSP Logo"
          className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl mb-8 animate-scale-in bg-card/10 backdrop-blur-sm p-2"
        />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          African Union{" "}
          <span className="text-gradient-gold">Students' Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Educate • Connect • Empower
        </p>
        <p className="text-base md:text-lg text-primary-foreground/60 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          A Pan-African platform unifying students across the continent and the Diaspora to collaborate, innovate, and drive Africa's transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105"
          >
            Discover AUSP
          </Link>
          <Link
            to="/programs"
            className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105"
          >
            Our Programs
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          {[
            { value: "2020", label: "Established" },
            { value: "55+", label: "Countries" },
            { value: "4", label: "Focus Areas" },
            { value: "20+", label: "Programs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="/about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Link>
    </section>
  );
};

export default HeroSection;
