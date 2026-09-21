import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ceoProfiles as allCEOProfiles } from "@/data/ceoData";

const CEODirectory = () => {
  const ceoProfiles = allCEOProfiles.slice(0, 3); // Show only first 3 for home page

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            CEO Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with Indonesia's most influential business leaders and visionary entrepreneurs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
        </div>

        {/* CEO Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ceoProfiles.map((ceo, index) => (
            <div
              key={ceo.id}
              className={`group relative bg-secondary/30 rounded-2xl overflow-hidden border border-border/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 gold-glow fade-in-up-delay-${index === 0 ? '1' : index === 1 ? '2' : '1'}`}
            >
              {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={ceo.image}
                alt={ceo.name}
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{ceo.name}</h3>
                <p className="text-gold font-semibold mb-2">{ceo.title}</p>
                <p className="text-lg font-semibold text-foreground mb-1">{ceo.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{ceo.industry}</p>
                
                {/* Connect Button */}
                <Link to={`/ceo/${ceo.slug}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                  >
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center fade-in-up-delay-2">
          <Link to="/ceo-directory">
            <Button className="btn-gold-outline px-8">
              View All Members
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            Join our community to access the complete CEO directory with 200+ profiles
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEODirectory;