import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronRight,
  CheckCircle,
  User,
  Mail,
  Building2,
  Phone,
  Ticket,
  FileText,
  UserCheck,
  QrCode
} from "lucide-react";
import { getEventBySlug } from "@/data/eventsData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface RegistrationData {
  fullName: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  tickets: string;
  referralCode: string;
  notes: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  position?: string;
  phone?: string;
  tickets?: string;
  referralCode?: string;
  notes?: string;
  consent?: string;
}

const EventRegistration = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = slug ? getEventBySlug(slug) : null;
  
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    tickets: "1",
    referralCode: "",
    notes: "",
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
  const spotsLeft = event.capacity - event.registeredCount;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position/Title is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted regarding this event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field: keyof RegistrationData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBackToEvents = () => {
    navigate('/events');
  };

  // Success Screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold text-gradient-gold mb-4 font-montserrat">Registration Successful!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for registering. We've received your registration and will send you a confirmation email shortly.
              </p>

              {/* Event Summary */}
              <div className="bg-card border border-gold/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gold mb-4 font-montserrat">Event Summary</h3>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-semibold text-foreground">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{format(eventDate, 'EEEE, dd MMMM yyyy')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-foreground">{event.location.venue}</p>
                      <p className="text-sm text-muted-foreground">{event.location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-gold" />
                    <p className="text-foreground">{formData.tickets} ticket(s) for {formData.fullName}</p>
                  </div>
                </div>
              </div>

              {/* Placeholder QR/Badge Area */}
              <div className="bg-gradient-to-br from-gold/10 to-gold-light/10 border border-gold/30 rounded-xl p-8 mb-8">
                <div className="flex flex-col items-center">
                  <QrCode className="w-16 h-16 text-gold mb-4" />
                  <p className="text-gold font-semibold mb-2">Event Badge</p>
                  <p className="text-sm text-muted-foreground text-center">
                    Your digital event badge and QR code will be sent to your email before the event.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleBackToEvents} className="bg-gold hover:bg-gold-light text-primary-foreground">
                  Back to Events
                </Button>
                <Button variant="outline" onClick={() => window.print()} className="border-gold/50 text-gold hover:bg-gold/10">
                  Print Confirmation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Registration Form
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
            <Link to={`/events/${event.slug}`} className="hover:text-gold transition-colors">{event.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Register</span>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6">
          <Link to={`/events/${event.slug}`}>
            <Button variant="ghost" className="text-gold hover:text-gold-light hover:bg-gold/10 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Event Details
            </Button>
          </Link>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-gold/20 rounded-xl p-8">
                  <h1 className="text-3xl font-bold text-gradient-gold mb-2 font-montserrat">Event Registration</h1>
                  <p className="text-muted-foreground mb-8">
                    Please fill out the form below to register for this event. All required fields are marked with *.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gold font-montserrat">Personal Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gold" />
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className={cn(
                              "mt-2 bg-background border-gold/30 focus:border-gold",
                              errors.fullName && "border-red-500 focus:border-red-500"
                            )}
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gold" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={cn(
                              "mt-2 bg-background border-gold/30 focus:border-gold",
                              errors.email && "border-red-500 focus:border-red-500"
                            )}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gold" />
                            Company *
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className={cn(
                              "mt-2 bg-background border-gold/30 focus:border-gold",
                              errors.company && "border-red-500 focus:border-red-500"
                            )}
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="position" className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-gold" />
                            Position/Title *
                          </Label>
                          <Input
                            id="position"
                            type="text"
                            placeholder="CEO, Director, Manager, etc."
                            value={formData.position}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                            className={cn(
                              "mt-2 bg-background border-gold/30 focus:border-gold",
                              errors.position && "border-red-500 focus:border-red-500"
                            )}
                          />
                          {errors.position && (
                            <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gold" />
                          Phone/WhatsApp *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+62 812 3456 7890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={cn(
                            "mt-2 bg-background border-gold/30 focus:border-gold",
                            errors.phone && "border-red-500 focus:border-red-500"
                          )}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gold font-montserrat">Event Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="tickets" className="flex items-center gap-2">
                            <Ticket className="w-4 h-4 text-gold" />
                            Number of Tickets
                          </Label>
                          <Select value={formData.tickets} onValueChange={(value) => handleInputChange('tickets', value)}>
                            <SelectTrigger className="mt-2 bg-background border-gold/30 focus:border-gold">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-gold/30">
                              {[1, 2, 3, 4, 5].map((num) => (
                                <SelectItem key={num} value={num.toString()}>{num} ticket{num > 1 ? 's' : ''}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="referralCode">
                            Referral / Invitation Code
                          </Label>
                          <Input
                            id="referralCode"
                            type="text"
                            placeholder="Optional referral code"
                            value={formData.referralCode}
                            onChange={(e) => handleInputChange('referralCode', e.target.value)}
                            className="mt-2 bg-background border-gold/30 focus:border-gold"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="notes" className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gold" />
                          Notes / Special Requests
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          className="mt-2 bg-background border-gold/30 focus:border-gold min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                          className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-1"
                        />
                        <Label
                          htmlFor="consent"
                          className={cn(
                            "text-sm leading-relaxed cursor-pointer",
                            errors.consent && "text-red-500"
                          )}
                        >
                          I agree to be contacted regarding this event and understand that Global CEO Indonesia may send me event updates, reminders, and related information. *
                        </Label>
                      </div>
                      {errors.consent && (
                        <p className="text-red-500 text-sm">{errors.consent}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || spotsLeft <= 0}
                        className="w-full bg-gold hover:bg-gold-light text-primary-foreground font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Processing Registration...
                          </>
                        ) : spotsLeft <= 0 ? (
                          "Event Full - Registration Closed"
                        ) : (
                          "Complete Registration"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Event Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-gold/20 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gradient-gold mb-4 font-montserrat">Event Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gold text-lg">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.category}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="text-sm text-foreground">{format(eventDate, 'EEEE, dd MMMM yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-sm text-foreground">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gold mt-0.5" />
                        <div>
                          <p className="text-sm text-foreground">{event.location.venue}</p>
                          <p className="text-xs text-muted-foreground">{event.location.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="border-t border-gold/20 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Available Spots</span>
                      <span className={`text-sm font-semibold ${spotsLeft > 0 ? 'text-gold' : 'text-red-500'}`}>
                        {spotsLeft} left
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((event.registeredCount / event.capacity) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {event.registeredCount} / {event.capacity} registered
                    </p>
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

export default EventRegistration;