import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Shield, Eye, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Transparency", description: "Independently governed by its own constitution, AUSP upholds openness in all operations." },
  { icon: Users, title: "Unity", description: "Standing as a bridge for African students on the continent and in the Diaspora." },
  { icon: Eye, title: "Accountability", description: "Ensuring goals and objectives are achieved with integrity and consistency." },
];

const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      <PageHero
        badge="About AUSP"
        title="Building Africa's Future"
        highlight="Through Unity"
        description="A Pan-African, community-based organization established in 2020 to connect intellectual African students across the continent and the Diaspora."
        ctaLabel="View Our Mission"
        ctaTo="/mission"
      />

      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`prose prose-lg mx-auto text-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The African Union Students Platform (AUSP) serves as a unifying platform that empowers students to collaborate, innovate, and contribute meaningfully to the development and transformation of Africa. The platform strives to maximize the potential of African students by fostering togetherness, creativity, and leadership.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Through networking, mentorship, and empowerment initiatives, AUSP helps young Africans translate academic knowledge into practical solutions that address real challenges facing their societies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guided by a vision to build a trustworthy and well-structured platform for continuous personal and professional growth, AUSP nurtures talent, promotes innovation, and cultivates a generation of socially responsible and impact-driven leaders.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
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

            {/* Problem & Solution */}
            <div className="mt-20 grid md:grid-cols-2 gap-8">
              <div className={`bg-destructive/5 border border-destructive/20 rounded-2xl p-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Across Africa, youth and students face challenges that limit their potential. Many lack access to quality education, leadership mentorship, and opportunities for skills advancement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Inadequate mentorship and training</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Weak collaboration networks</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" /> Insufficient cultural awareness engagement</li>
                </ul>
              </div>
              <div className={`bg-accent border border-primary/20 rounded-2xl p-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AUSP focuses on creating opportunities that enhance leadership, entrepreneurship, and social engagement through structured programs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Leadership development & mentorship</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Entrepreneurship & network support</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Cultural and social engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
