import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FeaturedContentSection = () => {
  const featuredContent = [
    {
      title: "The Art of Craft Cocktail Creation",
      subtitle: "Master's Guide",
      excerpt: "Discover the secrets behind creating world-class cocktails that captivate guests and elevate your bar program to new heights.",
      date: "Mar 15, 2024",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      href: "/blog/craft-cocktail-creation",
      featured: true
    },
    {
      title: "Advanced Mixology Masterclass",
      subtitle: "London Workshop",
      excerpt: "Join our intensive 2-day workshop covering advanced techniques, flavor profiling, and presentation mastery.",
      date: "Apr 20-21, 2024",
      image: "https://images.unsplash.com/photo-1575452779376-caaa4e4d95cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/events/london-masterclass",
      featured: false
    },
    {
      title: "Hospitality Trends 2024",
      subtitle: "Industry Insights",
      excerpt: "Explore the latest trends transforming the hospitality industry and how to stay ahead of the curve.",
      date: "Mar 8, 2024",
      image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      href: "/blog/hospitality-trends-2024",
      featured: false
    }
  ];

  return (
    <section className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border border-accent/30 px-6 py-2">
            Latest Insights
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 tracking-wide">
            Featured Content
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Stay updated with the latest industry insights, training techniques, and upcoming events 
            designed to keep you at the forefront of hospitality excellence.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-20">
          {featuredContent.filter(c => c.featured).map((content, index) => (
            <div key={index} className="relative group cursor-pointer">
              <Link to={content.href} className="block">
                <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div className="max-w-3xl">
                      <div className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        {content.subtitle}
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-tight">
                        {content.title}
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed font-light mb-6">
                        {content.excerpt}
                      </p>
                      <div className="text-white/70 font-light">
                        {content.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {featuredContent.filter(c => !c.featured).map((content, index) => (
            <div key={index} className="group">
              <Link to={content.href} className="block">
                <div className="relative h-80 overflow-hidden rounded-lg mb-6">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="space-y-4">
                  <div className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
                    {content.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-foreground group-hover:text-accent transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {content.excerpt}
                  </p>
                  <div className="text-sm text-muted-foreground font-light">
                    {content.date}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t border-border/50">
          <p className="text-lg text-muted-foreground mb-8 font-light">
            Want to stay updated with our latest insights and events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-medium tracking-wide transition-all duration-300"
            >
              <Link to="/blog">View All Articles</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-medium tracking-wide shadow-gold hover:shadow-xl transition-all duration-300"
            >
              <Link to="/events">Browse Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;