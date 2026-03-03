import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Globe, MapPin, Users } from "lucide-react";

const WhereWeWorkPage = () => (
  <PageLayout>
    <PageHero
      badge="Where We Work"
      title="Across"
      highlight="Africa & Diaspora"
      description="AUSP serves as a continental bridge for African students—connecting chapters, leaders, and partners across regions and beyond."
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Pan-African", text: "Serving 55+ African nations & Diaspora" },
            { icon: Users, title: "Reach", text: "Continent-wide with regional directors" },
            { icon: MapPin, title: "Coordination", text: "Johannesburg, South Africa" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default WhereWeWorkPage;

