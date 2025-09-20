import { Link } from "react-router-dom";

const FooterSection = () => {
  const footerSections = [
    {
      title: "Training",
      links: [
        { name: "Cocktail Masterclasses", href: "/training/cocktails" },
        { name: "Service Excellence", href: "/training/service" },
        { name: "Bar Management", href: "/training/management" },
        { name: "Team Development", href: "/training/team" },
      ]
    },
    {
      title: "Events",
      links: [
        { name: "Corporate Events", href: "/events/corporate" },
        { name: "Private Parties", href: "/events/private" },
        { name: "Cocktail Theatre", href: "/events/theatre" },
        { name: "Tastings", href: "/events/tastings" },
      ]
    },
    {
      title: "Support for Bars",
      links: [
        { name: "Menu Development", href: "/support/menu" },
        { name: "Staff Training", href: "/support/staff" },
        { name: "Consultancy", href: "/support/consultancy" },
        { name: "Equipment Advice", href: "/support/equipment" },
      ]
    },
    {
      title: "Shop",
      links: [
        { name: "Bar Tools", href: "/shop/tools" },
        { name: "Glassware", href: "/shop/glassware" },
        { name: "Spirits", href: "/shop/spirits" },
        { name: "Gift Vouchers", href: "/shop/vouchers" },
      ]
    }
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-sm">BE</span>
            </div>
            <span className="font-serif font-medium text-foreground tracking-wide">BAR EXCELLENCE</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bar Excellence. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;