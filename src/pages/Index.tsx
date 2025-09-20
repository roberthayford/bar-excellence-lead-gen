import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FeaturedContentSection from "@/components/FeaturedContentSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <FeaturedContentSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Index;
