import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            About AUSP
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Building Africa's Future{" "}
            <span className="text-gradient-gold">Through Unity</span>
          </h2>
          <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            The African Union Students Platform (AUSP) is a Pan-African, community-based organization established in 2020 with the mission to connect intellectual African students across the continent and the Diaspora. AUSP serves as a unifying platform that empowers students to collaborate, innovate, and contribute meaningfully to the development and transformation of Africa.
          </p>
          <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            Guided by a vision to build a trustworthy and well-structured platform for continuous personal and professional growth, AUSP nurtures talent, promotes innovation, and cultivates a generation of socially responsible and impact-driven leaders.
          </p>
          <p className={`text-base text-muted-foreground leading-relaxed ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            Independently governed by its own constitution, AUSP upholds the principles of <span className="font-semibold text-foreground">transparency, unity, and accountability</span>—standing as a voice and bridge for African students driving the shared dream of a prosperous, united, and self-reliant Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
