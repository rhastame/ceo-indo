import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      slug: "ceo-leadership-summit-2024",
      title: "CEO Leadership Summit 2024",
      type: "Summit",
      date: "December 15, 2024",
      time: "09:00 - 17:00 WIB",
      location: "The Ritz-Carlton, Jakarta",
      attendees: "150+ CEOs",
      description: "Annual gathering of Indonesia's top business leaders discussing future strategies and market trends.",
      featured: true
    },
    {
      id: 2,
      slug: "digital-transformation-forum",
      title: "Digital Transformation Forum",
      type: "Forum",
      date: "January 20, 2025",
      time: "14:00 - 18:00 WIB",
      location: "Grand Hyatt, Surabaya",
      attendees: "80+ CEOs",
      description: "Exploring AI, automation, and digital innovation strategies for modern businesses.",
      featured: false
    },
    {
      id: 3,
      slug: "sustainable-business-roundtable",
      title: "Sustainable Business Roundtable",
      type: "Roundtable",
      date: "February 10, 2025",
      time: "10:00 - 15:00 WIB",
      location: "Mandarin Oriental, Bali",
      attendees: "50+ CEOs",
      description: "ESG implementation and sustainable business practices for long-term growth.",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join exclusive gatherings where Indonesia's business elite share insights and forge strategic partnerships
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:scale-105 gold-glow ${
                event.featured 
                  ? 'border-gold shadow-gold-glow lg:col-span-2 lg:row-span-1' 
                  : 'border-border/20 hover:border-gold/50'
              } fade-in-up-delay-${index === 0 ? '1' : index === 1 ? '2' : '1'}`}
            >
              {event.featured && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-gradient-to-r from-gold to-gold-light text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Flagship Event
                  </span>
                </div>
              )}

              <div className={`${event.featured ? 'lg:flex lg:gap-8' : ''}`}>
                <div className={`${event.featured ? 'lg:flex-1' : ''}`}>
                  {/* Event Type */}
                  <div className="inline-block bg-secondary/50 text-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {event.type}
                  </div>

                  {/* Event Title */}
                  <h3 className={`font-bold text-foreground mb-4 ${event.featured ? 'text-2xl' : 'text-xl'}`}>
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className={`${event.featured ? 'lg:flex lg:items-end' : ''}`}>
                  <Link to={`/events/${event.slug}`} className={`block ${event.featured ? 'lg:w-auto' : 'w-full'}`}>
                    <Button 
                      className={`w-full ${
                        event.featured 
                          ? 'btn-gold' 
                          : 'btn-gold-outline'
                      } ${event.featured ? 'lg:w-auto lg:px-8' : ''}`}
                    >
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Events Button */}
        <div className="text-center fade-in-up-delay-2">
          <Link to="/events">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground px-8">
              View All Events
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            Members get priority access and exclusive discounts on all events
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;