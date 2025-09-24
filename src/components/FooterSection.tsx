import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ExternalLink, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribe email:", email);
    // Reset field after submission
    setEmail("");
    // Show success message (could use toast)
  };

  return (
    <footer className="bg-secondary border-t border-border">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Logo and description section */}
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <img 
                src="/img/Bar Excellence Logo-White-on-Transparent.svg" 
                alt="Bar Excellence Logo" 
                className="h-16 sm:h-20 w-auto max-w-xs"
              />
            </div>
            
            <p className="text-sm font-bodoni-light text-muted-foreground leading-relaxed">
              Elevating the art of hospitality through exceptional training, experiences, and consultancy. Creating unforgettable moments for guests and building stronger teams for venues.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-4 sm:pt-6 space-y-4">
              <h4 className="font-serif text-foreground text-base text-center">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-background/50 border-border/50 hover:border-accent/50 focus:border-accent focus-visible:ring-accent/30 h-11 w-full"
                />
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 luxury-transition shadow-gold hover:shadow-md text-sm font-medium"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" /> Subscribe
                  </span>
                </Button>
              </form>
              <p className="text-xs font-bodoni-light text-muted-foreground/70 text-center">
                Get weekly insights on hospitality excellence, cocktail trends, and industry best practices
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="font-serif text-foreground text-base mb-3 text-center">Connect with us</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  aria-label="LinkedIn - Hospitality Blueprint Newsletter"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="h-9 w-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower Footer - Copyright & Links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center space-y-4">
          <div className="text-sm font-bodoni-light text-muted-foreground text-center">
            {new Date().getFullYear()} Bar Excellence. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link 
              to="/privacy"
              className="text-xs font-bodoni-light text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              className="text-xs font-bodoni-light text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies"
              className="text-xs font-bodoni-light text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Links Banner */}
      <div className="bg-background/80 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <div className="flex items-center space-x-1.5 text-sm font-bodoni-light text-muted-foreground hover:text-accent transition-colors duration-200">
              <span>Featured in</span>
              <a
                href="https://www.linkedin.com/your-bar-magazine-feature-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-medium text-foreground hover:text-accent flex items-center"
              >
                Bar Magazine <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            
            <div className="w-px h-4 bg-border/40 hidden sm:block"></div>
            
            <div className="flex items-center space-x-1.5 text-sm font-bodoni-light text-muted-foreground hover:text-accent transition-colors duration-200">
              <span>Read our</span>
              <a
                href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-medium text-foreground hover:text-accent flex items-center"
              >
                Hospitality Blueprint <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;