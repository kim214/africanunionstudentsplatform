import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import MissionSection from "@/components/MissionSection";

const MissionPage = () => (
  <PageLayout>
    <PageHero
      badge="Vision & Mission"
      title="Our"
      highlight="Mission Pillars"
      description="To build a dynamic platform that connects youth and students across Africa and beyond, nurturing a generation of transformative leaders."
      ctaLabel="See Focus Areas"
      ctaTo="/focus-areas"
    />
    <MissionSection />
  </PageLayout>
);

export default MissionPage;
