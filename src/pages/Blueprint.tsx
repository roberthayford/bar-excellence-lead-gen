import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Mail, BookOpen, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { useToast } from "@/hooks/use-toast";

const Blueprint = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle direct subscription (this would connect to an actual email service in production)
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In production, this would be an actual API call to subscribe the user
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Subscription Successful!",
        description: "You've been subscribed to the Hospitality Blueprint newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again or visit our LinkedIn page directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Luxury Design */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Back Navigation */}
            <div 
              className={`mb-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm font-light tracking-wide">Back to Home</span>
              </Link>
            </div>

            {/* Newsletter Badge */}
            <div 
              className={`mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-accent/30">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide">Weekly Newsletter</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extralight text-white mb-6 leading-tight tracking-tight transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
            >
              <span className="block">Hospitality</span>
              <span className="block mt-2 font-light italic text-accent">Blueprint</span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
            >
              Weekly insights on hospitality excellence, cocktail trends, and industry best practices
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Content Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/3 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Newsletter Card */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl mb-16">
            
            {/* Header */}
            <div className="relative p-8 lg:p-12 bg-gradient-to-br from-accent/5 via-accent/3 to-transparent">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-accent/70 text-xs font-medium tracking-[0.3em] uppercase">Weekly Publication</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-light text-foreground mb-4">
                    Subscribe to our <span className="text-accent font-medium">Free Newsletter</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                    Join thousands of hospitality professionals who rely on Bar Excellence's weekly insights, trends analysis, and best practices delivered directly to your inbox.
                  </p>
                </div>
              </div>
            </div>

            {/* Subscription Options */}
            <div className="p-8 lg:p-12 border-t border-border/30">
              <h3 className="text-2xl font-serif font-light text-foreground mb-8">Two Ways to Subscribe</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* LinkedIn Subscription */}
                <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-serif font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium text-foreground">LinkedIn Subscription</h4>
                      <p className="text-sm text-muted-foreground">Follow on LinkedIn for all updates</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Subscribe to our Hospitality Blueprint newsletter directly on LinkedIn to receive weekly insights and join our professional community.
                  </p>
                  <a
                    href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button 
                      className="w-full group/btn bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-500 py-6 text-base font-light tracking-wide"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Subscribe on LinkedIn
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </span>
                    </Button>
                  </a>
                </div>

                {/* Direct Email Subscription */}
                <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-serif font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium text-foreground">Email Subscription</h4>
                      <p className="text-sm text-muted-foreground">Get updates directly to your inbox</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Subscribe with your email address below to receive the Hospitality Blueprint newsletter directly to your inbox every week.
                  </p>
                  <form onSubmit={handleSubscription}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-background/80 border border-border focus:border-accent focus:ring-1 focus:ring-accent/30 rounded-lg text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200"
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="group/btn bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-500 py-6 text-base font-light tracking-wide"
                        disabled={isSubmitting}
                      >
                        <span className="flex items-center justify-center gap-3">
                          {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                          {!isSubmitting && <Mail className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />}
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Newsletter Benefits */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-accent/5 via-transparent to-accent/3">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-light text-foreground mb-4">Why Subscribe?</h3>
                <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                  The Hospitality Blueprint newsletter delivers exclusive content that helps hospitality professionals excel in their field.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Benefit 1 */}
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-serif font-medium text-foreground mb-2">Industry Trends</h4>
                  <p className="text-sm text-muted-foreground">Stay ahead with the latest hospitality and cocktail trends</p>
                </div>

                {/* Benefit 2 */}
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-serif font-medium text-foreground mb-2">Team Development</h4>
                  <p className="text-sm text-muted-foreground">Practical strategies to build and motivate high-performing teams</p>
                </div>

                {/* Benefit 3 */}
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-serif font-medium text-foreground mb-2">Best Practices</h4>
                  <p className="text-sm text-muted-foreground">Real case studies and excellence frameworks from top venues</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Issues Preview */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-serif font-light text-foreground mb-6">
                Ready to Elevate Your <span className="text-accent font-medium">Hospitality Knowledge?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                Don't miss out on our weekly insights that help prestigious venues deliver exceptional guest experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/newsletters/hospitality-blueprint-7360390262872776704/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-8 py-4 text-base font-medium tracking-wide transition-all duration-500 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)]"
                  >
                    <span className="relative z-10 flex items-center">
                      View Latest Issues
                      <ArrowLeft className="ml-3 w-5 h-5 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blueprint;
