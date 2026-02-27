import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { SITE } from "@/content/site";
import { Mail } from "lucide-react";

const DonatePage = () => (
  <PageLayout>
    <PageHero
      badge="Support AUSP"
      title="Donate"
      highlight="Now"
      description="Support AUSP programs, convenings, and youth-led initiatives across Africa and the Diaspora."
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-10 shadow-card border border-border text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Make a contribution
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            To donate, contact the AUSP team and we will share the appropriate donation channel and documentation.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent("Donation to AUSP")}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" /> Email to Donate
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default DonatePage;

