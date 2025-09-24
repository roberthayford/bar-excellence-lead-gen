import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Training Programs",
      subtitle: "Master the Art of Hospitality",
      description: "World-class hospitality training and cocktail masterclasses designed to elevate service standards and mixology expertise.",
      features: ["Cocktail Masterclasses", "Service Excellence", "Bar Management", "Team Development"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/training",
      cta: "Explore Training",
      featured: true
    },
    {
      title: "Event Experiences",
      subtitle: "Engaging Cocktail Experiences",
      description: "From interactive masterclasses to theatrical cocktail receptions with dry ice and flair performances, we create unforgettable beverage experiences for your special occasions.",
      features: ["Science Lab Cocktails", "G&T Bar Experience", "Flair Mixologists", "Bespoke Experiences"],
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      href: "/events",
      cta: "View Events",
      featured: false
    },
    {
      title: "Consultancy Services",
      subtitle: "Transform Your Operation",
      description: "Expert guidance to transform your bar operation, from menu development to staff training and operational excellence.",
      features: ["Menu Development", "Spirits & Drinks Investment Sourcing", "Distributer Negotiation", "Staff Training"],
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
      href: "/consultancy",
      cta: "Get Consultation",
      featured: false
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 tracking-wide">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From comprehensive training programs to spectacular events and expert consultancy, 
            we deliver excellence across every aspect of hospitality.
          </p>
        </div>

        {/* Services Layout */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`relative min-h-[70vh] flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 relative h-full">
                <div className="relative h-[70vh] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  
                  {/* Service Number Overlay */}
                  <div className="absolute top-8 left-8">
                    <div className="text-6xl sm:text-7xl font-serif font-light text-white/20 leading-none">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full lg:w-2/5 relative z-10 ${
                index % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'
              }`}>
                <div className="bg-background/95 backdrop-blur-sm p-12 lg:p-16 shadow-elegant border border-border/50">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-3">
                        {service.subtitle}
                      </h3>
                      <h4 className="text-3xl sm:text-4xl font-serif font-light text-foreground mb-6 leading-tight">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 pt-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-muted-foreground">
                          <div className="w-1 h-1 bg-accent rounded-full mr-4 flex-shrink-0" />
                          <span className="text-sm font-light tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-medium tracking-wide transition-all duration-300"
                      >
                        <Link to={service.href}>
                          {service.cta}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-foreground mb-8">
              Ready to elevate your hospitality standards?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 font-light">
              Join hundreds of venues worldwide who trust Bar Excellence to deliver exceptional results.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 font-medium tracking-wide shadow-gold hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;