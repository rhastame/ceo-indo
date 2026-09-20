import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Globe, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-gold" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="btn-gold"
            >
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-background/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Card className="bg-card border-gold/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">WhatsApp</p>
                          <p className="text-foreground font-medium">0811 9802 880</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-gold/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="text-foreground font-medium">yayasan.ceo@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-gold/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                          <Instagram className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Instagram</p>
                          <p className="text-foreground font-medium">@ceo.indonesia</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-gold/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                          <Globe className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Website</p>
                          <p className="text-foreground font-medium">www.ceoindonesia.org</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bank Information */}
              <div>
                <h2 className="text-3xl font-bold text-gold mb-6">Bank Information</h2>
                <Card className="bg-card border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-gold" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-foreground">Bank Central Asia (BCA)</p>
                        <p className="text-muted-foreground">a/n YAYASAN GLOBAL CEO INDONESIA</p>
                        <div className="space-y-1">
                          <p className="text-foreground">
                            <span className="text-muted-foreground">Donasi:</span> 7015.690909
                          </p>
                          <p className="text-foreground">
                            <span className="text-muted-foreground">Operasional:</span> 7015.565659
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gold mb-6">Send us a Message</h2>
              <Card className="bg-card border-gold/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`bg-background border-border ${errors.fullName ? 'border-red-500' : ''}`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`bg-background border-border ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        placeholder="Phone/WhatsApp (Optional)"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={`bg-background border-border ${errors.subject ? 'border-red-500' : ''}`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        placeholder="Your message *"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`bg-background border-border min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gold mb-6 text-center">Visit Us</h2>
            <Card className="bg-card border-gold/20 max-w-6xl mx-auto">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                      <p className="text-xl font-semibold text-foreground">Jakarta, Indonesia</p>
                      <p className="text-muted-foreground">Google Maps integration placeholder</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;