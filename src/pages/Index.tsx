import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import NewsTicker from "@/components/NewsTicker";
import NewsCarousel from "@/components/NewsCarousel";
import QuickLinks from "@/components/QuickLinks";
import UpcomingEvents from "@/components/UpcomingEvents";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <NewsTicker />
    <QuickLinks />
    <NewsCarousel />
    <UpcomingEvents />
  </PageLayout>
);

export default Index;
