import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cocktail.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
      </div>

      {/* Main Content - Ultra Clean Design */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Small Luxury Tagline */}
          <div 
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-accent/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
              Elevating Hospitality Since 2009
            </span>
          </div>

          {/* Main Headline - Powerful & Simple */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extralight text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block">The Art of</span>
            <span className="block mt-2 font-light italic text-accent/90">Excellence</span>
          </h1>

          {/* Refined Subtext */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            World-class cocktail training and consultancy for 
            <span className="text-white"> luxury hospitality</span>
          </p>

          {/* Single, Powerful CTA */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link to="/training">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Services
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
          </div>

          {/* Minimal Trust Indicators - Clean Typography */}
          <div 
            className={`mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-white/60 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70">500+</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Venues Trained</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70">15</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Years Excellence</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70">98%</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Minimal Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>

      {/* Add custom gradient style to index.css if needed */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;