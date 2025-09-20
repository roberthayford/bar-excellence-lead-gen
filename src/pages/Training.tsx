import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-8 text-center">
            Training Programs
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Develop world-class hospitality skills with our comprehensive training programs, 
            designed to elevate service standards and cocktail expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif text-2xl mb-4 text-foreground">Cocktail Masterclasses</h3>
              <p className="text-muted-foreground mb-4">
                Learn the art of mixology from industry experts. Master classic cocktails and 
                innovative techniques.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif text-2xl mb-4 text-foreground">Service Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Elevate your hospitality standards with comprehensive service training programs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Training;