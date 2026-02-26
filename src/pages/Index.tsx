import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import leaderPreston from "@/assets/leader-preston.png";
import leaderHajara from "@/assets/leader-hajara.png";
import leaderNeema from "@/assets/leader-neema.png";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen, Users, Lightbulb, Award, Crown, Rocket, GraduationCap, Heart,
  ArrowRight, Globe, Shield, Sparkles, Star, Target, Handshake
} from "lucide-react";

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

const missions = [
  { icon: BookOpen, number: "01", title: "Education", description: "Learning opportunities that enhance knowledge, leadership capacity, and critical thinking among youth across Africa." },
  { icon: Users, number: "02", title: "Connection", description: "A strong network uniting young Africans within the continent and the Diaspora for collaboration and cultural exchange." },
  { icon: Lightbulb, number: "03", title: "Empowerment", description: "Equipping youth with skills, confidence, and resources to create innovative solutions and drive positive change." },
  { icon: Award, number: "04", title: "Excellence", description: "Positioning AUSP as Africa's leading brand for educating, connecting, and empowering the next generation." },
];

const focusAreas = [
  { icon: Crown, title: "Leadership & Governance", description: "Building visionary and responsible leaders equipped with governance skills." },
  { icon: Rocket, title: "Entrepreneurship & Innovation", description: "Promoting youth entrepreneurship and fostering global partnerships." },
  { icon: GraduationCap, title: "Education & Skills", description: "Strengthening academic and professional capacity through learning programs." },
  { icon: Heart, title: "Cultural Empowerment", description: "Promoting African identity, unity, and cultural pride among youth." },
];

const values = [
  { icon: Globe, title: "Unity in Diversity", description: "Embracing Africa's cultural richness, promoting solidarity and shared purpose." },
  { icon: Shield, title: "Integrity", description: "Upholding honesty, transparency, and responsibility in all actions." },
  { icon: Sparkles, title: "Innovation", description: "Encouraging bold thinking to transform ideas into real solutions." },
  { icon: Star, title: "Leadership & Service", description: "Nurturing visionary leaders who serve with humility and inspire action." },
  { icon: Target, title: "Professionalism", description: "Committing to excellence and discipline, ensuring high standards." },
  { icon: Handshake, title: "Pan-Africanism", description: "Collective responsibility in advancing Africa's development and Agenda 2063." },
];

const Index = () => {
  const about = useVisible();
  const mission = useVisible();
  const focus = useVisible();
  const valuesSection = useVisible();
  const cta = useVisible();

  return (
    <PageLayout>
      <HeroSection />

      {/* About Preview */}
      <section className="py-24 bg-background" ref={about.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={about.visible ? "animate-fade-in-up" : "opacity-0"}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
                About AUSP
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Pan-African Movement for <span className="text-gradient-gold">Student Empowerment</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in 2020, the African Union Students Platform (AUSP) serves as a unifying platform that empowers students to collaborate, innovate, and contribute meaningfully to Africa's development and transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through networking, mentorship, and empowerment initiatives, AUSP helps young Africans translate academic knowledge into practical solutions that address real challenges facing their societies.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn more about AUSP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={`grid grid-cols-2 gap-4 ${about.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              {[
                { value: "2020", label: "Year Established", bg: "bg-blue-gradient" },
                { value: "55+", label: "African Nations", bg: "bg-gold-gradient" },
                { value: "20+", label: "Active Programs", bg: "bg-blue-gradient" },
                { value: "4", label: "Strategic Pillars", bg: "bg-gold-gradient" },
              ].map((s, i) => (
                <div key={s.label} className={`p-6 rounded-2xl ${s.bg} text-primary-foreground text-center shadow-lg hover:scale-105 transition-transform`} style={{ animationDelay: `${0.1 * i}s` }}>
                  <div className="text-3xl font-bold font-display mb-1">{s.value}</div>
                  <div className="text-sm opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24 bg-muted/50" ref={mission.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${mission.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Vision & Mission
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${mission.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Our <span className="text-gradient-gold">Mission Pillars</span>
            </h2>
            <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${mission.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              To build a dynamic platform that connects youth and students across Africa and beyond, nurturing a generation of transformative leaders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {missions.map((m, i) => (
              <div key={m.title} className={`group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${mission.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="absolute top-4 right-4 text-6xl font-display font-bold text-muted/60 select-none">{m.number}</div>
                <div className="w-14 h-14 rounded-xl bg-blue-gradient flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <m.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/mission" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore our full mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-hero-gradient text-primary-foreground" ref={focus.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-4 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Strategic Focus
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold mb-6 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Main <span className="text-gradient-gold">Focus Areas</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {focusAreas.map((area, i) => (
              <div key={area.title} className={`group flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/focus-areas" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
              Explore all focus areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background" ref={valuesSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${valuesSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Our Values
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${valuesSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={v.title} className={`group text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${valuesSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="w-14 h-14 rounded-xl bg-blue-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-muted/50" ref={cta.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${cta.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Leadership
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${cta.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Our <span className="text-gradient-gold">Leadership</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { name: "H.E. Preston Simbeya", role: "Founding President", image: leaderPreston },
              { name: "Ms. Hajara Yakub", role: "Executive Secretary", image: leaderHajara },
              { name: "Hon. Neema Godfrey", role: "Prime Minister", image: leaderNeema },
            ].map((leader, i) => (
              <div key={leader.name} className={`text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all hover:-translate-y-2 ${cta.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20 shadow-lg">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{leader.role}</p>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className={`max-w-3xl mx-auto grid grid-cols-3 gap-6 ${cta.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            {[
              { label: "Teamwork Efficiency", value: "92%" },
              { label: "Healthy Work Environment", value: "96%" },
              { label: "Team Socialization", value: "91%" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-card rounded-xl p-6 border border-border">
                <div className="text-2xl font-bold text-gradient-gold font-display">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Shape <span className="text-gradient-gold">Africa's Future?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Join AUSP and become part of a growing community of young African leaders, innovators, and changemakers across 55+ nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              Join AUSP Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/programs" className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
