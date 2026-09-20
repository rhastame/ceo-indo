import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Download,
  Share2,
  ChevronRight,
  User,
  Building2
} from "lucide-react";
import { getEventBySlug } from "@/data/eventsData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = slug ? getEventBySlug(slug) : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested event could not be found.</p>
            <Link to="/events">
              <Button className="bg-gold hover:bg-gold-light text-primary-foreground">
                Back to Events
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const isUpcoming = event.status === "upcoming";
  const spotsLeft = event.capacity - event.registeredCount;

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(event.title);
    const startDate = event.date.replace(/-/g, '');
    const details = encodeURIComponent(`${event.shortDescription}\n\nLocation: ${event.location.venue}, ${event.location.address}`);
    
    // Create basic .ics content
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Global CEO Indonesia//Event//EN',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}T090000Z`,
      `DTEND:${startDate}T170000Z`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.shortDescription}`,
      `LOCATION:${event.location.venue}, ${event.location.address}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.slug}.ics`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
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
            <Link to="/events" className="hover:text-gold transition-colors">Events</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{event.title}</span>
          </div>
        </div>
      </section>

      {/* Back to Events Link */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gold hover:text-gold-light hover:bg-gold/10 p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-card via-card/95 to-card relative overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold/30 rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="outline" className="bg-gold/10 border-gold text-gold text-sm px-4 py-1">
                {event.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6 font-montserrat">
              {event.title}
            </h1>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">{format(eventDate, 'EEEE, dd MMMM yyyy')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-foreground">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{event.location.venue}</p>
                    <p className="text-sm text-muted-foreground">{event.location.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity</p>
                    <p className="font-semibold text-foreground">
                      {event.registeredCount} / {event.capacity} registered
                      {isUpcoming && spotsLeft > 0 && (
                        <span className="text-gold ml-2">({spotsLeft} spots left)</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {isUpcoming && spotsLeft > 0 ? (
                <Link to={`/events/${event.slug}/register`}>
                  <Button className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold px-8 py-3 animate-glow">
                    Register Now
                  </Button>
                </Link>
              ) : (
                <Button disabled className="bg-muted text-muted-foreground px-8 py-3">
                  {spotsLeft <= 0 ? "Event Full" : "Registration Closed"}
                </Button>
              )}
              
              <Button variant="outline" onClick={handleAddToCalendar} className="border-gold/50 text-gold hover:bg-gold/10">
                <Download className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              
              <Button variant="outline" onClick={handleShare} className="border-gold/50 text-gold hover:bg-gold/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-gradient-gold mb-6 font-montserrat">Overview</h2>
                  <div className="space-y-4">
                    {event.overview.map((paragraph, index) => (
                      <p key={index} className="text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Agenda */}
                <div>
                  <h2 className="text-3xl font-bold text-gradient-gold mb-6 font-montserrat">Agenda</h2>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-20 text-center">
                            <div className="bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                              {item.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1">{item.session}</h4>
                          {item.speaker && (
                            <p className="text-sm text-muted-foreground">{item.speaker}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Speakers */}
                {event.speakers.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gradient-gold mb-6 font-montserrat">Speakers</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center">
                              <User className="w-8 h-8 text-gold" />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-bold text-gold text-lg font-montserrat">{speaker.name}</h4>
                              <p className="text-sm text-foreground">{speaker.title}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Building2 className="w-3 h-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">{speaker.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-gold/20 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gradient-gold mb-4 font-montserrat">Event Information</h3>
                  
                  {/* Quick Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gold/10">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant={isUpcoming ? "default" : "secondary"} className={isUpcoming ? "bg-green-600" : ""}>
                        {isUpcoming ? "Upcoming" : "Past Event"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gold/10">
                      <span className="text-sm text-muted-foreground">Capacity</span>
                      <span className="text-sm font-semibold text-foreground">{event.capacity} people</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gold/10">
                      <span className="text-sm text-muted-foreground">Registered</span>
                      <span className="text-sm font-semibold text-foreground">{event.registeredCount} people</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Available</span>
                      <span className="text-sm font-semibold text-gold">{spotsLeft} spots</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {isUpcoming && spotsLeft > 0 ? (
                    <Link to={`/events/${event.slug}/register`} className="block">
                      <Button className="w-full bg-gold hover:bg-gold-light text-primary-foreground font-semibold">
                        Register Now
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full bg-muted text-muted-foreground">
                      {spotsLeft <= 0 ? "Event Full" : "Registration Closed"}
                    </Button>
                  )}

                  {/* Notes */}
                  {event.notes.length > 0 && (
                    <div className="mt-8">
                      <h4 className="font-semibold text-foreground mb-4">Important Notes</h4>
                      <ul className="space-y-2">
                        {event.notes.map((note, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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

export default EventDetail;