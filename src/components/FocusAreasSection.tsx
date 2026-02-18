import { useEffect, useRef, useState } from "react";
import { Crown, Rocket, GraduationCap, Heart } from "lucide-react";

const areas = [
  {
    icon: Crown,
    title: "Leadership & Governance",
    description: "Building a new generation of visionary and responsible leaders by equipping youth with leadership, management, and governance skills.",
    color: "from-primary to-ausp-blue-light",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship & Innovation",
    description: "Promoting youth entrepreneurship and innovation while fostering partnerships that connect students to global opportunities.",
    color: "from-ausp-gold to-ausp-gold-light",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Development",
    description: "Strengthening the academic and professional capacity of youth through learning programs that enhance knowledge and employability.",
    color: "from-primary to-ausp-blue-light",
  },
  {
    icon: Heart,
    title: "Cultural & Social Empowerment",
    description: "Promoting African identity, unity, and cultural pride while engaging youth in activities that preserve heritage.",
    color: "from-ausp-gold to-ausp-gold-light",
  },
];

const FocusAreasSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="focus" className="py-24 bg-hero-gradient text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Our Focus
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Main <span className="text-gradient-gold">Focus Areas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`group flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <area.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
