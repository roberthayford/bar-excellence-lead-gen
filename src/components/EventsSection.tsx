import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const eventExperiences = [
    {
      id: 1,
      title: "Science Lab Cocktails",
      description: "Cocktails and mocktails with clouds of dry ice, glycerine bubbles, color changing theatre and test tubes, served by mixologists in lab coats for a super engaging guest experience. Perfect for creating unforgettable moments that will have your guests talking for weeks.",
      image: "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      videoLabel: "Video"
    },
    {
      id: 2,
      title: "G&T Bar Experience",
      description: "A sophisticated gin and tonic bar experience featuring premium gins from around the world, artisanal tonics, and botanical garnishes. Our mixologists guide guests through flavor profiles and perfect pairings, creating a refined yet interactive experience suitable for corporate gatherings and special events.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      videoLabel: "Video"
    },
    {
      id: 3,
      title: "Flair Mixologists",
      description: "World-class flair performers who combine extraordinary bartending skills with theatrical showmanship. Watch as they flip, spin and juggle bottles while crafting exceptional cocktails. This high-energy experience adds a spectacular visual element to any event, guaranteed to impress and entertain your guests.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      videoLabel: "Video"
    },
    {
      id: 4,
      title: "Bespoke Experiences",
      description: "Custom-designed cocktail experiences tailored to your specific event requirements, brand identity, or theme. From corporate brand activations to product launches or themed parties, we create unique concepts that align perfectly with your vision and objectives. Full consultation and design service included.",
      image: "https://images.unsplash.com/photo-1550510537-3e25e0a41a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      videoLabel: "Video"
    }
  ];

  const trustQuote = {
    content: "It is always a pleasure working with Murdo and his team of mixology experts to deliver fantastic cocktails, mocktails and bespoke beverages across our venues. They have consistently delivered high quality drinks in a fun and friendly manner that excites and delights our guests.",
    author: "Event Director",
    company: "Leading Hospitality Group"
  };

  return (
    <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5">
            Events Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extralight text-foreground mb-8 tracking-tight">
            Engaging Cocktail Experiences<br />
            <span className="text-accent/90 font-light">For Events</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            From interactive masterclasses to theatrical cocktail receptions, we create unforgettable beverage experiences for your special occasions
          </p>
        </div>

        {/* Experience Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {/* Interactive Cocktail Masterclasses */}
          <div 
            className={`bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-8 lg:p-10 shadow-elegant transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-foreground mb-6">
              Interactive Cocktail Masterclasses
            </h3>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-light mb-8">
              Vibrant, engaging and fun masterclasses that unite business teams within an interactive and memorable experience. Guests are on their feet, shake 3 cocktails or mocktails, learn cocktail trivia and garnishing tips to impress their friends at future dinner parties.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 font-medium tracking-wide transition-all duration-300"
            >
              <Link to="/contact">
                Enquire Now
              </Link>
            </Button>
          </div>

          {/* Cocktail Receptions */}
          <div 
            className={`bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-8 lg:p-10 shadow-elegant transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-foreground mb-6">
              Cocktail Receptions With Theatrical Engagement
            </h3>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-light mb-8">
              Bottles spinning through the air, clouds of dry ice special effects flowing down the front of the bar and professional mixologists theatrically shaking creative cocktails for delighted guests, this is the experience we are renowned for delivering within business events.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 font-medium tracking-wide transition-all duration-300"
            >
              <Link to="/contact">
                Enquire Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Signature Experiences Section */}
        <div 
          className={`mb-24 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extralight text-foreground mb-6">
              4 Signature Experiences Available
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Exceptional Cocktail & Mocktail Services
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventExperiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`group relative bg-card/10 border border-border/20 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-elegant hover:bg-card/20 hover:border-accent/20 transform hover:scale-[1.01] transition-all duration-700 delay-${index * 100}`}
              >
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                  
                  {/* Video Label */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/90 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {experience.videoLabel}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-light text-foreground mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-light mb-6 line-clamp-3">
                    {experience.description}
                  </p>
                  
                  {/* CTA Link */}
                  <div className="flex justify-end">
                    <Link
                      to="/contact"
                      className="text-accent text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Global CTA Button */}
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-medium tracking-wide shadow-gold hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">
                <span className="flex items-center">
                  Enquire Now
                  <ArrowRight className="ml-3 w-5 h-5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Quote */}
        <div 
          className={`relative max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 lg:p-10 mb-24 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <blockquote className="text-xl font-serif font-light text-foreground leading-relaxed mb-6 italic">
            "{trustQuote.content}"
          </blockquote>
          <div className="flex items-center justify-end">
            <div className="text-right">
              <div className="font-medium text-foreground">
                {trustQuote.author}
              </div>
              <div className="text-accent font-light text-sm">
                {trustQuote.company}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div 
          className={`text-center mb-16 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extralight text-foreground mb-6">
            Crafting Unforgettable Cocktail Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light mb-10">
            We specialize in creating theatrical and engaging cocktail experiences for corporate events. Our expert mixologists bring creativity, professionalism and a touch of magic to every occasion, ensuring your guests are thoroughly entertained and impressed.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 text-lg font-light tracking-wider shadow-gold hover:shadow-xl transition-all duration-300"
          >
            <Link to="/contact">
              <span className="flex items-center">
                Plan Your Event
                <ArrowRight className="ml-3 w-5 h-5" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
