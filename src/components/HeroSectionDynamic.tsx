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
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaHighlights.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [mediaHighlights.length]);

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
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaHighlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaHighlights.length) % mediaHighlights.length);
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
      {/* Dynamic Background Media */}
      {mediaHighlights.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 scale-105 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          {slide.media.type === 'video' && !videoErrors[index] ? (
            <>
              {/* Video Background */}
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className="absolute inset-0 w-full h-full object-cover"
                src={slide.media.src}
                muted={isMuted}
                loop
                playsInline
                poster={slide.media.poster || heroImage}
                onError={() => handleVideoError(index)}
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
              {/* Image Background (or fallback for failed videos) */}
              <div
                className="absolute inset-0"
                style={{ 
                  backgroundImage: `url(${
                    slide.media.type === 'video' && slide.media.poster 
                      ? slide.media.poster 
                      : slide.media.src
                  })`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </>
          )}

          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgOverlay} transition-all duration-1000`} />
          
          {/* Additional contrast layer for better text visibility */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Subtle Vignette Effect */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 100%)'
          }} />
        </div>
      ))}

      {/* Main Content - Dynamic */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Dynamic Tagline with text shadow for better visibility */}
          <div 
            key={`tagline-${current.id}`}
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-accent/90 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase drop-shadow-2xl">
              {current.tagline}
            </span>
          </div>

          {/* Dynamic Headline with improved contrast */}
          <h1 
            key={`headline-${current.id}`}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extralight text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-200 drop-shadow-2xl ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            <span className="block">{current.headline[0]}</span>
            <span className="block mt-2 font-light italic text-accent">{current.headline[1]}</span>
          </h1>

          {/* Dynamic Subtext with better readability */}
          <p 
            key={`subtext-${current.id}`}
            className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-12 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-300 drop-shadow-xl ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
          >
            {current.subtext}
          </p>

          {/* Dynamic CTA with enhanced button visibility */}
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
                  className="group relative overflow-hidden bg-black/40 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
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
                  className="group relative overflow-hidden bg-black/40 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl"
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

          {/* Static Trust Indicators - Always Visible */}
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

      {/* Add enhanced text shadow styles */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%);
        }
        
        /* Additional text shadow for all text elements */
        .text-shadow-strong {
          text-shadow: 0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default HeroSectionDynamic;
