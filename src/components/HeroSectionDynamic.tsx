import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Import your assets here
import heroImage from "@/assets/hero-cocktail.jpg"; // Default fallback image

// Type definitions for media assets
type MediaAsset = {
  type: "image" | "video";
  src: string;
  poster?: string; // Optional poster for videos
};

// Media assets configuration using Unsplash placeholders
// Using darker, moodier images for better text contrast
const MEDIA_ASSETS: Record<string, MediaAsset> = {
  main: {
    type: "image",
    // Darker, moodier cocktail image for better text visibility
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop", // Dark luxury bar
  },
  magazine: {
    type: "image", 
    // Darker bar interior with better contrast
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2035&auto=format&fit=crop", // Moody bar interior
  },
  newsletter: {
    type: "image",
    // Darker bartender scene
    src: "https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?q=80&w=2021&auto=format&fit=crop", // Professional bartender in darker setting
  }
};

// Smoke Particle Component - Enhanced visibility
const SmokeParticle = ({ index, mousePosition }: { index: number; mousePosition: { x: number; y: number } }) => {
  const particleRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Initialize random position at bottom of screen
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight - 100;
    setPosition({ x: startX, y: startY });
    
    // Animate particle upward
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 4, // More horizontal drift
        y: prev.y - 3 // Faster upward movement
      }));
    }, 30); // Faster updates
    
    return () => clearInterval(interval);
  }, []);
  
  // React to mouse movement - more dramatic
  useEffect(() => {
    if (particleRef.current && mousePosition.x > 0) {
      const particle = particleRef.current;
      const rect = particle.getBoundingClientRect();
      const distX = mousePosition.x - rect.left;
      const distY = mousePosition.y - rect.top;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      if (distance < 200) { // Larger interaction radius
        // Push particles away from mouse with more force
        const angle = Math.atan2(distY, distX);
        const force = (200 - distance) / 200;
        const pushX = Math.cos(angle) * force * -60; // Stronger push
        const pushY = Math.sin(angle) * force * -60;
        
        particle.style.transform = `translate(${pushX}px, ${pushY}px) scale(${1 + force})`;
      } else {
        particle.style.transform = '';
      }
    }
  }, [mousePosition]);
  
  // Reset particle when it goes off screen
  useEffect(() => {
    if (position.y < -200) {
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + 100;
      setPosition({ x: startX, y: startY });
    }
  }, [position]);
  
  return (
    <div
      ref={particleRef}
      className="absolute pointer-events-none transition-transform duration-500 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: Math.max(0, Math.min(0.7, 1.5 - (window.innerHeight - position.y) / window.innerHeight)),
      }}
    >
      <div 
        className="w-48 h-48 rounded-full" // Larger particles
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)`,
          filter: 'blur(30px)',
          animation: `float ${8 + index * 1.5}s infinite ease-in-out`,
          animationDelay: `${index * 0.3}s`,
        }}
      />
    </div>
  );
};

// Content for rotating highlights with stronger overlays
const mediaHighlights = [
  {
    id: 0,
    type: "main",
    media: MEDIA_ASSETS.main,
    tagline: "Elevating Hospitality Since 2009",
    headline: ["The Art of", "Excellence"],
    subtext: "World-class cocktail training and consultancy for luxury hospitality",
    cta: {
      text: "Discover Our Services",
      link: "/training",
    },
    bgOverlay: "from-black/60 via-black/70 to-black/80", // Stronger overlay
  },
  {
    id: 1,
    type: "magazine",
    media: MEDIA_ASSETS.magazine,
    tagline: "Featured in Bar Magazine 2024",
    headline: ["Industry", "Recognition"],
    subtext: "Bar Excellence's innovative approach to hospitality training sets new standards",
    cta: {
      text: "Read the Feature",
      link: "https://www.linkedin.com/your-bar-magazine-feature-link",
      external: true,
    },
    bgOverlay: "from-black/60 via-black/70 to-black/80", // Stronger overlay
    icon: Award,
  },
  {
    id: 2,
    type: "newsletter",
    media: MEDIA_ASSETS.newsletter,
    tagline: "Weekly Industry Insights",
    headline: ["Hospitality", "Blueprint"],
    subtext: "Join thousands of professionals receiving curated expertise every week",
    cta: {
      text: "Subscribe to Newsletter",
      link: "https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/",
      external: true,
    },
    bgOverlay: "from-black/60 via-black/70 to-black/80", // Stronger overlay
    icon: BookOpen,
  },
];

const HeroSectionDynamic = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSmoke, setShowSmoke] = useState(true);
  const [fadeClass, setFadeClass] = useState('opacity-100'); // Add fade state
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate slides with fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade out
      setFadeClass('opacity-0');
      
      // Change slide after fade out completes
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % mediaHighlights.length);
        // Fade back in
        setFadeClass('opacity-100');
      }, 500); // Half second fade out
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, []);

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause();
      }
    });

    // Play current slide's video if it exists
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play().catch(err => {
        console.log("Video autoplay prevented:", err);
      });
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      // Start fade out
      setFadeClass('opacity-0');
      
      // Change slide after fade out completes
      setTimeout(() => {
        setCurrentSlide(index);
        // Fade back in
        setFadeClass('opacity-100');
      }, 500);
    }
  };

  const nextSlide = () => {
    // Start fade out
    setFadeClass('opacity-0');
    
    // Change slide after fade out completes
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaHighlights.length);
      // Fade back in
      setFadeClass('opacity-100');
    }, 500);
  };

  const prevSlide = () => {
    // Start fade out
    setFadeClass('opacity-0');
    
    // Change slide after fade out completes
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + mediaHighlights.length) % mediaHighlights.length);
      // Fade back in
      setFadeClass('opacity-100');
    }, 500);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  const handleVideoError = (index: number) => {
    console.log(`Video failed to load for slide ${index}, using fallback image`);
    setVideoErrors(prev => ({ ...prev, [index]: true }));
  };

  const current = mediaHighlights[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Smoke Effect Layer - Enhanced */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* CSS-based smoke animation - more visible */}
        <div className="absolute inset-0">
          <div 
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] opacity-60" // Larger and more opaque
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'smokeRise 12s infinite ease-out',
              transform: `translateX(${mousePosition.x * 0.05}px)`,
            }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)',
              filter: 'blur(70px)',
              animation: 'smokeRise 15s infinite ease-out 3s',
              transform: `translateX(${-mousePosition.x * 0.04}px)`,
            }}
          />
          <div 
            className="absolute bottom-0 left-1/2 w-[400px] h-[400px] opacity-45"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'smokeRise 18s infinite ease-out 6s',
              transform: `translateX(${mousePosition.x * 0.03}px)`,
            }}
          />
          
          {/* Additional dramatic smoke clouds */}
          <div 
            className="absolute bottom-0 left-[10%] w-[350px] h-[350px] opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)',
              filter: 'blur(50px)',
              animation: 'smokeRise 14s infinite ease-out 2s',
              transform: `translateX(${mousePosition.x * 0.02}px) rotate(${mousePosition.x * 0.05}deg)`,
            }}
          />
          <div 
            className="absolute bottom-0 right-[10%] w-[450px] h-[450px] opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)',
              filter: 'blur(55px)',
              animation: 'smokeRise 16s infinite ease-out 8s',
              transform: `translateX(${-mousePosition.x * 0.025}px) rotate(${-mousePosition.x * 0.03}deg)`,
            }}
          />
        </div>
        
        {/* More interactive smoke particles */}
        {showSmoke && Array.from({ length: 12 }).map((_, i) => ( // Increased to 12 particles
          <SmokeParticle key={i} index={i} mousePosition={mousePosition} />
        ))}
      </div>

      {/* Dynamic Background Media with Enhanced Fade Transitions */}
      {mediaHighlights.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 scale-105 transition-all duration-2000 ease-in-out ${
            index === currentSlide ? `${fadeClass} z-0` : 'opacity-0 z-[-1]'
          }`}
          style={{
            transform: `scale(${index === currentSlide ? 1.05 : 1.1})`,
            filter: `blur(${index === currentSlide ? '0px' : '2px'})`,
            transitionProperty: 'opacity, transform, filter',
            transitionDuration: index === currentSlide ? '500ms, 2000ms, 2000ms' : '500ms, 2000ms, 2000ms',
          }}
        >
          {slide.media.type === 'video' && !videoErrors[index] ? (
            <>
              {/* Video Background */}
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-2000 ease-in-out"
                src={slide.media.src}
                muted={isMuted}
                loop
                playsInline
                poster={slide.media.poster || heroImage}
                onError={() => handleVideoError(index)}
                style={{
                  transform: `scale(${index === currentSlide ? 1 : 1.1})`,
                }}
              />
              
              {/* Mute/Unmute Button for Videos */}
              {index === currentSlide && (
                <button
                  onClick={toggleMute}
                  className="absolute top-6 left-6 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              )}
            </>
          ) : (
            <>
              {/* Image Background with Ken Burns Effect */}
              <div
                className="absolute inset-0 transition-all duration-2000 ease-in-out"
                style={{ 
                  backgroundImage: `url(${
                    slide.media.type === 'video' && slide.media.poster 
                      ? slide.media.poster 
                      : slide.media.src
                  })`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transform: `scale(${index === currentSlide ? 1 : 1.1})`,
                  filter: `brightness(${index === currentSlide ? 1 : 0.8}) contrast(${index === currentSlide ? 1 : 1.1})`,
                }}
              />
            </>
          )}

          {/* Dynamic Gradient Overlay with smooth transitions */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b ${slide.bgOverlay} transition-all duration-2000 ease-in-out`}
            style={{
              opacity: index === currentSlide ? 1 : 0.8,
            }}
          />
          
          {/* Additional contrast layer for better text visibility */}
          <div 
            className="absolute inset-0 bg-black/20 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0.5,
            }}
          />
          
          {/* Subtle Vignette Effect with enhanced transitions */}
          <div 
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out" 
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 100%)',
              opacity: index === currentSlide ? 1 : 0.7,
            }}
          />
        </div>
      ))}

        <div className="flex flex-col items-center text-center">
          
          {/* Dynamic Tagline with enhanced typography */}
          <div 
            key={`tagline-${current.id}`}
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-accent/90 text-xs sm:text-sm font-medium tracking-[0.4em] uppercase drop-shadow-2xl font-sans">
              {current.tagline}
            </span>
          </div>

          {/* Dynamic Headline with Gambetta font */}
          <h1 
            key={`headline-${current.id}`}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extralight text-white mb-8 leading-[0.85] tracking-tight transition-all duration-1000 delay-200 drop-shadow-2xl ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
              fontFamily: 'Gambetta, Georgia, serif',
            }}
          >
            <span className="block">{current.headline[0]}</span>
            <span className="block mt-2 font-light italic text-accent">{current.headline[1]}</span>
          </h1>

          {/* Dynamic Subtext with refined typography */}
          <p 
            key={`subtext-${current.id}`}
            className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-12 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-300 drop-shadow-xl font-sans ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              textShadow: '0 1px 10px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            {current.subtext}
          </p>

          {/* Dynamic CTA with enhanced button typography */}
          <div 
            key={`cta-${current.id}`}
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {current.cta.external ? (
              <a
                href={current.cta.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-black/40 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    {current.cta.text}
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </a>
            ) : (
              <Link to={current.cta.link}>
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-black/40 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
                  style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    {current.cta.text}
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </Link>
            )}
          </div>

          {/* Slide Navigation Controls */}
          <div className="mt-12 flex items-center gap-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="group p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-3">
              {mediaHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-12 h-2 bg-accent'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="group p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
            </button>
          </div>

          {/* Static Trust Indicators with refined typography */}
          <div 
            className={`mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-white/60 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <span 
                className="text-2xl sm:text-3xl font-serif font-light text-accent/70"
                style={{ fontFamily: 'Gambetta, Georgia, serif' }}
              >
                500+
              </span>
              <span 
                className="text-xs sm:text-sm font-light tracking-wide"
                style={{ 
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                Venues Trained
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <span 
                className="text-2xl sm:text-3xl font-serif font-light text-accent/70"
                style={{ fontFamily: 'Gambetta, Georgia, serif' }}
              >
                15
              </span>
              <span 
                className="text-xs sm:text-sm font-light tracking-wide"
                style={{ 
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                Years Excellence
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <span 
                className="text-2xl sm:text-3xl font-serif font-light text-accent/70"
                style={{ fontFamily: 'Gambetta, Georgia, serif' }}
              >
                98%
              </span>
              <span 
                className="text-xs sm:text-sm font-light tracking-wide"
                style={{ 
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                Client Satisfaction
              </span>
            </div>
          </div>

          {/* Enhanced mouse-responsive glow effect */}
          <div 
            className="absolute z-[2] pointer-events-none"
            style={{
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
              width: '600px', // Larger glow
              height: '600px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)',
              filter: 'blur(50px)',
              transition: 'opacity 0.3s ease',
              opacity: showSmoke ? 0.8 : 0,
            }}
          />

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

          {/* Enhanced smoke animation keyframes */}
          <style jsx>{`
            @keyframes smokeRise {
              0% {
                transform: translateY(100%) translateX(0) scale(0.6);
                opacity: 0;
              }
              10% {
                opacity: 0.6;
              }
              30% {
                opacity: 0.5;
              }
              50% {
                transform: translateY(-30%) translateX(50px) scale(1.3);
                opacity: 0.4;
              }
              70% {
                opacity: 0.3;
              }
              100% {
                transform: translateY(-120%) translateX(100px) scale(1.8);
                opacity: 0;
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0) rotate(0deg) scale(1);
              }
              25% {
                transform: translateY(-30px) rotate(90deg) scale(1.1);
              }
              50% {
                transform: translateY(-20px) rotate(180deg) scale(1.2);
              }
              75% {
                transform: translateY(-25px) rotate(270deg) scale(1.1);
              }
            }
            
            .bg-radial-gradient {
              background: radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%);
            }
            
            /* Additional text shadow for all text elements */
            .text-shadow-strong {
              text-shadow: 0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5);
            }
            
            /* Glow effect on hover */
            .cocktail-glow:hover {
              text-shadow: 0 0 30px rgba(212,175,55,0.5);
            }
          `}</style>
        </div>
      </div>

      {/* Media Type Badge - Top Right */}
      {current.badge && (
        <div 
          className={`absolute top-6 right-6 sm:top-8 sm:right-8 z-20 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-accent/30 rounded-full px-4 py-2">
            {current.icon && <current.icon className="w-4 h-4 text-accent animate-pulse" />}
            <span className="text-xs sm:text-sm font-light text-white/90 tracking-wide">{current.badge}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSectionDynamic;
