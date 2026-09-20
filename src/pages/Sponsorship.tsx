import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Eye, 
  Users, 
  Megaphone,
  Star,
  Check,
  Mail,
  ArrowRight,
  Calendar,
  Building,
  Globe,
  Award,
  Heart,
  CheckCircle,
  Monitor,
  Handshake,
  Camera,
  Trophy
} from 'lucide-react';

const Sponsorship = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    whatsapp: '',
    package: '',
    eventTarget: '',
    notes: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap diperlukan';
    if (!formData.email.trim()) {
      newErrors.email = 'Email diperlukan';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.company.trim()) newErrors.company = 'Nama perusahaan diperlukan';
    if (!formData.position.trim()) newErrors.position = 'Jabatan diperlukan';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Nomor WhatsApp diperlukan';
    if (!formData.package) newErrors.package = 'Pilih paket sponsorship';
    if (!formData.eventTarget) newErrors.eventTarget = 'Pilih event target';
    if (!formData.consent) newErrors.consent = 'Persetujuan diperlukan';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const scrollToPackages = () => {
    document.getElementById('sponsorship-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    document.getElementById('sponsorship-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Terima Kasih!</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Tim sponsorship kami akan segera menghubungi Anda.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="btn-gold"
            >
              Kembali ke Beranda
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
      <section className="relative py-24 bg-gradient-to-br from-background to-background/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Sponsorship Packages
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Tingkatkan visibilitas brand Anda di hadapan ratusan CEO dan pemimpin bisnis.
          </p>
          <Button onClick={scrollToPackages} className="btn-gold text-lg px-8 py-3">
            Lihat Paket Sponsorship
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Why Sponsor CEO Indonesia?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Eye,
                title: "Eksposur Premium",
                description: "Logo & brand Anda tampil di semua materi event & backdrop."
              },
              {
                icon: Users,
                title: "Akses Eksklusif",
                description: "Jangkau langsung top-level eksekutif & pengambil keputusan."
              },
              {
                icon: Megaphone,
                title: "Brand Activation",
                description: "Booth, product demo, hospitality corner, dan media coverage."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section id="sponsorship-packages" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Sponsorship Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Platinum Sponsor",
                features: [
                  "Logo premium placement (website, stage backdrop, media kit)",
                  "1 keynote slot + panel slot di event besar",
                  "Booth premium (lokasi utama)",
                  "10 undangan VIP (front row)",
                  "Dedicated PR mention & media coverage"
                ],
                cta: "Ajukan Platinum Sponsorship",
                highlight: true
              },
              {
                name: "Gold Sponsor",
                features: [
                  "Logo di website, backdrop, dan booklet event",
                  "1 panel slot",
                  "Booth reguler",
                  "6 undangan VIP",
                  "1 media coverage mention"
                ],
                cta: "Ajukan Gold Sponsorship"
              },
              {
                name: "Silver Sponsor",
                features: [
                  "Logo di website & booklet event",
                  "Booth kecil (shared area)",
                  "3 undangan VIP"
                ],
                cta: "Ajukan Silver Sponsorship"
              }
            ].map((package_, index) => (
              <Card key={index} className={`bg-black border hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 relative overflow-hidden ${package_.highlight ? 'border-gold/50 ring-2 ring-gold/20' : 'border-gold/30'}`}>
                {package_.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light to-gold"></div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`inline-block px-4 py-2 rounded-full mb-4 ${package_.highlight ? 'bg-gold/30' : 'bg-gold/20'}`}>
                    <CardTitle className="text-gold text-2xl font-bold">{package_.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4 mb-8">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    className={`w-full font-semibold ${package_.highlight ? 'bg-gold hover:bg-gold-light text-black' : 'bg-gold/80 hover:bg-gold text-black'}`}
                  >
                    {package_.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Exposure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Deliverables & Exposure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Monitor, text: "Logo di backdrop, booklet, website" },
              { icon: Building, text: "Booth activation" },
              { icon: Megaphone, text: "MC mention saat acara" },
              { icon: Camera, text: "Media coverage & social media posts" },
              { icon: Handshake, text: "Networking access & VIP invitations" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Event Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {[
              { icon: Users, title: "CEO Roundtable", description: "Diskusi eksklusif para CEO" },
              { icon: Building, title: "National Conference", description: "Konferensi nasional skala besar" },
              { icon: Globe, title: "International Summit", description: "Summit internasional bergengsi" },
              { icon: Award, title: "Gala Dinner & Awarding Night", description: "Malam penganugerahan" },
              { icon: Heart, title: "CSR & Charity Event", description: "Acara sosial dan amal" }
            ].map((event, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                    <event.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Sponsor */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">How to Sponsor</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Hubungi Tim Sponsorship",
                description: "Diskusi kebutuhan dan objektif brand"
              },
              {
                step: "02", 
                title: "Tentukan Paket & Event",
                description: "Pilih paket dan event yang sesuai"
              },
              {
                step: "03",
                title: "Aktivasi",
                description: "Logo/booth/PR sesuai paket"
              },
              {
                step: "04",
                title: "Laporan Pasca-Event",
                description: "Exposure, reach, dan media value"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-gold font-bold text-xl">{item.step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gold/30 transform translate-x-8"></div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Siap tingkatkan eksposur brand Anda di hadapan para CEO?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToForm} className="btn-gold">
              Ajukan Sponsorship
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold/10"
              onClick={() => window.location.href = '/partnership-opportunities'}
            >
              Lihat Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section id="sponsorship-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gold mb-4">Ajukan Sponsorship</h2>
              <p className="text-muted-foreground">Isi form berikut dan tim sponsorship kami akan menghubungi Anda segera.</p>
            </div>
            
            <Card className="bg-card border-gold/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Nama Lengkap *"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`bg-background border-border ${errors.fullName ? 'border-red-500' : ''}`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Bisnis *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`bg-background border-border ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Perusahaan *"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={`bg-background border-border ${errors.company ? 'border-red-500' : ''}`}
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="Jabatan *"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        className={`bg-background border-border ${errors.position ? 'border-red-500' : ''}`}
                      />
                      {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Nomor WhatsApp *"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className={`bg-background border-border ${errors.whatsapp ? 'border-red-500' : ''}`}
                    />
                    {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <select 
                        value={formData.package}
                        onChange={(e) => handleInputChange('package', e.target.value)}
                        className={`w-full h-10 px-3 py-2 text-sm rounded-md border bg-background ${errors.package ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                      >
                        <option value="">Pilihan Paket *</option>
                        <option value="platinum">Platinum</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="other">Lainnya</option>
                      </select>
                      {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
                    </div>
                    <div>
                      <select 
                        value={formData.eventTarget}
                        onChange={(e) => handleInputChange('eventTarget', e.target.value)}
                        className={`w-full h-10 px-3 py-2 text-sm rounded-md border bg-background ${errors.eventTarget ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                      >
                        <option value="">Event Target *</option>
                        <option value="roundtable">Roundtable</option>
                        <option value="conference">Conference</option>
                        <option value="summit">Summit</option>
                        <option value="gala">Gala</option>
                        <option value="csr">CSR</option>
                      </select>
                      {errors.eventTarget && <p className="text-red-500 text-sm mt-1">{errors.eventTarget}</p>}
                    </div>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Catatan/Objektif"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="bg-background border-border min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      className="mt-1 w-4 h-4 text-gold bg-background border-border rounded focus:ring-gold"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Saya menyetujui dihubungi oleh Global CEO Indonesia terkait sponsorship. *
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full text-lg py-3"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan Sponsorship'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorship;