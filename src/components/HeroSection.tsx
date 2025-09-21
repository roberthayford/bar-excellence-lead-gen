import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cocktail.jpg";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// Floating Bubble Component with performance optimization
const FloatingBubble = ({ delay = 0, duration = 15, size = "small", index }) => {
  const sizeClasses = {
    small: "w-1.5 h-1.5 sm:w-2 sm:h-2",
    medium: "w-2 h-2 sm:w-3 sm:h-3",
    large: "w-3 h-3 sm:w-4 sm:h-4"
  };

  // Pre-calculate position to avoid re-renders
  const leftPosition = useMemo(() => `${(index * 7) % 100}%`, [index]);

  return (
    <div
      className={`absolute ${sizeClasses[size]} bg-gradient-to-br from-white/10 to-accent/5 rounded-full animate-float-up will-change-transform`}
      style={{
        left: leftPosition,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        bottom: "-20px"
      }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
    </div>
  );
};

// Optimized Interactive Cocktail Glass
const InteractiveCocktailGlass = ({ mousePosition, isVisible }) => {
  const transformX = (mousePosition.x - 0.5) * 15; // Reduced movement for subtlety
  const transformY = (mousePosition.y - 0.5) * 15;
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-5 will-change-transform"
      style={{
        transform: `translate3d(${transformX}px, ${transformY}px, 0) translateY(-50%)`,
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)'
      }}
    >
      {/* Optimized Cocktail Glass SVG */}
      <svg
        width="180"
        height="220"
        viewBox="0 0 180 220"
        className="opacity-5 hover:opacity-10 transition-opacity duration-700"
      >
        {/* Glass Shape */}
        <path
          d="M45 45 Q45 75 75 110 L75 165 L105 165 L105 110 Q135 75 135 45 Z"
          fill="none"
          stroke="url(#glassGradient)"
          strokeWidth="1.5"
          className="opacity-60"
        />
        {/* Liquid */}
        <path
          d="M55 65 Q55 85 80 105 L100 105 Q125 85 125 65 Z"
          fill="url(#liquidGradient)"
          opacity="0.3"
          className="animate-liquid-subtle"
        />
        
        {/* Simplified Gradients */}
        <defs>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F4E5C2" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B7355" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Optimized Particle System
const FloatingParticles = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Reduced number of particles for better performance */}
      <div className="absolute animate-float-gentle opacity-20" style={{ top: '20%', left: '10%' }}>
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/10 blur-md" />
      </div>
      
      <div className="absolute animate-float-gentle-reverse opacity-20" style={{ top: '60%', right: '15%', animationDelay: '2s' }}>
        <div className="w-5 h-7 rounded-[50%] bg-gradient-to-br from-green-400/20 to-green-600/10 blur-md rotate-45" />
      </div>
      
      <div className="absolute animate-float-gentle opacity-15" style={{ bottom: '30%', left: '75%', animationDelay: '4s' }}>
        <div className="w-4 h-4 bg-gradient-to-br from-blue-100/20 to-white/10 blur-md" />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [textHover, setTextHover] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  const heroRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastMousePosition = useRef({ x: 0.5, y: 0.5 });

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Progressive loading
  useEffect(() => {
    // Load image first
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setIsLoaded(true), 100);
      setTimeout(() => setShowAnimations(true), 500);
    };
  }, []);

  // Optimized mouse tracking with requestAnimationFrame
  const handleMouseMove = useCallback((e) => {
    if (isReducedMotion || !heroRef.current) return;
    
    // Cancel previous animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Only update if there's significant movement
      const dx = Math.abs(x - lastMousePosition.current.x);
      const dy = Math.abs(y - lastMousePosition.current.y);
      
      if (dx > 0.01 || dy > 0.01) {
        setMousePosition({ x, y });
        lastMousePosition.current = { x, y };
      }
    });
  }, [isReducedMotion]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Optimized bubbles array
  const bubbles = useMemo(() => 
    isReducedMotion ? [] : Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 1.5,
      duration: 12 + (i % 3) * 4,
      size: ['small', 'medium', 'large'][i % 3]
    })), [isReducedMotion]
  );

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Optimized Background with lazy loading */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: !isReducedMotion ? `translate3d(${(mousePosition.x - 0.5) * 5}px, ${(mousePosition.y - 0.5) * 5}px, 0) scale(1.05)` : 'scale(1.05)',
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
          willChange: 'transform'
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        
        {/* Interactive gradient only if motion is allowed */}
        {!isReducedMotion && (
          <div 
            className="absolute inset-0 opacity-20 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.2) 0%, transparent 40%)`,
            }}
          />
        )}
      </div>

      {/* Conditional Animations based on motion preference */}
      {showAnimations && !isReducedMotion && (
        <>
          <FloatingParticles isVisible={!isReducedMotion} />
          <div className="absolute inset-0 pointer-events-none">
            {bubbles.map((bubble, idx) => (
              <FloatingBubble 
                key={bubble.id}
                index={idx}
                delay={bubble.delay}
                duration={bubble.duration}
                size={bubble.size}
              />
            ))}
          </div>
          <InteractiveCocktailGlass mousePosition={mousePosition} isVisible={!isReducedMotion} />
        </>
      )}

      {/* Featured Badge with staggered animation */}
      <div 
        className={`absolute top-6 right-6 sm:top-8 sm:right-8 z-20 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <a
          href="https://www.linkedin.com/your-bar-magazine-feature-link"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 hover:bg-white/10 hover:scale-105"
          aria-label="View Bar Excellence feature in Bar Magazine on LinkedIn"
        >
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-xs sm:text-sm font-light text-white/80 tracking-wide">Featured in</span>
            <span className="text-xs sm:text-sm font-serif font-medium text-accent/90">Bar Magazine</span>
          </div>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-accent transition-colors duration-300" />
        </a>
      </div>

      {/* Main Content with improved stagger */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Tagline with refined animation */}
          <div 
            className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="inline-flex items-center gap-2 text-accent/70 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              {!isReducedMotion && <Sparkles className="w-3 h-3 opacity-60" />}
              Elevating Hospitality Since 2009
              {!isReducedMotion && <Sparkles className="w-3 h-3 opacity-60" />}
            </span>
          </div>

          {/* Refined Headline with subtle interaction */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extralight text-white mb-6 sm:mb-8 leading-[0.95] tracking-tight transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
            onMouseEnter={() => !isReducedMotion && setTextHover(true)}
            onMouseLeave={() => setTextHover(false)}
          >
            <span 
              className="block transition-all duration-500 ease-out"
              style={{
                transform: textHover ? 'translateX(-5px)' : 'translateX(0)',
                textShadow: textHover ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none'
              }}
            >
              The Art of
            </span>
            <span 
              className="block mt-1 sm:mt-2 font-light italic text-accent/80 transition-all duration-500 ease-out"
              style={{
                transform: textHover ? 'translateX(5px) scale(1.02)' : 'translateX(0) scale(1)',
                textShadow: textHover ? '0 10px 40px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              Excellence
            </span>
          </h1>

          {/* Subtext with better readability */}
          <p 
            className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-white/70 mb-10 sm:mb-12 max-w-2xl leading-relaxed font-light transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            World-class cocktail training and consultancy for 
            <span className="text-white/90 font-normal ml-1 relative inline-block">
              luxury hospitality
              {!isReducedMotion && (
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              )}
            </span>
          </p>

          {/* Enhanced CTA with better hover state */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Link to="/training">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-transparent backdrop-blur-xs text-white border border-white/20 hover:border-white/40 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-light tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Services
                  <ArrowRight className="ml-2.5 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Refined hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
          </div>

          {/* Refined Trust Indicators */}
          <div 
            className={`mt-16 sm:mt-20 flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            {[
              { value: '500+', label: 'Venues Trained' },
              { value: '15', label: 'Years Excellence' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-accent/60 transition-colors duration-300 group-hover:text-accent/80">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-light tracking-wide text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Magazine Feature with refined style */}
          <div 
            className={`mt-10 sm:mt-12 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <a
              href="https://www.linkedin.com/your-bar-magazine-feature-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-accent/5 to-transparent backdrop-blur-xs border border-accent/15 hover:border-accent/30 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:bg-accent/10 hover:scale-[1.02]"
              aria-label="Read about Bar Excellence in Bar Magazine on LinkedIn"
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent/70" />
              <span className="text-xs sm:text-sm font-light text-white/70">As Featured in</span>
              <span className="text-xs sm:text-sm font-serif font-medium text-accent/80">Bar Magazine</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50 group-hover:text-accent/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/30 hover:text-white/50 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Scroll</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;