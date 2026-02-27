import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import FocusAreasPage from "./pages/FocusAreasPage";
import ProgramsPage from "./pages/ProgramsPage";
import TimelinePage from "./pages/TimelinePage";
import ContactPage from "./pages/ContactPage";
import MinistryDetailPage from "./pages/MinistryDetailPage";
import EventsPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ResourcesPage from "./pages/ResourcesPage";
import WhereWeWorkPage from "./pages/WhereWeWorkPage";
import DonatePage from "./pages/DonatePage";
import NotFound from "./pages/NotFound";
import { ROUTES } from "@/content/routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* New structure */}
          <Route path={ROUTES.whoWeAre.about} element={<AboutPage />} />
          <Route path={ROUTES.whoWeAre.mission} element={<MissionPage />} />
          <Route path={ROUTES.whoWeAre.timeline} element={<TimelinePage />} />
          <Route path={ROUTES.whatWeDo.focusAreas} element={<FocusAreasPage />} />
          <Route path={ROUTES.whatWeDo.programs} element={<ProgramsPage />} />
          <Route path={ROUTES.whereWeWork} element={<WhereWeWorkPage />} />
          <Route path={ROUTES.events} element={<EventsPage />} />
          <Route path={ROUTES.news} element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path={ROUTES.resources} element={<ResourcesPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.join} element={<ContactPage />} />
          <Route path={ROUTES.donate} element={<DonatePage />} />

          {/* Backwards-compatible paths */}
          <Route path="/about" element={<Navigate to={ROUTES.whoWeAre.about} replace />} />
          <Route path="/mission" element={<Navigate to={ROUTES.whoWeAre.mission} replace />} />
          <Route path="/focus-areas" element={<Navigate to={ROUTES.whatWeDo.focusAreas} replace />} />
          <Route path="/programs" element={<Navigate to={ROUTES.whatWeDo.programs} replace />} />
          <Route path="/timeline" element={<Navigate to={ROUTES.whoWeAre.timeline} replace />} />
          <Route path="/ministry/:slug" element={<MinistryDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
