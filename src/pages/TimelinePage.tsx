import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import TimelineSection from "@/components/TimelineSection";

const TimelinePage = () => (
  <PageLayout>
    <PageHero
      badge="Roadmap"
      title="AUSP Calendar"
      highlight="2025–2026"
      description="Four operational phases guiding AUSP from implementation through growth to culmination, aligned with AU Agenda 2063 and UN Agenda 2030."
      ctaLabel="Get Involved"
      ctaTo="/contact"
    />
    <TimelineSection />
  </PageLayout>
);

export default TimelinePage;
