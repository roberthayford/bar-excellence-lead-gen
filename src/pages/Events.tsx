import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import FooterSection from "@/components/FooterSection";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EventsSection />
      <FooterSection />
    </div>
  );
};

export default Events;
