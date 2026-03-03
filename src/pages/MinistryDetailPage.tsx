import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Globe, DollarSign, Building, Languages, UserPlus, ArrowLeft, Target, Users, CheckCircle, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const ministriesData: Record<string, {
  icon: typeof Globe;
  name: string;
  fullName: string;
  image: string;
  progress: number;
  objective: string;
  description: string;
  programs: { name: string; description: string }[];
  expectedContributions: string[];
  departments: { name: string; description: string; activities: string[] }[];
  keyStats: { label: string; value: string }[];
}> = {
  "global-affairs": {
    icon: Globe,
    name: "Global Affairs",
    fullName: "Ministry of Global Affairs",
    image: globalAffairsImg,
    progress: 70,
    objective: "To strengthen AUSP's connections with the African Diaspora and global partners, ensuring youth and students have access to international opportunities, mentorship, and networks.",
    description: "The Ministry of Global Affairs leads AUSP's international engagement strategy, building bridges between African students on the continent and in the Diaspora. Through structured platforms and collaborative forums, this ministry ensures that youth have access to global opportunities, mentorship networks, and cross-border partnerships that drive personal and professional growth.",
    programs: [
      {
        name: "AUSP Diaspora Establishment Project",
        description: "Establish structured platforms for engaging African students and youth in the Diaspora to contribute to AUSP initiatives and share best practices."
      },
      {
        name: "Diaspora Forum Planning and Kick-off",
        description: "Organize and launch forums that connect Diaspora members with local African youth, promoting collaboration, knowledge exchange, and development partnerships."
      }
    ],
    expectedContributions: [
      "Expand AUSP's reach and influence beyond the continent",
      "Mobilize resources, expertise, and mentorship from the Diaspora",
      "Foster global collaborations that support youth leadership, entrepreneurship, and skill-building initiatives"
    ],
    departments: [
      {
        name: "Diaspora Dept",
        description: "Coordinates engagement with African students and professionals in the Diaspora, creating channels for knowledge transfer and collaboration.",
        activities: ["Diaspora Success Stories", "Diaspora Café", "Cross-border networking events", "Mentorship matching programs"]
      },
      {
        name: "External Relations & Volunteerism Dept",
        description: "Manages international partnerships, volunteer coordination, and cross-border collaboration initiatives.",
        activities: ["International partnership development", "Volunteer coordination", "Cross-border collaboration events", "External engagement tracking"]
      },
      {
        name: "SDGs Unit",
        description: "Aligns AUSP programs with the UN Sustainable Development Goals and promotes youth engagement in sustainable development.",
        activities: ["SDGs Training Workshops", "Sustainable development advocacy", "Youth policy engagement", "Agenda 2030 awareness campaigns"]
      }
    ],
    keyStats: [
      { label: "Countries Reached", value: "15+" },
      { label: "Diaspora Members", value: "500+" },
      { label: "SDG Workshops", value: "8+" },
      { label: "Programs Planned", value: "4" }
    ]
  },
  "finance-governance": {
    icon: DollarSign,
    name: "Finance, Governance & Legality",
    fullName: "Ministry of Finance, Governance & Legality",
    image: financeImg,
    progress: 65,
    objective: "To ensure the financial sustainability, accountability, and effective resource management of AUSP programs, enabling smooth implementation of all departmental and organizational initiatives.",
    description: "The Ministry of Finance, Governance & Legality is the backbone of AUSP's operational integrity. It oversees budgeting, fundraising, legal registration, and governance frameworks, ensuring that every program is well-funded, legally compliant, and managed with transparency. This ministry also drives the legal registration of AUSP across African nations.",
    programs: [
      {
        name: "Budget 2025 Finalization",
        description: "Prepare and finalize the organizational budget for all programs and activities planned for 2025–2026, ensuring alignment with strategic priorities."
      },
      {
        name: "Fundraising Drive",
        description: "Mobilize financial resources through partnerships, grants, and sponsorships to support AUSP programs and enhance operational capacity."
      }
    ],
    expectedContributions: [
      "Ensure all programs are well-funded and financially managed",
      "Enable timely implementation of projects across ministries, regions, and countries",
      "Promote transparency and accountability in financial operations, building trust among partners and stakeholders"
    ],
    departments: [
      {
        name: "Legal Dept",
        description: "Handles all legal matters including organizational registration, compliance, and the implementation of codes of conduct.",
        activities: ["AUSP Legal Registration Drive", "Code of Conduct Implementation", "Legal advisory services", "Compliance monitoring"]
      },
      {
        name: "Finance Dept",
        description: "Manages budgeting, financial reporting, and resource allocation for all AUSP programs and activities.",
        activities: ["Budget 2025 Finalization", "Financial reporting", "Resource allocation", "Expenditure tracking"]
      },
      {
        name: "Audit Dept",
        description: "Ensures transparency and accountability through financial audits and governance oversight.",
        activities: ["Financial audits", "Governance oversight", "Transparency reporting", "Internal control reviews"]
      }
    ],
    keyStats: [
      { label: "Budget Coverage", value: "65%" },
      { label: "Fundraising Target", value: "$50K" },
      { label: "Legal Registrations", value: "5" },
      { label: "Audit Reports", value: "Annual" }
    ]
  },
  "projects-programs": {
    icon: Building,
    name: "Programs & Projects Management",
    fullName: "Ministry of Programs & Projects Management",
    image: projectsImg,
    progress: 85,
    objective: "To oversee the planning, coordination, and successful execution of AUSP's flagship projects and events, ensuring alignment with the organization's vision and strategic objectives.",
    description: "The Ministry of Programs & Projects Management oversees the planning, coordination, and execution of the organization’s most strategic and high-impact initiatives. It ensures that all projects are delivered with professionalism, innovation, and measurable results. Through strong operational oversight, effective monitoring and evaluation, strategic partnerships, resource mobilization, and alignment with long-term development goals, the ministry drives sustainable impact and institutional excellence.",
    programs: [
      {
        name: "African Union House (AUH) 2063 Launch",
        description: "Organize the official launch event for AUH 2063, creating a platform for youth engagement, continental awareness, and Agenda 2063 promotion."
      },
      {
        name: "TEDxAUSP Preparation",
        description: "Plan and prepare the TEDxAUSP event to showcase youth ideas, innovations, and solutions addressing societal and economic challenges in Africa."
      }
      
    ],
    expectedContributions: [
      "Provide a structured and professional framework for implementing high-impact programs",
      "Increase visibility and engagement of youth in continental development initiatives",
      "Encourage innovation, creativity, and collaboration among students and youth"
    ],
    departments: [
      {
        name: "M & E Dept",
        description: "Monitors and evaluates program performance, impact assessment, and ensures continuous improvement.",
        activities: ["Impact assessment", "Program evaluation", "Performance tracking", "Data-driven reporting"]
      },
      {
        name: "Operations Dept",
        description: "Manages internal processes, leadership training, and mentorship programs to ensure organizational efficiency.",
        activities: ["Leadership Training Series", "Mentorship Pipeline"]
      },
      {
        name: "Partnerships Dept",
        description: "Identifies and manages strategic partnerships with organizations, universities, and development agencies.",
        activities: ["AUSP Partner Connect Summit", "Partnership-Building Bootcamp","Partner engagement tracking"]
      },
      {
        name: "Grants, Fundraising & Budgeting Dept",
        description: "Secures funding through grants and fundraising, and manages project budgets.",
        activities: ["Fundraising Drive", "Grant applications", "Budget planning and oversight", "Donor relations"]
      },
      {
        name: "Agenda 2063 & 2030 Unit",
        description: "Aligns AUSP programs with the African Union's Agenda 2063 vision for continental development.",
        activities: ["Young Global Ambassadors Program", "SDGs Training Workshops", "Agenda 2063 awareness campaigns",]
      }
    ],
    keyStats: [
      { label: "Flagship Projects", value: "2" },
      { label: "Departments", value: "5" },
      { label: "Partnerships", value: "20+" },
      { label: "Agenda 2063 Programs", value: "4+" }
    ]
  },
  "membership-admissions-scholarships": {
    icon: UserPlus,
    name: "Membership, Admissions & Scholarships",
    fullName: "Ministry of Membership, Admissions & Scholarships",
    image: languagesImg,
    progress: 60,
    objective: "To grow and nurture AUSP membership, manage admissions, and expand scholarship opportunities for African youth and students.",
    description: "The Ministry of Membership, Admissions & Scholarships drives AUSP's growth and inclusivity. It oversees membership recruitment and engagement, admissions processes, scholarship programs, and digital presence. Through strategic marketing and member-focused initiatives, this ministry ensures that African youth have access to AUSP's opportunities and resources.",
    programs: [
      {
        name: "Membership Drive 1.0",
        description: "Launch targeted campaigns to grow AUSP membership across African nations and the Diaspora."
      },
      {
        name: '"Did You Know?" Scholarship Series',
        description: "Showcase scholarship opportunities and career development programs to increase awareness and applications."
      },
      {
        name: "Digital Membership Card Rollout",
        description: "Implement digital membership cards for streamlined verification and enhanced member experience."
      }
    ],
    expectedContributions: [
      "Grow AUSP membership across all regions",
      "Expand scholarship access and awareness for African youth",
      "Strengthen AUSP's digital presence and brand visibility"
    ],
    departments: [
      {
        name: "Scholarship Dept",
        description: "Manages scholarship opportunities and career development programs for African students.",
        activities: ['"Did You Know?" Scholarship Series', "Virtual Career Accelerator", "Scholarship database management", "Career mentorship programs"]
      },
      {
        name: "Web & Graphics Dept",
        description: "Develops and maintains AUSP's digital presence, visual identity, and content design.",
        activities: ["Digital content creation", "Visual identity development", "Platform design and maintenance", "Graphics for campaigns"]
      },
      {
        name: "Membership Unit",
        description: "Drives membership growth, manages member records, and develops engagement strategies.",
        activities: ["Membership Drive 1.0", "Digital Membership Card Rollout", "Member engagement tracking", "Onboarding programs"]
      },
      {
        name: "Marketing & S.M Unit",
        description: "Promotes AUSP brand awareness and engagement through marketing and social media.",
        activities: ["Brand awareness campaigns", "Social media engagement", "Community outreach initiatives", "Communication strategy"]
      }
    ],
    keyStats: [
      { label: "Membership Target", value: "10K+" },
      { label: "Scholarships Offered", value: "50+" },
      { label: "Departments", value: "4" },
      { label: "Digital Reach", value: "50K+" }
    ]
  },
  "languages-cultures": {
    icon: Languages,
    name: "World Languages & Cultures",
    fullName: "Ministry of World Languages & Cultures",
    image: languagesImg,
    progress: 50,
    objective: "To promote linguistic diversity, cultural awareness, and Pan-African identity among youth and students, fostering unity and effective communication across the continent.",
    description: "The Ministry of World Languages & Cultures celebrates Africa's rich linguistic and cultural heritage. Through language learning campaigns, editorial content, and cultural exchange programs, this ministry promotes Pan-African identity, cross-cultural understanding, and effective communication skills that enhance youth employability and regional engagement.",
    programs: [
      {
        name: "Swahili for All Campaign",
        description: "Implement language learning initiatives to promote Swahili as a unifying African language, enhancing communication and cultural connection among students."
      },
      {
        name: "French Connect Class",
        description: "Offer French language classes and cultural exchange sessions to strengthen multilingual skills and cross-cultural understanding among youth."
      }
    ],
    expectedContributions: [
      "Enhance youth capacity for cross-cultural communication and collaboration",
      "Promote African unity through language and cultural awareness programs",
      "Equip students with skills that increase employability, regional engagement, and participation in continental initiatives"
    ],
    departments: [
      {
        name: "Editorial Dept",
        description: "Produces AUSP publications, manages content creation, and develops writing skills among members.",
        activities: ["AUSP Magazine Issue 2", "Writing Skills Webinars", "Content strategy development", "Digital storytelling workshops"]
      },
      {
        name: "History Dept",
        description: "Preserves and promotes African history and heritage through awareness campaigns and collaborative programs.",
        activities: ["African History Awareness Campaign", "Museum Collaboration Program", "Historical documentation projects", "Heritage preservation initiatives"]
      },
      {
        name: "Language Depts",
        description: "Delivers language learning programs and promotes multilingualism across the continent.",
        activities: ["Swahili for All Campaign", "French Connect Class", "Multilingual skills development", "Cultural language exchange"]
      },
      {
        name: "ECOSOCC Unit",
        description: "Focuses on economic, social, and cultural development initiatives aligned with continental frameworks.",
        activities: ["AFCFTA Awareness Drive", "Cultural Heritage for Development Campaign", "Trade literacy programs", "Cultural exchange events"]
      }
    ],
    keyStats: [
      { label: "Languages Taught", value: "2+" },
      { label: "Cultural Programs", value: "6" },
      { label: "Departments", value: "4" },
      { label: "Participants Expected", value: "1K+" }
    ]
  }
};

const MinistryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const ministry = slug ? ministriesData[slug] : null;
  const hero = useVisible();
  const programs = useVisible();
  const depts = useVisible();
  const contributions = useVisible();

  if (!ministry) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Ministry Not Found</h1>
            <Link to="/programs" className="text-primary hover:underline">← Back to Programs</Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = ministry.icon;

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden" ref={hero.ref}>
        <img src={ministry.image} alt={ministry.fullName} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_55%_12%)] via-[hsl(215_55%_12%/0.7)] to-transparent" />
        <div className="relative container mx-auto px-4 pb-12 pt-32">
          <Link to="/programs" className={`inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors ${hero.visible ? "animate-fade-in" : "opacity-0"}`}>
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <div className={`flex items-center gap-4 mb-4 ${hero.visible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
              <Icon className="w-7 h-7 text-foreground" />
            </div>
            <div>
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Ministry</span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">{ministry.fullName}</h1>
            </div>
          </div>
          <p className={`text-primary-foreground/80 max-w-3xl text-lg mt-4 ${hero.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {ministry.objective}
          </p>
          {/* Progress Bar */}
          <div className={`mt-6 max-w-md ${hero.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-between text-sm text-primary-foreground/60 mb-2">
              <span>Progress</span>
              <span>{ministry.progress}%</span>
            </div>
            <div className="h-3 rounded-full bg-primary-foreground/10 overflow-hidden">
              <div className="h-full bg-gold-gradient rounded-full transition-all duration-1000" style={{ width: hero.visible ? `${ministry.progress}%` : "0%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ministry.keyStats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${hero.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">{ministry.description}</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted/50" ref={programs.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${programs.visible ? "animate-fade-in-up" : "opacity-0"}`}>Key Initiatives</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground ${programs.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Flagship <span className="text-gradient-gold">Programs</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ministry.programs.map((prog, i) => (
              <div key={prog.name} className={`bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1 ${programs.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.15 * i}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-gradient flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{prog.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{prog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-hero-gradient text-primary-foreground" ref={depts.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-4 ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`}>Organizational Structure</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Departments & <span className="text-gradient-gold">Units</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministry.departments.map((dept, i) => (
              <div key={dept.name} className={`bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all ${depts.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{dept.name}</h3>
                <p className="text-sm text-primary-foreground/70 mb-5">{dept.description}</p>
                <h4 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Key Activities</h4>
                <ul className="space-y-2">
                  {dept.activities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                      <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Contributions */}
      <section className="py-20 bg-background" ref={contributions.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground ${contributions.visible ? "animate-fade-in-up" : "opacity-0"}`}>
                Expected <span className="text-gradient-gold">Contributions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {ministry.expectedContributions.map((c, i) => (
                <div key={i} className={`flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-card ${contributions.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                  <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <p className="text-foreground">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in joining this Ministry?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Become part of AUSP and contribute to {ministry.fullName}'s mission to transform African youth leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors">
              Get Involved
            </Link>
            <Link to="/programs" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-foreground/30 text-foreground font-semibold hover:bg-foreground/10 transition-colors">
              Explore Other Ministries
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MinistryDetailPage;
