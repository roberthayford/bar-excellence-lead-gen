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
      
      {/* Luxury CTA Section with enhanced design */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        {/* Sophisticated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        
        {/* Premium pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.accent)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Content container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative elements */}
          <div className="mx-auto mb-10 flex justify-center items-center">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"></div>
            <div className="mx-2 text-accent">✦</div>
            <div className="w-20 h-px bg-gradient-to-r from-accent/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Refined heading with gradient text effect */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-8 leading-tight tracking-tight">
            Begin Your Journey to<br/>
            <span className="font-light italic bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent to-accent/80">Hospitality Excellence</span>
          </h2>
          
          {/* Enhanced subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Join the world's most prestigious venues in elevating guest experiences through our award-winning training and consultancy services
          </p>
          
          {/* Premium CTA layout */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="sm:w-auto">
              <Button 
                size="lg"
                className="w-full group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-12 py-7 text-lg font-medium tracking-wider transition-all duration-500 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
            
            <Link to="/training" className="sm:w-auto">
              <Button 
                size="lg"
                variant="outline"
                className="w-full group relative overflow-hidden border-2 border-accent/30 hover:border-accent/50 hover:bg-accent/5 px-12 py-7 text-lg font-light tracking-wider transition-all duration-500"
              >
                <span className="relative z-10 flex items-center">
                  Explore Training Programs
                  <ArrowRight className="ml-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Social proof element */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground/70">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-light text-accent mb-1">500+</p>
              <p className="text-xs sm:text-sm font-light tracking-wide">Venues Trained</p>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-border/40"></div>
            
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-light text-accent mb-1">15</p>
              <p className="text-xs sm:text-sm font-light tracking-wide">Years Excellence</p>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-border/40"></div>
            
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-light text-accent mb-1">98%</p>
              <p className="text-xs sm:text-sm font-light tracking-wide">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
