import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Blueprint", href: "/blueprint" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Training", href: "/training" },
    { name: "Events", href: "/events" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elegant py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className={cn(
              "relative overflow-hidden",
              logoError ? "logo-error" : ""
            )}>
              {!logoError && (
                <img 
                  src="/img/Bar Excellence Logo-White-on-Transparent.svg" 
                  alt="Bar Excellence"
                  className="h-10 sm:h-12 w-auto transition-all duration-300" 
                  onError={() => setLogoError(true)}
                />
              )}
              
              {/* Fallback for when image doesn't load */}
              {logoError && (
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-lg">BE</span>
                </div>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium tracking-wide luxury-hover py-1 px-2 rounded-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground luxury-transition shadow-gold hover:shadow-md"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground luxury-hover"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced with animation */}
        <div 
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg border-y border-border z-40 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-5 space-y-3">
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-3 text-lg text-foreground hover:text-accent luxury-transition font-medium border-b border-border/30 luxury-hover",
                  isOpen && "animate-luxury-fade"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 luxury-transition shadow-gold hover:shadow-md text-lg font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;