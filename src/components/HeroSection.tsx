import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import conferenceBg from "@/assets/conference-nairobi.jpg";
import leadershipBg from "@/assets/hero-leadership.jpg";
import unityBg from "@/assets/hero-unity.jpg";
import { ROUTES } from "@/content/routes";

const slides = [
  {
    id: "conference",
    image: conferenceBg,
    badge: "🔥 Flagship Event 2026",
    title: "International Pan-African",
    highlight: "Youth Conference",
    description: "Join thousands of young African leaders, innovators, and changemakers for the most anticipated Pan-African youth gathering of the year.",
    meta: [
      { icon: Calendar, text: "October 2026" },
      { icon: MapPin, text: "Nairobi, Kenya" },
    ],
    ctaLabel: "Register Interest",
    ctaTo: ROUTES.join,
    secondaryLabel: "Learn More",
    secondaryTo: ROUTES.whatWeDo.programs,
  },
  {
    id: "educate",
    image: leadershipBg,
    badge: "Educate • Connect • Empower",
    title: "African Union",
    highlight: "Students' Platform",
    description: "A Pan-African platform unifying students across the continent and the Diaspora to collaborate, innovate, and drive Africa's transformation.",
    meta: [],
    ctaLabel: "Discover AUSP",
    ctaTo: ROUTES.whoWeAre.about,
    secondaryLabel: "Our Programs",
    secondaryTo: ROUTES.whatWeDo.programs,
  },
  {
    id: "unity",
    image: unityBg,
    badge: "Agenda 2063 & 2030",
    title: "Building Africa's Future",
    highlight: "Together",
    description: "Nurturing a generation of transformative leaders who will shape the world through education, critical thinking, and creativity across 55+ nations.",
    meta: [],
    ctaLabel: "View Our Mission",
    ctaTo: ROUTES.whoWeAre.mission,
    secondaryLabel: "Focus Areas",
    secondaryTo: ROUTES.whatWeDo.focusAreas,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 400);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-[140px] pb-24 overflow-hidden"
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        </div>
      ))}

      {/* Decorative */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-ausp-gold/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-ausp-blue-light/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 text-center transition-all duration-400 ${
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-semibold mb-6 animate-fade-in-up backdrop-blur-sm border border-primary-foreground/10">
          {slide.badge}
        </span>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {slide.title}{" "}
          <span className="text-gradient-gold">{slide.highlight}</span>
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/70 max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {slide.description}
        </p>

        {/* Meta info (conference) */}
        {slide.meta.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {slide.meta.map((m) => (
              <span key={m.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 text-primary-foreground font-medium text-sm">
                <m.icon className="w-4 h-4 text-secondary" />
                {m.text}
              </span>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to={slide.ctaTo}
            className="px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            {slide.ctaLabel} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to={slide.secondaryTo}
            className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105"
          >
            {slide.secondaryLabel}
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
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

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-10 h-3 bg-gold-gradient shadow-gold"
                : "w-3 h-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
