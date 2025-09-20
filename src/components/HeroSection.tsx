import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cocktail.jpg";
import { useState, useEffect, useRef, useCallback } from "react";

// Floating Bubble Component
const FloatingBubble = ({ delay = 0, duration = 15, size = "small" }) => {
  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4"
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} bg-gradient-to-br from-white/20 to-accent/10 rounded-full animate-float-up`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        bottom: "-20px"
      }}
    >
      <div className="absolute inset-0 rounded-full animate-pulse bg-white/10 blur-sm" />
    </div>
  );
};

// Interactive Cocktail Glass that follows mouse
const InteractiveCocktailGlass = ({ mousePosition }) => {
  const transformX = (mousePosition.x - 0.5) * 20;
  const transformY = (mousePosition.y - 0.5) * 20;
  
  return (
    <div 
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-5"
      style={{
        transform: `translate(${transformX}px, ${transformY}px) translateY(-50%)`,
        transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)'
      }}
    >
      {/* Cocktail Glass SVG */}
      <svg
        width="200"
        height="250"
        viewBox="0 0 200 250"
        className="opacity-10 hover:opacity-20 transition-opacity duration-700"
      >
        {/* Glass Shape */}
        <path
          d="M50 50 Q50 80 80 120 L80 180 L120 180 L120 120 Q150 80 150 50 Z"
          fill="none"
          stroke="url(#glassGradient)"
          strokeWidth="2"
          className="animate-pulse"
        />
        {/* Liquid */}
        <path
          d="M60 70 Q60 90 85 115 L115 115 Q140 90 140 70 Z"
          fill="url(#liquidGradient)"
          opacity="0.4"
          className="animate-liquid-swirl"
        />
        {/* Bubbles in Glass */}
        <circle cx="80" cy="90" r="3" fill="white" opacity="0.3" className="animate-float">
          <animate attributeName="cy" values="90;70;90" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="2" fill="white" opacity="0.3">
          <animate attributeName="cy" values="100;75;100" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="85" r="2.5" fill="white" opacity="0.3">
          <animate attributeName="cy" values="85;65;85" dur="3.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F4E5C2" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B7355" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating Garnish Elements */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-1 bg-accent/20 rounded-full" />
        <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-700/10 rounded-full mt-1 ml-1" />
      </div>
    </div>
  );
};

// Particle System for floating ingredients
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Citrus Slice */}
      <div className="absolute animate-float-diagonal" style={{ top: '20%', left: '10%' }}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400/10 to-orange-400/10 blur-sm" />
      </div>
      
      {/* Mint Leaf */}
      <div className="absolute animate-float-diagonal-reverse" style={{ top: '60%', right: '15%' }}>
        <div className="w-6 h-8 rounded-[50%] bg-gradient-to-br from-green-400/10 to-green-600/10 blur-sm rotate-45" />
      </div>
      
      {/* Ice Cube */}
      <div className="absolute animate-float" style={{ top: '40%', left: '80%' }}>
        <div className="w-5 h-5 bg-gradient-to-br from-blue-100/10 to-white/10 blur-sm" />
      </div>
      
      {/* Berry */}
      <div className="absolute animate-float-diagonal" style={{ bottom: '30%', left: '20%' }}>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-400/10 to-pink-400/10 blur-sm" />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [textHover, setTextHover] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  }, []);

  // Create bubbles array
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)]
  }));

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: `scale(1.1) translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`,
          transition: 'transform 1s cubic-bezier(0.23, 1, 0.320, 1)'
        }}
      >
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Particles System */}
      <FloatingParticles />

      {/* Bubble Animation System */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <FloatingBubble 
            key={bubble.id}
            delay={bubble.delay}
            duration={bubble.duration}
            size={bubble.size}
          />
        ))}
      </div>

      {/* Interactive Cocktail Glass */}
      <InteractiveCocktailGlass mousePosition={mousePosition} />

      {/* Featured In Bar Magazine Badge - Floating Top Right */}
      <div 
        className={`absolute top-6 right-6 sm:top-8 sm:right-8 z-20 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <a
          href="https://www.linkedin.com/your-bar-magazine-feature-link" // Replace with actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-accent/30 hover:border-accent/60 rounded-full px-3 sm:px-5 py-2 sm:py-3 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
          aria-label="View Bar Excellence feature in Bar Magazine on LinkedIn"
        >
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-xs sm:text-sm font-light text-white/90 tracking-wide">Featured in</span>
            <span className="text-xs sm:text-sm font-serif font-medium text-accent">Bar Magazine</span>
          </div>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 group-hover:text-accent transition-colors duration-300" />
        </a>
      </div>

      {/* Main Content - Ultra Clean Design with Interactive Elements */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Small Luxury Tagline with Sparkle Animation */}
          <div 
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-flex items-center gap-2 text-accent/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
              <Sparkles className="w-3 h-3 animate-pulse" />
              Elevating Hospitality Since 2009
              <Sparkles className="w-3 h-3 animate-pulse" />
            </span>
          </div>

          {/* Main Headline - Interactive on Hover */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extralight text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-200 cursor-default ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            onMouseEnter={() => setTextHover(true)}
            onMouseLeave={() => setTextHover(false)}
          >
            <span 
              className="block transition-all duration-500"
              style={{
                transform: textHover ? 'translateX(-10px)' : 'translateX(0)',
                textShadow: textHover ? '0 0 30px rgba(212, 175, 55, 0.5)' : 'none'
              }}
            >
              The Art of
            </span>
            <span 
              className="block mt-2 font-light italic text-accent/90 transition-all duration-500"
              style={{
                transform: textHover ? 'translateX(10px) scale(1.05)' : 'translateX(0) scale(1)',
                textShadow: textHover ? '0 0 40px rgba(212, 175, 55, 0.7)' : 'none'
              }}
            >
              Excellence
            </span>
          </h1>

          {/* Refined Subtext with Typewriter Effect */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            World-class cocktail training and consultancy for 
            <span className="text-white font-medium ml-1 relative">
              luxury hospitality
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-shimmer" />
            </span>
          </p>

          {/* Interactive CTA with Liquid Fill Effect */}
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
                {/* Liquid Fill Effect */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-accent/20 to-accent/10 group-hover:h-full transition-all duration-700 ease-out" />
              </Button>
            </Link>
          </div>

          {/* Animated Trust Indicators */}
          <div 
            className={`mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-white/60 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="group flex items-center gap-3 cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70 transition-transform duration-500 group-hover:scale-110">500+</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Venues Trained</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="group flex items-center gap-3 cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70 transition-transform duration-500 group-hover:scale-110">15</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Years Excellence</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="group flex items-center gap-3 cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-light text-accent/70 transition-transform duration-500 group-hover:scale-110">98%</span>
              <span className="text-xs sm:text-sm font-light tracking-wide">Client Satisfaction</span>
            </div>
          </div>

          {/* Prominent Magazine Feature with Glow Effect */}
          <div 
            className={`mt-12 transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://www.linkedin.com/your-bar-magazine-feature-link" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 rounded-full px-6 py-3 transition-all duration-500 hover:bg-accent/20 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 relative"
              aria-label="Read about Bar Excellence in Bar Magazine on LinkedIn"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <Award className="w-5 h-5 text-accent animate-pulse relative z-10" />
              <span className="text-sm font-light text-white/90 relative z-10">As Featured in</span>
              <span className="text-sm font-serif font-semibold text-accent relative z-10">Bar Magazine</span>
              <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;