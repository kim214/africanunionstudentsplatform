import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Rocket, TrendingUp, BarChart3, Flag, CheckCircle, Target } from "lucide-react";
import { ROUTES } from "@/content/routes";

const useVisible = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const phases = [
  {
    icon: Rocket, period: "Oct – Dec 2025", title: "Implementation Phase",
    items: ["Recruitment, partnerships, proposal submissions", "General Assembly, departmental goals", "Website finalization, Kenyan project, organizational account setup"],
  },
  {
    icon: TrendingUp, period: "Jan – Mar 2026", title: "Growth Phase I",
    items: ["Major project implementation, scoreboard reviews", "Appointment letters, partnership finalization", "Mentee graduations"],
  },
  {
    icon: BarChart3, period: "Apr – Jun 2026", title: "Growth Phase II",
    items: ["Leadership reviews, additional trainings", "Internal audits, partner and event planning"],
  },
  {
    icon: Flag, period: "Jul – Sep 2026", title: "Culmination Phase",
    items: ["Major event finalizations, year-end reviews", "Publicity campaigns, internal evaluations"],
  },
];

const devTimeline = [
  { phase: "Phase 1", period: "November 2025", title: "Program Preparation", description: "Plan and design all departmental projects and activities. Develop detailed timelines, budgets, and resource requirements." },
  { phase: "Phase 2", period: "December 2025", title: "Partnerships & Funding", description: "Identify and engage potential partners, sponsors, and grant providers. Secure necessary funding and resource commitments." },
  { phase: "Phase 3", period: "Jan – Oct 2026", title: "Implementation", description: "Execute programs across all departments and regions. Deliver activities in leadership, entrepreneurship, education, and cultural empowerment." },
  { phase: "Phase 4", period: "Jan – Oct 2026", title: "Monitoring & Evaluation", description: "Continuously monitor progress, outputs, and outcomes. Conduct evaluations and prepare reports for stakeholders." },
];

const TimelinePage = () => {
  const timeline = useVisible();
  const dev = useVisible();
  const outcomes = useVisible();

  return (
    <PageLayout>
      <PageHero
        badge="Roadmap"
        title="AUSP Calendar"
        highlight="2025–2026"
        description="Four operational phases guiding AUSP from implementation through growth to culmination, aligned with AU Agenda 2063 and UN Agenda 2030."
        ctaLabel="Get Involved"
        ctaTo={ROUTES.join}
      />

      {/* Operational Seasons */}
      <section className="py-24 bg-muted/50" ref={timeline.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${timeline.visible ? "animate-fade-in-up" : "opacity-0"}`}>Annual Structure</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground ${timeline.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Operational <span className="text-gradient-gold">Seasons</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {phases.map((phase, i) => (
              <div key={phase.title} className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${timeline.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.15 * i}s` }}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-gradient shadow-gold z-10 mt-6" />
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

      {/* Development Timeline */}
      <section className="py-24 bg-hero-gradient text-primary-foreground" ref={dev.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-4 ${dev.visible ? "animate-fade-in-up" : "opacity-0"}`}>Development Timeline</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold ${dev.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Project <span className="text-gradient-gold">Phases</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {devTimeline.map((t, i) => (
              <div key={t.phase} className={`p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all ${dev.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <span className="text-xs font-bold text-secondary">{t.phase}</span>
                <p className="text-xs text-primary-foreground/50 mt-1">{t.period}</p>
                <h3 className="font-display text-lg font-bold mt-3 mb-2">{t.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-24 bg-background" ref={outcomes.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-12 ${outcomes.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Expected <span className="text-gradient-gold">Outcomes</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Disciplined and accountable organization",
                "Strengthened leadership pipeline",
                "Increased visibility and continental credibility",
                "Sustainable, measurable impact aligned with AU & UN frameworks",
              ].map((item, i) => (
                <div key={item} className={`flex items-start gap-3 text-left bg-card rounded-xl p-6 border border-border ${outcomes.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TimelinePage;
