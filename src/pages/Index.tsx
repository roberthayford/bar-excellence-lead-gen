import Navigation from "@/components/Navigation";
// Option 1: Keep static hero
// import HeroSection from "@/components/HeroSection";

// Option 2: Use dynamic hero for better UX
import HeroSectionDynamic from "@/components/HeroSectionDynamic";

import FeaturedMediaSection from "@/components/FeaturedMediaSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Dynamic Hero with rotating media highlights */}
      <HeroSectionDynamic />
      
      {/* Keep FeaturedMediaSection for detailed information */}
      <FeaturedMediaSection />
      
      <ServicesSection />
      <TestimonialsSection />
      
      {/* Elegant CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extralight text-foreground mb-6">
            Begin Your Journey to Excellence
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 font-light max-w-2xl mx-auto">
            Join the world's most prestigious venues in delivering exceptional hospitality experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 text-lg font-light tracking-wider shadow-gold hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </span>
              </Button>
            </Link>
            <Link to="/training">
              <Button 
                size="lg"
                variant="outline"
                className="border-border hover:border-accent/50 hover:bg-accent/5 px-10 py-5 text-lg font-light tracking-wider transition-all duration-300"
              >
                Explore Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
