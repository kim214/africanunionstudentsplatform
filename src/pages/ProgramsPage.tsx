import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProgramsSection from "@/components/ProgramsSection";

const ProgramsPage = () => (
  <PageLayout>
    <PageHero
      badge="Programs 2025–2026"
      title="Our"
      highlight="Programs"
      description="Initiatives organized across departments, each leading targeted programs to promote leadership, entrepreneurship, and knowledge development."
      ctaLabel="View Timeline"
      ctaTo="/timeline"
    />
    <ProgramsSection />
  </PageLayout>
);

export default ProgramsPage;
