import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink, Award, Calendar, Eye, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const BarMagazineFeature = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredDownload, setHoveredDownload] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (filename: string) => {
    // Create a download link for the PDF
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            backgroundImage: `url('/downloads/latest-issue-bar-magazine.jpeg')`,
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

            {/* Publication Badge */}
            <div 
              className={`mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-accent/30">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide">Featured Publication</span>
                <Sparkles className="w-4 h-4 text-accent/70" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extralight text-white mb-6 leading-tight tracking-tight transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
            >
              <span className="block">Bar Magazine</span>
              <span className="block mt-2 font-light italic text-accent">Feature Publications</span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
            >
              Two Exclusive Articles on Excellence in Hospitality Training & High Standard Service
            </p>

            {/* Publication Details */}
            <div 
              className={`flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/70 mb-12 transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent/70" />
                <span className="text-sm font-light">Published October 1st, 2025</span>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent/70" />
                <span className="text-sm font-light">Two Complete Articles Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/3 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Preview Card */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="relative p-8 lg:p-12 bg-gradient-to-br from-accent/5 via-accent/3 to-transparent">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-accent/70 text-xs font-medium tracking-[0.3em] uppercase">Industry Recognition</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-light text-foreground mb-4">
                    Excellence in <span className="text-accent font-medium">Hospitality Training</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                    Bar Excellence has been featured in two comprehensive Bar Magazine articles showcasing our innovative approach to hospitality training and high standard service delivery. These publications highlight our expertise in elevating cocktail service and team development across luxury venues.
                  </p>
                </div>
                
                {/* Magazine Cover Preview */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('/downloads/latest-issue-bar-magazine.jpeg')`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-serif font-medium">Bar Magazine</p>
                      <p className="text-white/80 text-xs">October 2025 Issue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles Overview */}
            <div className="p-8 lg:p-12 border-t border-border/30">
              <h3 className="text-2xl font-serif font-light text-foreground mb-8">Featured Publications</h3>
              
              {/* Two Articles Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                
                {/* Article 1: Elevating Hospitality */}
                <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-serif font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium text-foreground">Elevating Hospitality</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive Training Excellence</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    An in-depth exploration of Bar Excellence's revolutionary approach to hospitality training, featuring innovative methodologies that have transformed service standards across luxury venues worldwide.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Training methodologies and frameworks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Case studies from prestigious venues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Measurable impact on service quality</span>
                    </div>
                  </div>
                </div>

                {/* Article 2: High Standard Service */}
                <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-2xl border border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-serif font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium text-foreground">High Standard Service</h4>
                      <p className="text-sm text-muted-foreground">Excellence in Service Delivery</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    A detailed examination of how Bar Excellence sets and maintains the highest standards of service delivery, showcasing the techniques and principles that define exceptional hospitality experiences.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Service excellence frameworks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Team development strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span>Industry best practices and innovations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-accent/5 via-transparent to-accent/3">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-light text-foreground mb-4">Download Both Publications</h3>
                <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                  Get both complete Bar Magazine feature articles as high-quality PDFs. Perfect for sharing with your team or keeping for reference.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Elevating Hospitality PDF Download */}
                <div className="text-center">
                  <h4 className="text-lg font-serif font-medium text-foreground mb-3">Elevating Hospitality</h4>
                  <Button
                    onClick={() => handleDownload('ELEVATING-HOSPITALITY-Bar-Magazine.pdf')}
                    onMouseEnter={() => setHoveredDownload('elevating')}
                    onMouseLeave={() => setHoveredDownload(null)}
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-6 py-6 text-base font-medium tracking-wide transition-all duration-500 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      Download Article
                      {hoveredDownload === 'elevating' && (
                        <span className="text-sm opacity-80">• PDF</span>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                </div>

                {/* High Standard Service PDF Download */}
                <div className="text-center">
                  <h4 className="text-lg font-serif font-medium text-foreground mb-3">High Standard Service</h4>
                  <Button
                    onClick={() => handleDownload('HIGH-STANDARD-SERVICE-Bar-Magazine.pdf')}
                    onMouseEnter={() => setHoveredDownload('service')}
                    onMouseLeave={() => setHoveredDownload(null)}
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-6 py-6 text-base font-medium tracking-wide transition-all duration-500 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] w-full"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      Download Article
                      {hoveredDownload === 'service' && (
                        <span className="text-sm opacity-80">• PDF</span>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground/70 font-light">
                  © 2025 Bar Magazine. Articles featuring Bar Excellence. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-serif font-light text-foreground mb-6">
                Ready to Elevate Your <span className="text-accent font-medium">Hospitality Standards?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                Join the prestigious venues featured in this article. Discover how Bar Excellence can transform your team's confidence and service delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/training">
                  <Button 
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-8 py-4 text-base font-medium tracking-wide transition-all duration-500 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)]"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Our Training
                      <ArrowLeft className="ml-3 w-5 h-5 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BarMagazineFeature;
