import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTouchOptimization, useDeviceInfo } from "@/hooks/use-mobile";
import { useEffect } from "react";
import Index from "./pages/Index";
import Training from "./pages/Training";
import Events from "./pages/Events";
import BarMagazineFeature from "./pages/BarMagazineFeature";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Root component to apply device optimizations
const AppRoot = ({ children }: { children: React.ReactNode }) => {
  // Apply touch optimizations
  useTouchOptimization();
  
  // Set device class on body
  const { isMobile, isTablet, isDesktop, isTouch } = useDeviceInfo();
  
  useEffect(() => {
    // Add device-specific classes to body
    document.body.classList.toggle('is-mobile', isMobile);
    document.body.classList.toggle('is-tablet', isTablet);
    document.body.classList.toggle('is-desktop', isDesktop);
    document.body.classList.toggle('is-touch', isTouch);
    
    // Add viewport-height fix for mobile browsers
    if (isMobile) {
      const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVh();
      window.addEventListener('resize', setVh);
      return () => window.removeEventListener('resize', setVh);
    }
  }, [isMobile, isTablet, isDesktop, isTouch]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppRoot>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/training" element={<Training />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bar-magazine-feature" element={<BarMagazineFeature />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppRoot>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
