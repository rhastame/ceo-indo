import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Users, 
  Award, 
  Handshake, 
  Globe2, 
  Calendar, 
  Lightbulb, 
  Search, 
  Heart, 
  Camera, 
  GraduationCap,
  Check,
  Download,
  ChevronDown,
  Star,
  Mail,
  ArrowRight
} from 'lucide-react';

const PartnershipOpportunities = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    whatsapp: '',
    collaborationType: '',
    objectives: '',
    period: '',
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
    if (!formData.collaborationType) newErrors.collaborationType = 'Pilih jenis kolaborasi';
    if (!formData.objectives.trim()) newErrors.objectives = 'Target & objektif diperlukan';
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

  const scrollToForm = () => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Terima Kasih!</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Tim kami akan menghubungi Anda dalam 1–2 hari kerja.
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
            Partnership Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Berkolaborasi dengan jaringan CEO terpilih untuk dampak bisnis yang nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToForm} className="btn-gold text-lg px-8 py-3">
              Ajukan Kerja Sama
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-3">
              <Download className="mr-2 w-5 h-5" />
              Download Partnership Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Why Partner with Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Akses ke Pengambil Keputusan",
                description: "Jangkau ratusan CEO lintas industri di seluruh Indonesia dan luar negeri."
              },
              {
                icon: Award,
                title: "Brand Positioning Premium",
                description: "Eksposur di event eksklusif, website, dan kanal komunitas kami."
              },
              {
                icon: Handshake,
                title: "Kolaborasi Bernilai",
                description: "Co-host event, riset bersama, CSR, hingga employer branding."
              },
              {
                icon: Globe2,
                title: "Jaringan Nasional & Global",
                description: "Provinsi + internasional (Australia, China, Malaysia, Singapore, USA, dll)."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jenis Kolaborasi */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Jenis Kolaborasi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Co-Host Events & Roundtable",
                description: "Menjadi co-host pada event eksklusif, roundtable, atau CEO talk."
              },
              {
                icon: Lightbulb,
                title: "Thought Leadership",
                description: "Keynote/panel, artikel bersama, whitepaper, atau webinar dengan brand Anda sebagai narasumber."
              },
              {
                icon: Search,
                title: "Research / Case Study",
                description: "Riset bertema industri, publikasi bersama komunitas CEO."
              },
              {
                icon: Heart,
                title: "CSR Collaboration",
                description: "Program sosial/pendidikan untuk dampak positif bersama."
              },
              {
                icon: Camera,
                title: "Media & Content Partnership",
                description: "Publikasi liputan, video recap, dan kampanye konten bersama."
              },
              {
                icon: GraduationCap,
                title: "Talent & Executive Education",
                description: "Program pelatihan eksekutif, leadership academy, dan executive coaching."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.title === "CSR Collaboration" && (
                    <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold/10">
                      Lihat CSR
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Kerja Sama */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Paket Kerja Sama</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Platinum",
                features: [
                  "Logo utama di website & backdrop event",
                  "1 keynote + 1 panel slot / tahun",
                  "Booth/activation (opsional)",
                  "6 posting sosmed + 2 artikel bersama", 
                  "10 undangan VIP per event"
                ],
                cta: "Ajukan sebagai Platinum"
              },
              {
                name: "Gold",
                features: [
                  "Logo di website & materi event",
                  "1 panel slot / tahun",
                  "3 posting sosmed + 1 artikel bersama",
                  "6 undangan VIP per event"
                ],
                cta: "Ajukan sebagai Gold"
              },
              {
                name: "Silver",
                features: [
                  "Logo di website",
                  "2 posting sosmed",
                  "4 undangan VIP per event"
                ],
                cta: "Ajukan sebagai Silver"
              }
            ].map((package_, index) => (
              <Card key={index} className="bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light to-gold"></div>
                <CardHeader className="text-center pb-4">
                  <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-4">
                    <CardTitle className="text-gold text-2xl font-bold">{package_.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-gold hover:bg-gold-light text-black font-semibold"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Deliverables & Exposure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Logo & link di website komunitas",
              "Penyebutan di MC & materi event",
              "Konten liputan / recap / foto",
              "Database peserta (sesuai kebijakan & izin)",
              "Reporting ringkas pasca-event"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-gold/20">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Bermitra */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Cara Bermitra</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "Pahami objektif & target audiens Anda"
              },
              {
                step: "02", 
                title: "Proposal Custom",
                description: "Opsi paket & aktivitas"
              },
              {
                step: "03",
                title: "Eksekusi",
                description: "Co-branding, konten, dan aktivasi event"
              },
              {
                step: "04",
                title: "Report & Follow-up",
                description: "Hasil, media value, peluang lanjutan"
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

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">What Partners Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Kolaborasi yang berdampak, audiens tepat sasaran.",
                author: "CEO Partner A"
              },
              {
                quote: "Event quality tinggi dengan networking value yang luar biasa.",
                author: "CEO Partner B"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground font-medium">— {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gold/20 rounded-lg px-6">
                <AccordionTrigger className="text-foreground hover:text-gold">
                  Apakah paket bisa dikustom?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ya, kami fleksibel sesuai objektif brand Anda. Tim kami akan menyesuaikan paket kemitraan berdasarkan kebutuhan dan target audiens spesifik.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gold/20 rounded-lg px-6">
                <AccordionTrigger className="text-foreground hover:text-gold">
                  Apakah ada opsi multi-event?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ada—kita bisa buat annual plan dengan paket kemitraan untuk beberapa event sepanjang tahun dengan benefit yang lebih menguntungkan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-gold/20 rounded-lg px-6">
                <AccordionTrigger className="text-foreground hover:text-gold">
                  Bagaimana proses penentuan topik?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Disusun bersama tim editorial & kurator komunitas kami, dengan mempertimbangkan trend industri dan kebutuhan audiens CEO.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Siap berkolaborasi dengan jaringan CEO terpilih?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToForm} className="btn-gold">
              Ajukan Kerja Sama
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
              Lihat Sponsorship
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gold mb-4">Ajukan Kerja Sama</h2>
              <p className="text-muted-foreground">Isi form berikut dan tim kami akan menghubungi Anda segera.</p>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Nomor WhatsApp *"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className={`bg-background border-border ${errors.whatsapp ? 'border-red-500' : ''}`}
                      />
                      {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                    </div>
                    <div>
                      <select 
                        value={formData.collaborationType}
                        onChange={(e) => handleInputChange('collaborationType', e.target.value)}
                        className={`w-full h-10 px-3 py-2 text-sm rounded-md border bg-background ${errors.collaborationType ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                      >
                        <option value="">Pilih Jenis Kolaborasi *</option>
                        <option value="co-host">Co-Host Event</option>
                        <option value="thought-leadership">Thought Leadership</option>
                        <option value="research">Research</option>
                        <option value="csr">CSR</option>
                        <option value="media">Media</option>
                        <option value="talent">Talent/Executive Education</option>
                        <option value="other">Lainnya</option>
                      </select>
                      {errors.collaborationType && <p className="text-red-500 text-sm mt-1">{errors.collaborationType}</p>}
                    </div>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Target & Objektif *"
                      value={formData.objectives}
                      onChange={(e) => handleInputChange('objectives', e.target.value)}
                      className={`bg-background border-border min-h-[100px] ${errors.objectives ? 'border-red-500' : ''}`}
                    />
                    {errors.objectives && <p className="text-red-500 text-sm mt-1">{errors.objectives}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Perkiraan Periode (opsional)"
                      value={formData.period}
                      onChange={(e) => handleInputChange('period', e.target.value)}
                      className="bg-background border-border"
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
                      Saya menyetujui dihubungi oleh Global CEO Indonesia. *
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full text-lg py-3"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan'}
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

export default PartnershipOpportunities;