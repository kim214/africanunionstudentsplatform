import { Link } from "react-router-dom";
import logo from "@/assets/ausp-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative h-[70vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
    </div>

    {/* Decorative */}
    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-ausp-gold/5 blur-3xl animate-float" />
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-ausp-blue-light/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <img src={logo} alt="AUSP Logo" className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" />
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 animate-fade-in-up">
        African Union{" "}
        <span className="text-gradient-gold">Students' Platform</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Educate • Connect • Empower
      </p>
      <p className="text-sm md:text-base text-primary-foreground/60 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Unifying students across Africa and the Diaspora to collaborate, innovate, and drive continental transformation.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <Link
          to="/about"
          className="px-7 py-3 rounded-xl bg-gold-gradient text-foreground font-semibold shadow-gold hover:opacity-90 transition-all hover:scale-105"
        >
          Discover AUSP
        </Link>
        <Link
          to="/programs"
          className="px-7 py-3 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-105"
        >
          Our Programs
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
