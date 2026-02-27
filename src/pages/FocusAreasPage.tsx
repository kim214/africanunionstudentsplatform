import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FocusAreasSection from "@/components/FocusAreasSection";
import { ROUTES } from "@/content/routes";

const FocusAreasPage = () => (
  <PageLayout>
    <PageHero
      badge="Our Focus"
      title="Main"
      highlight="Focus Areas"
      description="AUSP's work is organized around four strategic pillars driving youth empowerment and continental development."
      ctaLabel="Explore Programs"
      ctaTo={ROUTES.whatWeDo.programs}
    />
    <FocusAreasSection />
  </PageLayout>
);

export default FocusAreasPage;
