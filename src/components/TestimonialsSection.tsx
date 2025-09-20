import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Bar Manager",
      company: "The Ritz-Carlton",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22ef8dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      content: "Bar Excellence transformed our entire cocktail program. The training was exceptional and our guest satisfaction scores have increased by 40%. Their expertise in hospitality is unmatched.",
      featured: true
    },
    {
      id: 2,
      name: "James Thompson", 
      role: "Head Bartender",
      company: "Savoy Hotel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "The cocktail masterclasses provided by Bar Excellence elevated our team's skills dramatically. Professional, engaging, and results-driven training.",
      featured: false
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "F&B Director", 
      company: "Four Seasons",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1761&q=80",
      content: "Outstanding consultancy services. They helped us redesign our entire bar operation and the results speak for themselves. Revenue increased by 35% in the first quarter.",
      featured: true
    },
    {
      id: 4,
      name: "David Chen",
      role: "General Manager",
      company: "Mandarin Oriental", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "Their event management and cocktail theatre performances are absolutely stunning. Our guests consistently rate these experiences as highlights of their stay.",
      featured: false
    }
  ];

  const clientLogos = [
    { name: "The Ritz-Carlton", logo: "RC" },
    { name: "Four Seasons", logo: "FS" },
    { name: "Mandarin Oriental", logo: "MO" },
    { name: "Savoy Hotel", logo: "SH" },
    { name: "The Dorchester", logo: "TD" },
    { name: "Claridge's", logo: "CL" }
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border border-accent/30 px-6 py-2">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 tracking-wide">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Join hundreds of hotels, restaurants, and bars worldwide who have elevated their 
            hospitality standards with Bar Excellence.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-24">
          {testimonials.filter(t => t.featured).slice(0, 1).map((testimonial) => (
            <div key={testimonial.id} className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Large Quote */}
                <div className="text-center mb-12">
                  <div className="text-8xl sm:text-9xl font-serif text-accent/20 leading-none mb-8">"</div>
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-foreground leading-relaxed max-w-4xl mx-auto">
                    {testimonial.content}
                  </blockquote>
                </div>

                {/* Author with Photo */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-accent/20"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl font-serif text-foreground mb-1">{testimonial.name}</div>
                    <div className="text-accent font-medium tracking-wide text-sm uppercase">
                      {testimonial.role}
                    </div>
                    <div className="text-muted-foreground font-light">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {testimonials.filter(t => !t.featured).map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border border-border/50"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <blockquote className="text-lg text-foreground leading-relaxed font-light mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div>
                    <div className="font-serif text-foreground mb-1">{testimonial.name}</div>
                    <div className="text-sm text-accent font-medium tracking-wide uppercase">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground font-light">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-border/50 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif font-light text-foreground mb-6">
              Trusted by Leading Hospitality Brands
            </h3>
            <p className="text-muted-foreground font-light">
              Join industry leaders who choose Bar Excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-60">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className="flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="text-2xl font-serif font-light text-foreground group-hover:text-accent transition-colors duration-300">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-light tracking-wider">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24 pt-20 border-t border-border/50">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-4">500+</div>
            <div className="text-muted-foreground font-light tracking-wide">Venues Trained</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-4">15+</div>
            <div className="text-muted-foreground font-light tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-4">98%</div>
            <div className="text-muted-foreground font-light tracking-wide">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;