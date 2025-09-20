import { Badge } from "@/components/ui/badge";
import { Building2, Users, Trophy } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sebastien Babin-Roadley",
      role: "Hotel Operations Manager",
      company: "Eastwood Hall",
      venue: "The Venues Collection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "Murdo MacLeod has helped develop our bar teams skills when serving cocktails and has hugely increased their confidence with both presentation and execution. From mixing, garnishing and glassware - Murdo really is an expert in all areas and has hugely helped us improve our offering for both our bars and private events.",
      location: "Nottingham",
      featured: true
    },
    {
      id: 2,
      name: "Adam Hucknall",
      role: "General Manager - Catering",
      company: "Edgbaston",
      venue: "Birmingham",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "Murdo's Bar Excellence training transformed our team's confidence and cocktail delivery in just a few short hours. The bartenders not only mastered the precision of three unique, cricket-themed signature serves, but also learned how to elevate the guest interaction into a true experience. The training cinnamon, glittered garnish, and smoke-filled bubble cocktails became showpieces that created real 'wow' moments. This training turned what could have been a standard drink service into an unforgettable highlight of our new Executive Box Package.",
      location: "Birmingham",
      featured: true
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      role: "Bar Manager",
      company: "The Ritz-Carlton",
      venue: "London",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22ef8dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      content: "Bar Excellence transformed our entire cocktail program. The training was exceptional and our guest satisfaction scores have increased by 40%. Their expertise in hospitality is unmatched.",
      featured: false
    },
    {
      id: 4,
      name: "James Thompson", 
      role: "Head Bartender",
      company: "Savoy Hotel",
      venue: "London",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      content: "The cocktail masterclasses provided by Bar Excellence elevated our team's skills dramatically. Professional, engaging, and results-driven training.",
      featured: false
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      role: "F&B Director", 
      company: "Four Seasons",
      venue: "Mayfair",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1761&q=80",
      content: "Outstanding consultancy services. They helped us redesign our entire bar operation and the results speak for themselves. Revenue increased by 35% in the first quarter.",
      featured: false
    }
  ];

  const clientLogos = [
    { name: "Eastwood Hall", logo: "EH", type: "featured" },
    { name: "Edgbaston", logo: "EB", type: "featured" },
    { name: "The Venues Collection", logo: "TVC", type: "partner" },
    { name: "The Ritz-Carlton", logo: "RC", type: "client" },
    { name: "Four Seasons", logo: "FS", type: "client" },
    { name: "Savoy Hotel", logo: "SH", type: "client" },
    { name: "Mandarin Oriental", logo: "MO", type: "client" },
    { name: "The Dorchester", logo: "TD", type: "client" }
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
            Join hundreds of prestigious hotels, sports venues, and hospitality groups worldwide who have elevated their 
            standards with Bar Excellence training and consultancy.
          </p>
        </div>

        {/* Featured Testimonials - Eastwood Hall and Edgbaston */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {testimonials.filter(t => t.featured).map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-10 h-full hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-500">
                {/* Large Quote */}
                <div className="text-6xl font-serif text-accent/20 leading-none mb-6">"</div>
                
                {/* Content */}
                <blockquote className="text-lg font-light text-foreground leading-relaxed mb-8">
                  {testimonial.content}
                </blockquote>

                {/* Author with Photo */}
                <div className="flex items-center space-x-4 pt-6 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <div className="font-serif text-foreground text-lg mb-1">{testimonial.name}</div>
                    <div className="text-accent font-medium tracking-wide text-sm uppercase">
                      {testimonial.role}
                    </div>
                    <div className="text-muted-foreground font-light text-sm">
                      {testimonial.company} {testimonial.venue && `• ${testimonial.venue}`}
                    </div>
                    {testimonial.location && (
                      <div className="text-muted-foreground/60 font-light text-xs mt-1">
                        {testimonial.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.filter(t => !t.featured).map((testimonial) => (
            <div key={testimonial.id} className="relative group">
              <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 h-full hover:border-accent/30 transition-all duration-500">
                {/* Content */}
                <div className="mb-6">
                  <div className="text-4xl font-serif text-accent/20 leading-none mb-4">"</div>
                  <blockquote className="text-base text-foreground/90 leading-relaxed font-light">
                    {testimonial.content}
                  </blockquote>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-border/50"
                  />
                  <div>
                    <div className="font-serif text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-accent font-medium tracking-wide uppercase">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground font-light">
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
              Trusted by Leading Hospitality Brands & Venues
            </h3>
            <p className="text-muted-foreground font-light">
              From luxury hotels to prestigious sports venues
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className={`flex items-center justify-center group ${
                  client.type === 'featured' ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className={`text-2xl font-serif font-light text-foreground group-hover:text-accent transition-colors duration-300 ${
                    client.type === 'featured' ? 'text-accent' : ''
                  }`}>
                    {client.logo}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 font-light tracking-wider whitespace-nowrap">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24 pt-20 border-t border-border/50">
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <Building2 className="w-8 h-8 text-accent/60 group-hover:text-accent transition-colors duration-300" />
            </div>
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-2">500+</div>
            <div className="text-muted-foreground font-light tracking-wide">Venues Trained</div>
          </div>
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <Trophy className="w-8 h-8 text-accent/60 group-hover:text-accent transition-colors duration-300" />
            </div>
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-2">15+</div>
            <div className="text-muted-foreground font-light tracking-wide">Years Excellence</div>
          </div>
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-accent/60 group-hover:text-accent transition-colors duration-300" />
            </div>
            <div className="text-5xl lg:text-6xl font-serif font-light text-accent mb-2">98%</div>
            <div className="text-muted-foreground font-light tracking-wide">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;