import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Lightbulb, Award } from "lucide-react";

const missions = [
  {
    icon: BookOpen,
    number: "01",
    title: "Education",
    description: "To provide learning opportunities that enhance knowledge, leadership capacity, and critical thinking among youth and students across Africa.",
  },
  {
    icon: Users,
    number: "02",
    title: "Connection",
    description: "To build a strong network that unites young Africans within the continent and the Diaspora, fostering collaboration and cultural exchange.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Empowerment",
    description: "To equip youth and students with the skills, confidence, and resources needed to create innovative solutions and drive positive change.",
  },
  {
    icon: Award,
    number: "04",
    title: "Excellence",
    description: "To position AUSP as one of Africa's leading brands recognized for its commitment to educating, connecting, and empowering the next generation.",
  },
];

const MissionSection = () => {
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
    <section id="mission" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Vision & Mission
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Our <span className="text-gradient-gold">Mission Pillars</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            To build a dynamic platform that connects youth and students across Africa and beyond, nurturing a generation of transformative leaders who will shape the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m, i) => (
            <div
              key={m.title}
              className={`group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-display font-bold text-muted/60 select-none">
                {m.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-blue-gradient flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <m.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{m.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
