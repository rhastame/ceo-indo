import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { eventsData, cities, getUpcomingEvents, getPastEvents, type EventData } from "@/data/eventsData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  // Get events based on active tab
  const getEventsByTab = (tab: string): EventData[] => {
    return tab === "upcoming" ? getUpcomingEvents() : getPastEvents();
  };

  // Filter and search logic
  const filteredEvents = useMemo(() => {
    let filtered = getEventsByTab(activeTab);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by city
    if (selectedCity !== "All Cities") {
      filtered = filtered.filter(event => event.location.city === selectedCity);
    }

    return filtered;
  }, [activeTab, searchTerm, selectedCity]);

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (type: string, value: string) => {
    setCurrentPage(1);
    if (type === "city") setSelectedCity(value);
    if (type === "tab") setActiveTab(value);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const EventCard = ({ event }: { event: EventData }) => {
    const eventDate = new Date(event.date);
    
    return (
      <div className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
        <div className="flex flex-col h-full">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge variant="outline" className="bg-gold/10 border-gold/50 text-gold">
              {event.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gold mb-3 font-montserrat group-hover:text-gold-light transition-colors">
            {event.title}
          </h3>

          {/* Date, Time & Location */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{format(eventDate, 'EEEE, dd MMMM yyyy')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock className="w-4 h-4 text-gold" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{event.location.venue}, {event.location.city}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {event.shortDescription}
          </p>

          {/* Capacity Info */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Users className="w-3 h-3" />
            <span>{event.registeredCount} / {event.capacity} registered</span>
          </div>

          {/* CTA Button */}
          <Link to={`/events/${event.slug}`} className="mt-auto">
            <Button 
              variant="outline" 
              className="w-full border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 group-hover:border-gold"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background py-16 border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold font-montserrat">
                Events
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              Connect, learn, and grow with Indonesia's business community
            </p>
            <p className="text-sm text-muted-foreground">
              {filteredEvents.length} events found
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Tabs and Filters */}
            <Tabs value={activeTab} onValueChange={(value) => handleFilterChange("tab", value)} className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                {/* Event Type Tabs */}
                <TabsList className="bg-background border border-gold/30">
                  <TabsTrigger value="upcoming" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger value="past" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                    Past Events
                  </TabsTrigger>
                </TabsList>

                {/* Search and City Filter */}
                <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 w-64 bg-background border-gold/30 focus:border-gold"
                    />
                  </div>

                  {/* City Filter */}
                  <Select value={selectedCity} onValueChange={(value) => handleFilterChange("city", value)}>
                    <SelectTrigger className="w-48 bg-background border-gold/30 focus:border-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-gold/30">
                      {cities.map((city) => (
                        <SelectItem key={city} value={city} className="hover:bg-gold/10">
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Events Grid */}
              <TabsContent value="upcoming" className="mt-0">
                {currentEvents.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          Showing {startIndex + 1} to {Math.min(endIndex, filteredEvents.length)} of {filteredEvents.length} events
                        </p>
                        
                        <div className="flex items-center gap-2">
                          {/* Previous Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>

                          {/* Page Numbers */}
                          {getPageNumbers().map((page, index) => (
                            <Button
                              key={index}
                              variant={page === currentPage ? "default" : "outline"}
                              size="sm"
                              onClick={() => typeof page === 'number' && setCurrentPage(page)}
                              disabled={page === '...'}
                              className={cn(
                                "min-w-[40px]",
                                page === currentPage
                                  ? "bg-gold text-primary-foreground hover:bg-gold-light"
                                  : "border-gold/30 text-foreground hover:bg-gold/10",
                                page === '...' && "cursor-default hover:bg-transparent"
                              )}
                            >
                              {page}
                            </Button>
                          ))}

                          {/* Next Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* Empty State */
                  <div className="text-center py-16">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Events Found</h3>
                    <p className="text-muted-foreground mb-6">
                      {activeTab === "upcoming" 
                        ? "No upcoming events match your search criteria."
                        : "No past events match your search criteria."
                      }
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCity("All Cities");
                        setCurrentPage(1);
                      }}
                      className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="mt-0">
                {currentEvents.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>

                    {/* Pagination for Past Events */}
                    {totalPages > 1 && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          Showing {startIndex + 1} to {Math.min(endIndex, filteredEvents.length)} of {filteredEvents.length} events
                        </p>
                        
                        <div className="flex items-center gap-2">
                          {/* Previous Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>

                          {/* Page Numbers */}
                          {getPageNumbers().map((page, index) => (
                            <Button
                              key={index}
                              variant={page === currentPage ? "default" : "outline"}
                              size="sm"
                              onClick={() => typeof page === 'number' && setCurrentPage(page)}
                              disabled={page === '...'}
                              className={cn(
                                "min-w-[40px]",
                                page === currentPage
                                  ? "bg-gold text-primary-foreground hover:bg-gold-light"
                                  : "border-gold/30 text-foreground hover:bg-gold/10",
                                page === '...' && "cursor-default hover:bg-transparent"
                              )}
                            >
                              {page}
                            </Button>
                          ))}

                          {/* Next Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* Empty State */
                  <div className="text-center py-16">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Events Found</h3>
                    <p className="text-muted-foreground mb-6">
                      No past events match your search criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCity("All Cities");
                        setCurrentPage(1);
                      }}
                      className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;