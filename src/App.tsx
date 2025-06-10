import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { usePageTracking } from "./hooks/usePageTracking"; // 👈 Importa il hook

// Pagine
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Team from "./pages/Team";
import WhyUs from "./pages/WhyUs";
import Companies from "./pages/Companies";
import Entities from "./pages/Entities";
import BusinessModel from "./pages/BusinessModel";
import Careers from "./pages/Careers";
import Partnership from "./pages/Partnership";
import PartnershipForm from "./pages/PartnershipForm";
import PlatformJourney from "./pages/PlatformJourney";
import PlatformJourneyEnties from "./pages/PlatformJourneyEnties";
import Opportunities from "./pages/Opportunities";

// 👇 Wrapper per usare il tracking dentro <BrowserRouter>
const TrackedRoutes = () => {
  usePageTracking(); // 👈 Attiva il tracking

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chi-siamo" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/perche-scegliere-noi" element={<WhyUs />} />
      <Route path="/aziende" element={<Companies />} />
      <Route path="/percorso-aziende" element={<PlatformJourney />} />
      <Route path="/opportunita-aziende" element={<Opportunities />} />
      <Route path="/enti" element={<Entities />} />
      <Route path="/percorso-enti" element={<PlatformJourneyEnties />} />
      <Route path="/opportunita-enti" element={<Opportunities />} />
      <Route path="/modello-di-business" element={<BusinessModel />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="/partnership-form" element={<PartnershipForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrackedRoutes /> {/* 👈 Usa i percorsi tracciati */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

