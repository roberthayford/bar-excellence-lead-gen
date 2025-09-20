import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cocktail.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* As Seen In Badge */}
        <Link to="/training" className="inline-block mb-8 animate-fade-in">
          <Badge 
            variant="secondary" 
            className="bg-accent/20 text-accent border border-accent/30 px-6 py-2 text-sm font-medium tracking-wide hover:bg-accent/30 hover:shadow-gold transition-all duration-300 animate-glow"
          >
            <Quote className="w-4 h-4 mr-2" />
            AS SEEN IN BAR MAGAZINE
          </Badge>
        </Link>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-foreground mb-6 animate-slide-up text-shadow">
          The art of hospitality
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up font-light">
          We present world class hospitality training, cocktail theatre and drinks consultancy
        </p>

        {/* Decorative Element */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="mx-4 w-2 h-2 bg-accent rounded-full" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-16">
          <Button 
            asChild
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-medium tracking-wide shadow-gold hover:shadow-xl transition-all duration-300"
          >
            <Link to="/training">Explore Training</Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-medium tracking-wide transition-all duration-300"
          >
            <Link to="/events">View Events</Link>
          </Button>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-light text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Venues Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-light text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-serif font-light text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;