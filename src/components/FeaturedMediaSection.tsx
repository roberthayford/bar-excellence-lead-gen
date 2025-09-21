import { useState, useEffect } from "react";
import { ExternalLink, Award, BookOpen, TrendingUp, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-media');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="featured-media"
      className="py-16 xs:py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/3 to-background relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.accent)_1px,_transparent_0)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 xs:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
            <div className="w-8 xs:w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-accent/80 text-xs font-medium tracking-[0.3em] uppercase">
              Featured Media
            </span>
            <div className="w-8 xs:w-12 h-px bg-gradient-to-r from-accent via-transparent to-transparent" />
          </div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-5 xs:mb-6 leading-tight">
            Recognition &
            <span className="block mt-2 font-light italic text-accent/90">Thought Leadership</span>
          </h2>
          
          <p className="text-base xs:text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Discover how Bar Excellence continues to shape the future of hospitality through industry recognition and weekly insights
          </p>
        </div>

        {/* Media Features Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Bar Magazine Feature Card */}
          <div 
            className={`group relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-full hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group-hover:scale-[1.02]">
              
              {/* Magazine Cover Image Section */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-accent/10 via-accent/5 to-background">
                {/* Magazine cover placeholder image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')`, // Award ceremony/magazine style
                  }}
                />
                
                {/* Enhanced overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
                
                {/* Additional dark overlay for maximum contrast */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Elegant text overlay with enhanced visibility */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-black/50 backdrop-blur-md border border-accent/40 shadow-2xl">
                      <Award className="w-10 h-10 text-accent drop-shadow-lg" />
                    </div>
                    <div className="text-white">
                      <p 
                        className="text-lg font-serif font-light mb-1 drop-shadow-2xl"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
                      >
                        Featured in
                      </p>
                      <p 
                        className="text-3xl font-serif font-medium text-accent drop-shadow-2xl"
                        style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9)' }}
                      >
                        Bar Magazine
                      </p>
                      <p 
                        className="text-sm font-light mt-2 text-white drop-shadow-xl"
                        style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
                      >
                        Industry Excellence Award 2024
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating sparkle effects with better visibility */}
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-accent animate-pulse drop-shadow-lg" />
                <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-accent/60 animate-pulse delay-300 drop-shadow-lg" />
              </div>

              {/* Content */}
              <div className="p-6 xs:p-8 lg:p-10 space-y-5 xs:space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-accent/70 text-xs font-medium tracking-wider uppercase">Industry Recognition</span>
                    </div>
                    <h3 className="text-xl xs:text-2xl lg:text-3xl font-serif font-light text-foreground mb-3 xs:mb-4">
                      Excellence in <span className="text-accent font-medium">Hospitality Training</span>
                    </h3>
                  </div>
                </div>

                <p className="text-sm xs:text-base text-muted-foreground leading-relaxed font-light">
                  Bar Excellence's innovative approach to hospitality training has been recognized by the industry's leading publication. Our expertise in elevating cocktail service and team development continues to set new standards across luxury venues.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-4 py-5 xs:py-6 border-t border-b border-border/30">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-light text-accent mb-1">500+</div>
                    <div className="text-xs text-muted-foreground tracking-wide">Venues Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-light text-accent mb-1">15</div>
                    <div className="text-xs text-muted-foreground tracking-wide">Years Experience</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.linkedin.com/your-bar-magazine-feature-link" // Replace with actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className="w-full group/btn bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground border border-accent/30 hover:border-accent transition-all duration-500 py-6 text-base font-light tracking-wide"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Read the Feature Article
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Hospitality Blueprint Newsletter Card */}
          <div 
            className={`group relative transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-full hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group-hover:scale-[1.02]">
              
              {/* Newsletter Header Image Section */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-secondary via-accent/10 to-background">
                {/* Newsletter/training placeholder image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=2070&auto=format&fit=crop')`, // Professional training/workshop scene
                  }}
                />
                
                {/* Enhanced overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50" />
                
                {/* Additional dark overlay for maximum contrast */}
                <div className="absolute inset-0 bg-black/35" />
                
                {/* Abstract newsletter design overlay */}
                <div className="absolute inset-0">
                  {/* Newsletter grid pattern with better visibility */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="h-full w-full bg-[linear-gradient(90deg,_theme(colors.accent)_1px,_transparent_1px),_linear-gradient(180deg,_theme(colors.accent)_1px,_transparent_1px)] bg-[size:20px_20px]" />
                  </div>
                  
                  {/* Content preview boxes with enhanced visibility */}
                  <div className="absolute top-8 left-8 right-8 space-y-3 opacity-30">
                    <div className="h-3 bg-accent/40 rounded w-3/4 shadow-lg"></div>
                    <div className="h-3 bg-accent/30 rounded w-full shadow-lg"></div>
                    <div className="h-3 bg-accent/30 rounded w-5/6 shadow-lg"></div>
                  </div>
                  
                  {/* Center branding with enhanced contrast */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-black/50 backdrop-blur-md border border-accent/40 shadow-2xl">
                        <BookOpen className="w-10 h-10 text-accent drop-shadow-lg" />
                      </div>
                      <div>
                        <p 
                          className="text-lg font-serif font-light text-white mb-1 drop-shadow-2xl"
                          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}
                        >
                          Weekly Newsletter
                        </p>
                        <p 
                          className="text-3xl font-bodoni font-medium text-accent drop-shadow-2xl"
                          style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9)', letterSpacing: '0.03em' }}
                        >
                          Hospitality Blueprint
                        </p>
                        <p 
                          className="text-sm font-light mt-2 text-white drop-shadow-xl"
                          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
                        >
                          Industry Insights & Trends
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated elements with better visibility */}
                  <div className="absolute top-12 right-12 w-8 h-8 rounded-full bg-accent/30 animate-pulse shadow-lg" />
                  <div className="absolute bottom-12 left-12 w-6 h-6 rounded-full bg-accent/40 animate-pulse delay-500 shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 xs:p-8 lg:p-10 space-y-5 xs:space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-accent/70" />
                      <span className="text-accent/70 text-xs font-medium tracking-wider uppercase">Weekly Insights</span>
                    </div>
                    <h3 className="text-xl xs:text-2xl lg:text-3xl font-serif font-light text-foreground mb-3 xs:mb-4">
                      <span className="text-accent font-medium">Hospitality Blueprint</span> Newsletter
                    </h3>
                  </div>
                </div>

                <p className="text-sm xs:text-base text-muted-foreground leading-relaxed font-light">
                  Join thousands of hospitality professionals who rely on our weekly newsletter for the latest insights on cocktail trends, service excellence, and industry best practices. Curated expertise delivered directly to your inbox.
                </p>

                {/* Newsletter Features */}
                <div className="space-y-2.5 xs:space-y-3 py-5 xs:py-6 border-t border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-accent/70" />
                    <span className="text-sm text-muted-foreground">Industry trends and market insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-accent/70" />
                    <span className="text-sm text-muted-foreground">Team development strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-accent/70" />
                    <span className="text-sm text-muted-foreground">Best practice case studies</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button 
                      className="w-full group/btn bg-accent hover:bg-accent/90 text-accent-foreground border-0 transition-all duration-500 py-6 text-base font-light tracking-wide shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Read Latest Issue
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </span>
                    </Button>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button 
                      variant="outline"
                      className="w-full group/btn border-accent/30 hover:border-accent hover:bg-accent/5 text-accent transition-all duration-500 py-6 text-base font-light tracking-wide"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Subscribe for Free
                        <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center mt-12 xs:mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-sm xs:text-base text-muted-foreground mb-6 xs:mb-8 font-light leading-relaxed">
              Stay connected with Bar Excellence through our thought leadership and industry recognition. 
              Join our community of hospitality professionals committed to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Follow Our Newsletter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaSection;