import { useEffect, useRef, useState } from "react";
import { Rocket, TrendingUp, BarChart3, Flag } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    period: "Oct – Dec 2025",
    title: "Implementation Phase",
    items: ["Recruitment & partnerships", "General Assembly & goals", "Website finalization"],
  },
  {
    icon: TrendingUp,
    period: "Jan – Mar 2026",
    title: "Growth Phase I",
    items: ["Major project rollout", "Scoreboard reviews", "Mentee graduations"],
  },
  {
    icon: BarChart3,
    period: "Apr – Jun 2026",
    title: "Growth Phase II",
    items: ["Leadership reviews", "Internal audits", "Event planning"],
  },
  {
    icon: Flag,
    period: "Jul – Sep 2026",
    title: "Culmination Phase",
    items: ["Year-end reviews", "Major events", "Publicity campaigns"],
  },
];

const TimelineSection = () => {
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
    <section id="timeline" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Roadmap
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            AUSP Calendar <span className="text-gradient-gold">2025–2026</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-gradient shadow-gold z-10 mt-6" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/20 transition-all">
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="w-10 h-10 rounded-lg bg-blue-gradient flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-secondary">{phase.period}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                  <ul className={`space-y-1.5 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        {i % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />}
                        <span className="flex-1">{item}</span>
                        {i % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 hidden md:block" />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
