import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { BookOpen, CalendarRange, Files, Newspaper } from "lucide-react";
import { ROUTES } from "@/content/routes";

const ResourcesPage = () => (
  <PageLayout>
    <PageHero
      badge="Resources"
      title="Resources"
      highlight="Hub"
      description="Key pages and materials that support AUSP’s work, programs, and roadmap."
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Files,
              title: "Programs 2025–2026",
              description:
                "Initiatives organized across departments, ministries, and regions—each leading targeted programs to promote leadership, entrepreneurship, and knowledge development.",
              to: ROUTES.whatWeDo.programs,
            },
            {
              icon: CalendarRange,
              title: "AUSP Calendar 2025–2026",
              description:
                "Four operational phases guiding AUSP from implementation through growth to culmination, aligned with AU Agenda 2063 and UN Agenda 2030.",
              to: ROUTES.whoWeAre.timeline,
            },
            {
              icon: BookOpen,
              title: "Main Focus Areas",
              description:
                "AUSP's work is organized around four strategic pillars driving youth empowerment and continental development.",
              to: ROUTES.whatWeDo.focusAreas,
            },
            {
              icon: Newspaper,
              title: "Latest News",
              description:
                "Highlights and updates from AUSP programs, chapters, and continental engagement.",
              to: ROUTES.news,
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <span className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ResourcesPage;

