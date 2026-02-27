import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const PageHero = ({ badge, title, highlight, description, ctaLabel, ctaTo }: PageHeroProps) => (
  <section className="relative pt-40 pb-20 bg-hero-gradient text-primary-foreground overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-ausp-gold/5 blur-3xl animate-float" />
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-ausp-blue-light/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-6 animate-fade-in-up">
        {badge}
      </span>
      <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {title} <span className="text-gradient-gold">{highlight}</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        {description}
      </p>
      {ctaLabel && ctaTo && (
        <Link
          to={ctaTo}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-foreground font-semibold shadow-gold hover:opacity-90 transition-all hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  </section>
);

export default PageHero;
