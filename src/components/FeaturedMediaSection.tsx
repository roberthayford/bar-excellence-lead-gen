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
      className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/3 to-background relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.accent)_1px,_transparent_0)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-accent/80 text-sm font-medium tracking-[0.3em] uppercase">
              Featured Media
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-accent via-transparent to-transparent" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-6 leading-tight">
            Recognition &
            <span className="block mt-2 font-light italic text-accent/90">Thought Leadership</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Discover how Bar Excellence continues to shape the future of hospitality through industry recognition and weekly insights
          </p>
        </div>

        {/* Media Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Bar Magazine Feature Card */}
          <div 
            className={`group relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-full hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group-hover:scale-[1.02]">
              
              {/* Magazine Cover Image Section */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-accent/10 via-accent/5 to-background">
                {/* Placeholder for magazine imagery - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
                
                {/* Elegant text overlay for now - replace with actual magazine cover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <Award className="w-10 h-10 text-accent" />
                    </div>
                    <div className="text-white">
                      <p className="text-lg font-serif font-light mb-1">Featured in</p>
                      <p className="text-3xl font-serif font-medium text-accent">Bar Magazine</p>
                      <p className="text-sm font-light mt-2 text-white/80">Industry Excellence Award 2024</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating sparkle effects */}
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-accent/60 animate-pulse" />
                <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-accent/40 animate-pulse delay-300" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-accent/70 text-xs font-medium tracking-wider uppercase">Industry Recognition</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-light text-foreground mb-4">
                      Excellence in <span className="text-accent font-medium">Hospitality Training</span>
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed font-light">
                  Bar Excellence's innovative approach to hospitality training has been recognized by the industry's leading publication. Our expertise in elevating cocktail service and team development continues to set new standards across luxury venues.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-border/30">
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
                {/* Abstract newsletter design */}
                <div className="absolute inset-0">
                  {/* Newsletter grid pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[linear-gradient(90deg,_theme(colors.accent)_1px,_transparent_1px),_linear-gradient(180deg,_theme(colors.accent)_1px,_transparent_1px)] bg-[size:20px_20px]" />
                  </div>
                  
                  {/* Content preview boxes */}
                  <div className="absolute top-8 left-8 right-8 space-y-3 opacity-20">
                    <div className="h-3 bg-accent/30 rounded w-3/4"></div>
                    <div className="h-3 bg-accent/20 rounded w-full"></div>
                    <div className="h-3 bg-accent/20 rounded w-5/6"></div>
                  </div>
                  
                  {/* Center branding */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <BookOpen className="w-10 h-10 text-accent" />
                      </div>
                      <div>
                        <p className="text-lg font-serif font-light text-foreground/80 mb-1">Weekly Newsletter</p>
                        <p className="text-3xl font-serif font-medium text-accent">Hospitality Blueprint</p>
                        <p className="text-sm font-light mt-2 text-muted-foreground">Industry Insights & Trends</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated elements */}
                  <div className="absolute top-12 right-12 w-8 h-8 rounded-full bg-accent/20 animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-6 h-6 rounded-full bg-accent/30 animate-pulse delay-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-accent/70" />
                      <span className="text-accent/70 text-xs font-medium tracking-wider uppercase">Weekly Insights</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-light text-foreground mb-4">
                      <span className="text-accent font-medium">Hospitality Blueprint</span> Newsletter
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed font-light">
                  Join thousands of hospitality professionals who rely on our weekly newsletter for the latest insights on cocktail trends, service excellence, and industry best practices. Curated expertise delivered directly to your inbox.
                </p>

                {/* Newsletter Features */}
                <div className="space-y-3 py-6 border-t border-b border-border/30">
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
          className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              Stay connected with Bar Excellence through our thought leadership and industry recognition. 
              Join our community of hospitality professionals committed to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-base font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
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