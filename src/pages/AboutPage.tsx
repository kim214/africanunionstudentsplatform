import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Shield, Eye, Users, Globe, Sparkles, Star, Target, Handshake, CheckCircle } from "lucide-react";
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

const coreValues = [
  { icon: Shield, title: "Transparency", description: "Independently governed by its own constitution, AUSP upholds openness in all operations." },
  { icon: Users, title: "Unity", description: "Standing as a bridge for African students on the continent and in the Diaspora." },
  { icon: Eye, title: "Accountability", description: "Ensuring goals and objectives are achieved with integrity and consistency." },
];

const allValues = [
  { icon: Globe, title: "Unity in Diversity", description: "We embrace Africa's cultural and linguistic richness, promoting solidarity, mutual respect, and shared purpose among youth across the continent and the diaspora." },
  { icon: Shield, title: "Integrity", description: "We uphold honesty, transparency, and responsibility in all our actions to maintain trust, credibility, and ethical leadership." },
  { icon: Sparkles, title: "Innovation & Creativity", description: "We encourage bold thinking and creativity, empowering African youth to transform ideas into real solutions that drive development." },
  { icon: Star, title: "Leadership & Service", description: "We nurture visionary leaders who lead by example, serve with humility, and inspire others to act for the good of their communities." },
  { icon: Target, title: "Professionalism", description: "We commit to excellence, discipline, and competence in every task, ensuring that our work reflects high standards and respect for others." },
  { icon: Handshake, title: "Pan-Africanism", description: "Guided by the spirit of unity and self-reliance, we encourage youth to take collective responsibility in advancing Africa's development and realizing Agenda 2063." },
];

const AboutPage = () => {
  const story = useVisible();
  const values = useVisible();
  const fullValues = useVisible();
  const problem = useVisible();
  const structure = useVisible();

  return (
    <PageLayout>
      <PageHero
        badge="About AUSP"
        title="Building Africa's Future"
        highlight="Through Unity"
        description="A Pan-African, community-based organization established in 2020 to connect intellectual African students across the continent and the Diaspora."
        ctaLabel="View Our Mission"
        ctaTo={ROUTES.whoWeAre.mission}
      />

      {/* Story */}
      <section className="py-24 bg-background" ref={story.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center ${story.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">A Brief Story About <span className="text-gradient-gold">AUSP</span></h2>
            </div>
            <div className={`space-y-6 ${story.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The African Union Students Platform (AUSP) is a Pan-African, community-based organization established in 2020 with the mission to connect intellectual African students across the continent and the Diaspora. AUSP serves as a unifying platform that empowers students to collaborate, innovate, and contribute meaningfully to the development and transformation of Africa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The platform strives to maximize the potential of African students by fostering togetherness, creativity, and leadership. Through networking, mentorship, and empowerment initiatives, AUSP helps young Africans translate academic knowledge into practical solutions that address real challenges facing their societies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guided by a vision to build a trustworthy and well-structured platform for continuous personal and professional growth, AUSP nurtures talent, promotes innovation, and cultivates a generation of socially responsible and impact-driven leaders.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Independently governed by its own constitution, AUSP upholds the principles of transparency, unity, and accountability. It continues to stand as a voice and bridge for African students—both on the continent and in the Diaspora—driving the shared dream of a prosperous, united, and self-reliant Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/50" ref={values.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((v, i) => (
                <div
                  key={v.title}
                  className={`text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${values.visible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.15 * i}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-gradient flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-background" ref={problem.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 ${problem.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">The Challenge & <span className="text-gradient-gold">Our Solution</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`bg-destructive/5 border border-destructive/20 rounded-2xl p-8 ${problem.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Across Africa, youth and students continue to face challenges that limit their potential to contribute effectively to the continent's development. Many lack access to quality education, leadership mentorship, and opportunities for skills advancement.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Inadequate mentorship and training hinder youth participation in governance and innovation</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Many students lack access to financial, technical, and collaborative opportunities</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Insufficient engagement with African heritage reduces unity and collective progress</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Weak entrepreneurship ecosystems limit growth and transformation</li>
                </ul>
              </div>
              <div className={`bg-accent border border-primary/20 rounded-2xl p-8 ${problem.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AUSP focuses on creating opportunities that enhance leadership, entrepreneurship, and social engagement. By providing mentorship, skill development, and cultural awareness programs, the platform empowers young Africans.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Leadership development through mentorship, training, and practical experiences</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Entrepreneurship & network support with partnerships and funding access</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Cultural and social engagement promoting African heritage and civic responsibility</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Structured programs aligned with AU Agenda 2063 and UN Agenda 2030</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Values */}
      <section className="py-24 bg-hero-gradient text-primary-foreground" ref={fullValues.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-4 ${fullValues.visible ? "animate-fade-in-up" : "opacity-0"}`}>Our Values</span>
            <h2 className={`font-display text-3xl md:text-4xl font-bold ${fullValues.visible ? "animate-fade-in-up" : "opacity-0"}`}>What We <span className="text-gradient-gold">Stand For</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {allValues.map((v, i) => (
              <div key={v.title} className={`p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all ${fullValues.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-24 bg-background" ref={structure.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-8 ${structure.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Organizational <span className="text-gradient-gold">Structure</span>
            </h2>
            <p className={`text-muted-foreground leading-relaxed mb-8 ${structure.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Since its creation, AUSP has served as a continental hub for African students to unite, lead, and advocate for issues that matter most. The organizational structure includes the Founding Board, Board of Directors, Parliament, Progressive Committee, Cabinet Ministers, Regional Directors, Country Directors, and grassroots Club Leaders.
            </p>
            <div className={`grid sm:grid-cols-2 md:grid-cols-4 gap-4 ${structure.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              {["Founding Board", "Parliament", "Cabinet Ministers", "Regional Directors", "Country Directors", "Progressive Committee", "Women's Forum", "Societies"].map((item) => (
                <div key={item} className="bg-card rounded-xl p-4 border border-border text-center hover:border-primary/30 transition-all">
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
