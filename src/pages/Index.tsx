import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ProgramsSection from "@/components/ProgramsSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <FocusAreasSection />
      <ProgramsSection />
      <TimelineSection />
      <FooterSection />
    </div>
  );
};

export default Index;
