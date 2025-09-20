import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ValuePropositionSection = () => {
  const keyBenefits = [
    "15+ years of experience with world-class venues",
    "500+ venues trained with proven results",
    "35% average increase in customer satisfaction",
    "Certified training programs with ongoing support",
    "Customized solutions for your unique needs",
    "Cutting-edge techniques and innovation focus"
  ];

  const achievements = [
    {
      metric: "98%",
      label: "Client Satisfaction Rate"
    },
    {
      metric: "500+",
      label: "Venues Transformed"
    },
    {
      metric: "15+",
      label: "Years of Excellence"
    },
    {
      metric: "35%",
      label: "Average Revenue Increase"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-full">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury bar excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
            </div>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center text-white">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light leading-none mb-8 text-shadow">
                  Excellence
                </div>
                <div className="text-lg sm:text-xl font-light tracking-[0.3em] uppercase text-shadow">
                  is our standard
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative bg-background order-1 lg:order-2 flex items-center">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
              <div className="max-w-2xl">
                <Badge variant="secondary" className="mb-8 bg-accent/20 text-accent border border-accent/30 px-6 py-2">
                  Why Choose Us
                </Badge>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 leading-tight">
                  Transform Your Hospitality Standards
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
                  We don't just provide training – we transform hospitality experiences. 
                  Our proven methodology and industry expertise deliver exceptional results that last.
                </p>

                {/* Key Benefits */}
                <div className="space-y-6 mb-12">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-6 flex-shrink-0" />
                      <div className="text-lg text-muted-foreground font-light leading-relaxed">
                        {benefit}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8 mb-12 pt-8 border-t border-border/50">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl sm:text-5xl font-serif font-light text-accent mb-2">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-light tracking-wide uppercase">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact" 
                    className="inline-flex items-center justify-center px-10 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide transition-all duration-300 shadow-gold hover:shadow-xl"
                  >
                    Start Your Transformation
                  </Link>
                  <Link
                    to="/training" 
                    className="inline-flex items-center justify-center px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium tracking-wide transition-all duration-300"
                  >
                    View Training Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Value Points */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground mb-6">
              The Bar Excellence Difference
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Every aspect of our service is designed to deliver measurable, lasting impact for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-xl font-serif text-foreground mb-4">Industry Expertise</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                15+ years working with world-class hotels and prestigious venues across the globe.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-serif text-foreground mb-4">Proven Results</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                500+ venues trained with an average 35% increase in customer satisfaction and revenue.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-serif text-foreground mb-4">Tailored Solutions</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                Customized programs designed specifically for your venue's unique needs and brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;