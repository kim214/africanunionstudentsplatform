import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Handshake, GraduationCap, PenTool, Scale, Settings, Landmark, Globe, UserPlus, Target, BookOpen, Building, DollarSign, Languages, MapPin, Flag } from "lucide-react";

const useVisible = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const departments = [
  { icon: Handshake, name: "Partnerships", programs: ["AUSP Partner Connect Summit", "Partnership-Building Bootcamp"] },
  { icon: GraduationCap, name: "Scholarships", programs: ['"Did You Know?" Scholarship Series', "Virtual Career Accelerator"] },
  { icon: PenTool, name: "Editorial", programs: ["AUSP Magazine Issue 2", "Writing Skills Webinars"] },
  { icon: Scale, name: "Legal", programs: ["AUSP Legal Registration Drive", "Code of Conduct Implementation"] },
  { icon: Settings, name: "Operations", programs: ["Leadership Training Series", "Mentorship Pipeline"] },
  { icon: Landmark, name: "History", programs: ["African History Awareness Campaign", "Museum Collaboration Program"] },
  { icon: Globe, name: "Diaspora", programs: ["Diaspora Success Stories", "Diaspora Café"] },
  { icon: UserPlus, name: "Membership", programs: ["Membership Drive 1.0", "Digital Membership Card Rollout"] },
  { icon: Target, name: "Agenda 2063 & 2030", programs: ["Young Global Ambassadors Program", "SDGs Training Workshops"] },
  { icon: BookOpen, name: "ECOSOC", programs: ["AFCFTA Awareness Drive", "Cultural Heritage for Development Campaign"] },
];

const ministries = [
  {
    icon: Globe, name: "Ministry of Global Affairs", progress: 70,
    objective: "To strengthen AUSP's connections with the African Diaspora and global partners.",
    programs: ["AUSP Diaspora Establishment Project", "Diaspora Forum Planning and Kick-off"],
  },
  {
    icon: DollarSign, name: "Ministry of Finance & Governance", progress: 65,
    objective: "To ensure the financial sustainability, accountability, and effective resource management.",
    programs: ["Budget 2025 Finalization", "Fundraising Drive"],
  },
  {
    icon: Building, name: "Ministry of Projects & Programs", progress: 85,
    objective: "To oversee the planning, coordination, and successful execution of flagship projects.",
    programs: ["African Union House (AUH) 2063 Launch", "TEDxAUSP Preparation"],
  },
  {
    icon: Languages, name: "Ministry of Languages & Cultures", progress: 50,
    objective: "To promote linguistic diversity, cultural awareness, and Pan-African identity.",
    programs: ["Swahili for All Campaign", "French Connect Class"],
  },
];

const ProgramsPage = () => {
  const depts = useVisible();
  const mins = useVisible();
  const other = useVisible();

  return (
    <PageLayout>
      <PageHero
        badge="Programs 2025–2026"
        title="Our"
        highlight="Programs"
        description="Initiatives organized across departments, ministries, and regions—each leading targeted programs to promote leadership, entrepreneurship, and knowledge development."
        ctaLabel="View Timeline"
        ctaTo="/timeline"
      />

      {/* Overview */}
      <section className="py-24 bg-background" ref={depts.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`}>Departmental Programs</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-6 ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Programs by <span className="text-gradient-gold">Department</span>
            </h2>
            <p className={`text-muted-foreground max-w-3xl mx-auto ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Each department leads targeted programs that address specific focus areas, including leadership, entrepreneurship, education, cultural empowerment, and social engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {departments.map((dept, i) => (
              <div key={dept.name} className={`group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.07 * i}s` }}>
                <div className="w-10 h-10 rounded-lg bg-blue-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <dept.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-3">{dept.name}</h3>
                <ul className="space-y-2">
                  {dept.programs.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-24 bg-hero-gradient text-primary-foreground" ref={mins.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-4 ${mins.visible ? "animate-fade-in-up" : "opacity-0"}`}>Ministries & Regional Roadmap</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold ${mins.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Ministerial <span className="text-gradient-gold">Programs</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ministries.map((m, i) => (
              <div key={m.name} className={`p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all ${mins.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
                    <m.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold">{m.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 rounded-full bg-primary-foreground/10 overflow-hidden">
                        <div className="h-full bg-gold-gradient rounded-full transition-all duration-1000" style={{ width: mins.visible ? `${m.progress}%` : "0%" }} />
                      </div>
                      <span className="text-xs text-primary-foreground/60">{m.progress}%</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/70 mb-3">{m.objective}</p>
                <ul className="space-y-1.5">
                  {m.programs.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Organs */}
      <section className="py-24 bg-background" ref={other.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground ${other.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Other Key <span className="text-gradient-gold">Organs</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Landmark, name: "Parliament", description: "Creates a platform where youth develop leadership skills, propose solutions to societal challenges, and cultivate visionary change-makers.", details: ["Bi-monthly virtual sessions", "Physical session in 2026", "Committees with 10+ parliamentarians"] },
              { icon: Flag, name: "Women's Forum", description: "Promotes gender equality, women empowerment, and women-specific initiatives across Africa.", details: ["Gender equality programs", "Women's rights advocacy", "Leadership development for women"] },
              { icon: MapPin, name: "Societies", description: "Engage youth in specialized thematic areas and implement programs aligned with AUSP's annual goals.", details: ["Workplans aligned with goals", "Leadership & skill development", "Community impact programs"] },
            ].map((organ, i) => (
              <div key={organ.name} className={`bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all hover:-translate-y-2 ${other.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center mb-5">
                  <organ.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{organ.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{organ.description}</p>
                <ul className="space-y-2">
                  {organ.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramsPage;
