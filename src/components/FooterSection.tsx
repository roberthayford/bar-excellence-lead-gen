import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Mail, ExternalLink, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  const footerSections = [
    {
      id: "services",
      title: "Our Services",
      links: [
        { name: "Cocktail Masterclasses", href: "/training/cocktails" },
        { name: "Service Excellence", href: "/training/service" },
        { name: "Bar Management", href: "/training/management" },
        { name: "Menu Development", href: "/support/menu" },
      ]
    },
    {
      id: "events",
      title: "Events & Experiences",
      links: [
        { name: "Corporate Events", href: "/events/corporate" },
        { name: "Private Parties", href: "/events/private" },
        { name: "Cocktail Theatre", href: "/events/theatre" },
        { name: "Tastings", href: "/events/tastings" },
      ]
    },
    {
      id: "company",
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Media", href: "/media" },
      ]
    }
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo and description section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-base">BE</span>
              </div>
              <span className="font-serif font-medium text-foreground tracking-wider text-lg">BAR EXCELLENCE</span>
            </div>
            
            <p className="text-sm font-bodoni-light text-muted-foreground leading-relaxed">
              Elevating the art of hospitality through exceptional training, experiences, and consultancy. Creating unforgettable moments for guests and building stronger teams for venues.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-4 sm:pt-6 space-y-4">
              <h4 className="font-serif text-foreground text-base">Subscribe to our newsletter</h4>
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
              <p className="text-xs font-bodoni-light text-muted-foreground/70">
                Get weekly insights on hospitality excellence, cocktail trends, and industry best practices
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="font-serif text-foreground text-base mb-3">Connect with us</h4>
              <div className="flex space-x-4">
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

          {/* Navigation columns */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-3 gap-8">
              {footerSections.map((section) => (
                <div key={section.id} className="space-y-4">
                  {/* Desktop View - Always expanded */}
                  <div className="hidden sm:block">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link 
                            to={link.href}
                            className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm group flex items-center"
                          >
                            <span className="group-hover:underline">{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile View - Collapsible */}
                  <div className="sm:hidden">
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="flex w-full justify-between items-center py-2 border-b border-border/50"
                    >
                      <h3 className="font-serif text-lg font-medium text-foreground">
                        {section.title}
                      </h3>
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-200",
                          openSection === section.id ? "rotate-180" : ""
                        )} 
                      />
                    </button>
                    
                    <div className={cn(
                      "mt-3 space-y-2.5 overflow-hidden transition-all duration-300",
                      openSection === section.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {section.links.map((link) => (
                        <Link
                          key={link.name} 
                          to={link.href}
                          className="block py-1.5 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                          onClick={() => setOpenSection(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower Footer - Copyright & Links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm font-bodoni-light text-muted-foreground mb-4 sm:mb-0">
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