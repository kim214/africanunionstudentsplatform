import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Handshake, GraduationCap, PenTool, Scale, Settings, Landmark, Globe, UserPlus, Target, BookOpen, Building, DollarSign, Languages, MapPin, Flag, ArrowRight, BarChart3, Image as ImageIcon, Megaphone, FileCheck, PiggyBank } from "lucide-react";
import { ROUTES } from "@/content/routes";

import globalAffairsImg from "@/assets/ministry-global-affairs.jpg";
import financeImg from "@/assets/ministry-finance.jpg";
import projectsImg from "@/assets/ministry-projects.jpg";
import languagesImg from "@/assets/ministry-languages.jpg";

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
  { icon: PenTool, name: "Editorial", programs: ["AUSP Magazine Issue 2", "Writing Skills Webinars", "Content strategy development"] },
  { icon: Landmark, name: "History", programs: ["African History Awareness Campaign", "Museum Collaboration Program", "Heritage preservation initiatives"] },
  { icon: Languages, name: "Language Depts", programs: ["Swahili for All Campaign", "French Connect Class", "Multilingual skills development"] },
  { icon: BookOpen, name: "ECOSOCC Unit", programs: ["AFCFTA Awareness Drive", "Cultural Heritage for Development Campaign", "Trade literacy programs"] },
  { icon: GraduationCap, name: "Scholarship", programs: ['"Did You Know?" Scholarship Series', "Virtual Career Accelerator", "Scholarship database management"] },
  { icon: ImageIcon, name: "Web & Graphics Dept", programs: ["Digital content creation", "Visual identity development", "Platform design and maintenance"] },
  { icon: UserPlus, name: "Membership Unit", programs: ["Membership Drive 1.0", "Digital Membership Card Rollout", "Onboarding programs"] },
  { icon: Megaphone, name: "Marketing & S.M Unit", programs: ["Brand awareness campaigns", "Social media engagement", "Community outreach initiatives"] },
  { icon: Scale, name: "Legal Dept", programs: ["AUSP Legal Registration Drive", "Code of Conduct Implementation", "Compliance monitoring"] },
  { icon: DollarSign, name: "Finance Dept", programs: ["Budget 2025 Finalization", "Financial reporting", "Resource allocation"] },
  { icon: FileCheck, name: "Audit Dept", programs: ["Financial audits", "Governance oversight", "Transparency reporting"] },
  { icon: BarChart3, name: "M & E Dept", programs: ["Impact assessment", "Program evaluation", "Performance tracking"] },
  { icon: Settings, name: "Operations Dept", programs: ["Leadership Training Series", "Mentorship Pipeline", "Process optimization"] },
  { icon: Handshake, name: "Partnerships Dept", programs: ["AUSP Partner Connect Summit", "Partnership-Building Bootcamp", "MOU development and management"] },
  { icon: PiggyBank, name: "Grants, Fundraising & Budgeting Dept", programs: ["Fundraising Drive", "Grant applications", "Budget planning and oversight"] },
  { icon: Target, name: "Agenda 2063 Unit", programs: ["Young Global Ambassadors Program", "AUH 2063 Launch", "Agenda 2063 awareness campaigns"] },
  { icon: Globe, name: "Diaspora Dept", programs: ["Diaspora Success Stories", "Diaspora Café", "Diaspora Forum Planning and Kick-off"] },
  { icon: MapPin, name: "External Relations & Volunteerism Dept", programs: ["International partnerships", "Volunteer coordination", "Cross-border collaboration"] },
  { icon: Target, name: "SDGs Unit", programs: ["SDGs Training Workshops", "Sustainable development advocacy", "Youth policy engagement"] },
];

const ministries = [
  {
    icon: Globe, name: "Ministry of Global Affairs", slug: "global-affairs", image: globalAffairsImg, progress: 70,
    objective: "To strengthen AUSP's connections with the African Diaspora and global partners.",
    programs: ["AUSP Diaspora Establishment Project", "Diaspora Forum Planning and Kick-off"],
    departments: ["Diaspora Dept", "External Relations & Volunteerism Dept", "SDGs Unit"],
  },
  {
    icon: DollarSign, name: "Ministry of Finance, Governance & Legality", slug: "finance-governance", image: financeImg, progress: 65,
    objective: "To ensure the financial sustainability, accountability, and effective resource management.",
    programs: ["Budget 2025 Finalization", "Fundraising Drive"],
    departments: ["Legal Dept", "Finance Dept", "Audit Dept"],
  },
  {
    icon: Building, name: "Ministry of Programs & Projects Management", slug: "projects-programs", image: projectsImg, progress: 85,
    objective: "To oversee the planning, coordination, and successful execution of flagship projects and partnerships.",
    programs: ["African Union House (AUH) 2063 Launch", "TEDxAUSP Preparation"],
    departments: ["M & E Dept", "Operations Dept", "Partnerships Dept", "Grants, Fundraising & Budgeting Dept", "Agenda 2063 Unit"],
  },
  {
    icon: UserPlus, name: "Ministry of Membership, Admissions & Scholarships", slug: "membership-admissions-scholarships", image: languagesImg, progress: 60,
    objective: "To grow and nurture AUSP membership, manage admissions, and expand scholarship opportunities for African youth.",
    programs: ["Membership Drive 1.0", '"Did You Know?" Scholarship Series', "Digital Membership Card Rollout"],
    departments: ["Scholarship Dept", "Web & Graphics Dept", "Membership Unit", "Marketing & S.M Unit"],
  },
  {
    icon: Languages, name: "Ministry of World Languages & Cultures", slug: "languages-cultures", image: languagesImg, progress: 50,
    objective: "To promote linguistic diversity, cultural awareness, and Pan-African identity.",
    programs: ["Swahili for All Campaign", "French Connect Class"],
    departments: ["Editorial Dept", "History Dept", "Language Depts", "ECOSOCC Unit"],
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
        ctaTo={ROUTES.whoWeAre.timeline}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ministries.map((m, i) => (
              <Link
                key={m.name}
                to={`/ministry/${m.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ${mins.visible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                {/* Image background */}
                <div className="absolute inset-0">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_55%_12%)] via-[hsl(215_55%_12%/0.85)] to-[hsl(215_55%_12%/0.6)]" />
                </div>
                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold group-hover:scale-110 transition-transform">
                      <m.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-primary-foreground">{m.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 rounded-full bg-primary-foreground/10 overflow-hidden">
                          <div className="h-full bg-gold-gradient rounded-full transition-all duration-1000" style={{ width: mins.visible ? `${m.progress}%` : "0%" }} />
                        </div>
                        <span className="text-xs text-primary-foreground/60">{m.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-primary-foreground/70 mb-4">{m.objective}</p>
                  {/* Programs */}
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Programs</h4>
                    <ul className="space-y-1.5">
                      {m.programs.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Departments */}
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-secondary/70 font-semibold mb-2">Departments</h4>
                    <div className="flex flex-wrap gap-2">
                      {m.departments.map((d) => (
                        <span key={d} className="px-3 py-1 rounded-full bg-primary-foreground/10 text-xs text-primary-foreground/70">{d}</span>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all">
                    View Ministry Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
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
