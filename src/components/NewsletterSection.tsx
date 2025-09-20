import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {!isSubscribed ? (
          <div className="text-center">
            <Badge variant="secondary" className="mb-8 bg-accent/20 text-accent border border-accent/30 px-6 py-2">
              Stay Connected
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 tracking-wide">
              Elevate Your Inbox
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Join our exclusive community of hospitality professionals. Get weekly insights, 
              industry trends, and early access to our premium training content.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-16">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background border-border focus:border-accent transition-colors duration-300 px-6 py-3 text-lg"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-medium tracking-wide shadow-gold hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </div>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Industry Insights
                </h3>
                <p className="text-muted-foreground font-light">
                  Weekly insights on hospitality trends and best practices
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Exclusive Content
                </h3>
                <p className="text-muted-foreground font-light">
                  Access to premium guides and training materials
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Early Access
                </h3>
                <p className="text-muted-foreground font-light">
                  Priority booking for events and masterclasses
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center border-t border-border/50 pt-12">
              <p className="text-muted-foreground mb-6 font-light">
                Trusted by 10,000+ hospitality professionals worldwide
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-light">
                <div>No spam, ever</div>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground/50 rounded-full" />
                <div>Unsubscribe anytime</div>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground/50 rounded-full" />
                <div>GDPR compliant</div>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-green-400">✓</div>
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground mb-6">
              Welcome to Bar Excellence!
            </h3>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              Thank you for subscribing. You'll receive our first newsletter within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubscribed(false)}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Subscribe Another Email
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;