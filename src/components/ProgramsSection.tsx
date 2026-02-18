import { useEffect, useRef, useState } from "react";
import { Handshake, GraduationCap, PenTool, Scale, Settings, Landmark, Globe, UserPlus, Target, BookOpen } from "lucide-react";

const departments = [
  { icon: Handshake, name: "Partnerships", programs: ["AUSP Partner Connect Summit", "Partnership-Building Bootcamp"] },
  { icon: GraduationCap, name: "Scholarships", programs: ['"Did You Know?" Scholarship Series', "Virtual Career Accelerator"] },
  { icon: PenTool, name: "Editorial", programs: ["AUSP Magazine Issue 2", "Writing Skills Webinars"] },
  { icon: Scale, name: "Legal", programs: ["Legal Registration Drive", "Code of Conduct Implementation"] },
  { icon: Settings, name: "Operations", programs: ["Leadership Training Series", "Mentorship Pipeline"] },
  { icon: Landmark, name: "History", programs: ["African History Awareness Campaign", "Museum Collaboration Program"] },
  { icon: Globe, name: "Diaspora", programs: ["Diaspora Success Stories", "Diaspora Café"] },
  { icon: UserPlus, name: "Membership", programs: ["Membership Drive 1.0", "Digital Membership Card Rollout"] },
  { icon: Target, name: "Agenda 2063 & 2030", programs: ["Young Global Ambassadors Program", "SDGs Training Workshops"] },
  { icon: BookOpen, name: "ECOSOC", programs: ["AFCFTA Awareness Drive", "Cultural Heritage for Development"] },
];

const ProgramsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Programs 2025–2026
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            Our <span className="text-gradient-gold">Programs</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            AUSP's initiatives are organized across departments, each leading targeted programs to maximize impact for youth across Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {departments.map((dept, i) => (
            <div
              key={dept.name}
              className={`group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.07 * i}s` }}
            >
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
  );
};

export default ProgramsSection;
