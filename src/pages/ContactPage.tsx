import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Globe, Send } from "lucide-react";

const ContactPage = () => {
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
        badge="Get Involved"
        title="Join the"
        highlight="Movement"
        description="Ready to be part of Africa's transformation? Connect with AUSP and contribute to building the future of the continent."
      />

      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`${visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Let's <span className="text-gradient-gold">Connect</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a student looking to join, a potential partner, or someone who shares our vision for Africa's future — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Globe, label: "Pan-African", value: "Serving 55+ African nations & Diaspora" },
                  { icon: MapPin, label: "Reach", value: "Continent-wide with regional directors" },
                  { icon: Mail, label: "Connect", value: "Join through our membership programs" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="mt-10 bg-accent rounded-2xl p-6 border border-primary/10">
                <h4 className="font-display text-lg font-bold text-foreground mb-3">Membership Requirements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Minimum 1 year leadership experience</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Recommendation letter, CV & personal statement</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> Aspiring leaders: 1-year shadowing opportunity available</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-card rounded-2xl p-8 shadow-card border border-border ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" placeholder="Your country" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none" placeholder="Tell us about yourself and your interest in AUSP..." />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-foreground font-semibold shadow-gold hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
