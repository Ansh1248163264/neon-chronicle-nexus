import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Leaderboard from "./pages/Leaderboard";
import Giveaways from "./pages/Giveaways";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import Troubleshooting from "./pages/Troubleshooting";
import CookiePolicy from "./pages/CookiePolicy";
import DataProtection from "./pages/DataProtection";
import PressKit from "./pages/PressKit";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support/troubleshooting" element={<Troubleshooting />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/presskit" element={<PressKit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
