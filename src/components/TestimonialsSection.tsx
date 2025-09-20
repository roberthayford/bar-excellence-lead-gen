import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sebastien Babin-Roadley",
      role: "Hotel Operations Manager",
      company: "Eastwood Hall",
      venue: "The Venues Collection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "Murdo MacLeod has helped develop our bar teams skills when serving cocktails and has hugely increased their confidence with both presentation and execution. From mixing, garnishing and glassware - Murdo really is an expert in all areas and has hugely helped us improve our offering for both our bars and private events.",
      location: "Nottingham, UK"
    },
    {
      id: 2,
      name: "Adam Hucknall",
      role: "General Manager - Catering",
      company: "Edgbaston",
      venue: "Birmingham",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "Murdo's Bar Excellence training transformed our team's confidence and cocktail delivery in just a few short hours. The bartenders not only mastered the precision of three unique, cricket-themed signature serves, but also learned how to elevate the guest interaction into a true experience. The training cinnamon, glittered garnish, and smoke-filled bubble cocktails became showpieces that created real 'wow' moments.",
      location: "Birmingham, UK"
    }
  ];

  const clientPartners = [
    "Eastwood Hall",
    "Edgbaston Birmingham", 
    "The Venues Collection",
    "Four Seasons",
    "Mandarin Oriental",
    "The Dorchester"
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000); // Rotate every 6 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
    // Briefly pause auto-rotation when user manually selects
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-secondary/10 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5">
            Client Success
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-8 tracking-wide">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            From luxury hotels to prestigious sports venues, our clients trust us to deliver exceptional results
          </p>
        </div>

        {/* Featured Testimonial Display */}
        <div 
          className="relative max-w-5xl mx-auto mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 lg:p-12 overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/10 rotate-180" />
            
            {/* Testimonial Content with Smooth Transitions */}
            <div className="relative z-10">
              <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeTestimonial 
                          ? 'opacity-0 -translate-x-8' 
                          : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <blockquote className="text-xl sm:text-2xl font-serif font-light text-foreground leading-relaxed mb-12">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                        />
                        <div>
                          <div className="font-serif text-lg text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-accent font-light text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-muted-foreground font-light text-sm">
                            {testimonial.company} • {testimonial.venue}
                          </div>
                          <div className="text-muted-foreground/60 font-light text-xs mt-1">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Dots with Progress Indicators */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTestimonialClick(index)}
                    className={`relative h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'w-8 bg-accent' 
                        : 'w-2 bg-border hover:bg-accent/50'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    {/* Progress bar for active testimonial */}
                    {index === activeTestimonial && !isPaused && (
                      <div 
                        className="absolute inset-0 bg-accent/60 rounded-full origin-left animate-pulse"
                        style={{
                          animation: 'testimonial-progress 6s linear infinite'
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Partners - Simplified */}
        <div className="text-center">
          <h3 className="text-lg font-light text-muted-foreground mb-8">
            Trusted Partners Include
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {clientPartners.map((partner) => (
              <div 
                key={partner}
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <span className="text-lg font-serif font-light tracking-wider">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes testimonial-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;