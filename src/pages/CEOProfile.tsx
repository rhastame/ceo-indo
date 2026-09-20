import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Mail, 
  Linkedin, 
  Globe, 
  Award,
  UserPlus,
  Calendar,
  ChevronRight
} from "lucide-react";
import { getCEOBySlug } from "@/data/ceoData";
import { cn } from "@/lib/utils";

const CEOProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const ceo = slug ? getCEOBySlug(slug) : null;

  if (!ceo) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">CEO Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested CEO profile could not be found.</p>
            <Link to="/ceo-directory">
              <Button className="bg-gold hover:bg-gold-light text-primary-foreground">
                Back to Directory
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const handleConnect = () => {
    // Placeholder for connect functionality
    alert("Connect feature coming soon!");
  };

  const handleInviteToEvent = () => {
    // Placeholder for invite functionality  
    alert("Invite to event feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/ceo-directory" className="hover:text-gold transition-colors">CEO Directory</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{ceo.name}</span>
          </div>
        </div>
      </section>

      {/* Back to Directory Link */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gold hover:text-gold-light hover:bg-gold/10 p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Button>
        </div>
      </section>

      {/* Hero Header */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Profile Photo */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-2xl p-8 border border-gold/30">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gold/10 to-gold-light/10">
                      <img 
                        src={ceo.image} 
                        alt={ceo.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Name & Title */}
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3 font-montserrat">
                      {ceo.name}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-2">{ceo.title}</p>
                    
                    {/* Company & Location */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-gold" />
                        <span className="text-lg font-semibold text-foreground">{ceo.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{ceo.industry}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gold" />
                        <span className="text-foreground">{ceo.province}, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={handleConnect}
                      className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold px-6"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button 
                      onClick={handleInviteToEvent}
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-primary-foreground px-6"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Invite to Event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview/Bio */}
                <div className="bg-card border border-gold/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gradient-gold mb-4 font-montserrat">Overview</h2>
                  <p className="text-foreground leading-relaxed">{ceo.bio}</p>
                </div>

                {/* Company & Industry */}
                <div className="bg-card border border-gold/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gradient-gold mb-4 font-montserrat">Company & Industry</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Company</p>
                      <p className="text-lg font-semibold text-foreground">{ceo.company}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Industry</p>
                      <p className="text-foreground">{ceo.industry}</p>
                    </div>
                    {ceo.companyLink && (
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">Website</p>
                        <a 
                          href={ceo.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
                        >
                          <Globe className="w-4 h-4" />
                          {ceo.companyLink.replace('https://', '')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expertise & Interests */}
                <div className="bg-card border border-gold/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gradient-gold mb-4 font-montserrat">Expertise & Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {ceo.expertise.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="bg-gold/10 border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {ceo.highlights.length > 0 && (
                  <div className="bg-card border border-gold/20 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-gradient-gold mb-4 font-montserrat">Highlights</h2>
                    <div className="space-y-3">
                      {ceo.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-gold/10">
                          <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Award className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <p className="text-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Contact & Links */}
                <div className="bg-card border border-gold/20 rounded-xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gradient-gold mb-4 font-montserrat">Contact & Links</h2>
                  <div className="space-y-4">
                    {ceo.contact.email && (
                      <a 
                        href={`mailto:${ceo.contact.email}`}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gold/20 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold-light/30 transition-all duration-300">
                          <Mail className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <p className="text-xs text-muted-foreground truncate">{ceo.contact.email}</p>
                        </div>
                      </a>
                    )}

                    {ceo.contact.linkedin && (
                      <a 
                        href={ceo.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-gold/20 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold-light/30 transition-all duration-300">
                          <Linkedin className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">LinkedIn</p>
                          <p className="text-xs text-muted-foreground">Professional Profile</p>
                        </div>
                      </a>
                    )}

                    {ceo.contact.website && (
                      <a 
                        href={ceo.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-gold/20 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold-light/30 transition-all duration-300">
                          <Globe className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Website</p>
                          <p className="text-xs text-muted-foreground truncate">{ceo.contact.website.replace('https://', '')}</p>
                        </div>
                      </a>
                    )}

                    {!ceo.contact.email && !ceo.contact.linkedin && !ceo.contact.website && (
                      <p className="text-muted-foreground text-sm text-center py-4">
                        Contact information not available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CEOProfile;