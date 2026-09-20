import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import ProvincialLeadership from "./pages/ProvincialLeadership";
import InternationalLeadership from "./pages/InternationalLeadership";
import CEODirectoryPage from "./pages/CEODirectoryPage";
import CEOProfile from "./pages/CEOProfile";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./pages/EventDetail";
import EventRegistration from "./pages/EventRegistration";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetail from "./pages/ArticleDetail";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import PartnershipOpportunities from "./pages/PartnershipOpportunities";
import Sponsorship from "./pages/Sponsorship";
import CSRDonation from "./pages/CSRDonation";
import Crowdfunding from "./pages/Crowdfunding";
import CrowdfundingDetail from "./pages/CrowdfundingDetail";
import Gallery from "./pages/Gallery";
import GalleryAlbum from "./pages/GalleryAlbum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/provincial-leadership" element={<ProvincialLeadership />} />
          <Route path="/international-leadership" element={<InternationalLeadership />} />
          <Route path="/ceo-directory" element={<CEODirectoryPage />} />
          <Route path="/ceo/:slug" element={<CEOProfile />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/events/:slug/register" element={<EventRegistration />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partnership-opportunities" element={<PartnershipOpportunities />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/csr-donation" element={<CSRDonation />} />
          <Route path="/crowdfunding" element={<Crowdfunding />} />
          <Route path="/crowdfunding/:slug" element={<CrowdfundingDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:album" element={<GalleryAlbum />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
