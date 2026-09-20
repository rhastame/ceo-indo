import React from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Heart, 
  Building, 
  TreePine, 
  Users,
  ExternalLink,
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
  AlertCircle,
  Star
} from 'lucide-react';

const CSRDonation = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Pendidikan & Beasiswa",
      description: "Mendukung pendidikan berkualitas dan beasiswa untuk generasi penerus bangsa.",
      image: "📚"
    },
    {
      icon: Heart,
      title: "Kesehatan",
      description: "Program kesehatan masyarakat dan bantuan medis untuk yang membutuhkan.",
      image: "🏥"
    },
    {
      icon: Building,
      title: "UMKM",
      description: "Pemberdayaan usaha mikro kecil menengah untuk kemajuan ekonomi rakyat.",
      image: "🏪"
    },
    {
      icon: TreePine,
      title: "Lingkungan",
      description: "Pelestarian lingkungan dan program hijau untuk masa depan berkelanjutan.",
      image: "🌱"
    },
    {
      icon: Users,
      title: "Sosial & Kemanusiaan",
      description: "Bantuan kemanusiaan dan program sosial untuk masyarakat yang membutuhkan.",
      image: "🤝"
    }
  ];

  const impacts = [
    { number: "2000+", label: "Penerima Beasiswa" },
    { number: "50+", label: "Desa Binaan UMKM" },
    { number: "100+", label: "Aksi Sosial & Kemanusiaan" }
  ];

  const steps = [
    {
      step: "01",
      title: "Pilih Program",
      description: "Pilih program yang ingin Anda dukung"
    },
    {
      step: "02",
      title: "Klik Donate via DanaMart",
      description: "Klik tombol donasi untuk diarahkan ke platform"
    },
    {
      step: "03",
      title: "Proses di DanaMart",
      description: "Selesaikan donasi melalui platform resmi DanaMart"
    }
  ];

  const openDanaMart = () => {
    window.open('https://danamart.id', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background to-background/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            CSR Donation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Bersama kita mendukung program sosial & pembangunan bangsa.
          </p>
          
          {/* Important Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-foreground font-medium">
                  <strong>Seluruh donasi dikelola melalui platform resmi DanaMart.</strong>
                </p>
                <p className="text-muted-foreground mt-1">
                  Website ini hanya menampilkan program, klik tombol untuk diarahkan ke DanaMart.
                </p>
              </div>
            </div>
          </div>

          <Button onClick={openDanaMart} className="btn-gold text-lg px-8 py-3">
            Lihat Program & Donasi di DanaMart
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Program Showcase */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Program CSR</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{program.image}</div>
                  <CardTitle className="text-gold text-xl font-bold group-hover:text-gold-light transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Button 
                    onClick={openDanaMart}
                    className="w-full bg-gold hover:bg-gold-light text-black font-semibold group"
                  >
                    Donate via DanaMart
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-black border-y border-gold/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {impacts.map((impact, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gold gold-glow">
                  {impact.number}
                </div>
                <div className="text-white font-medium">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-gold font-bold text-xl">{step.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gold/30 transform translate-x-8"></div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Why Your Donation Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Dampak Terukur",
                description: "Setiap donasi memiliki target dan metrik dampak yang jelas dan terukur."
              },
              {
                icon: Lightbulb,
                title: "Inovasi Sosial",
                description: "Program-program inovatif yang memberikan solusi berkelanjutan."
              },
              {
                icon: Globe,
                title: "Jangkauan Luas",
                description: "Menjangkau berbagai daerah di Indonesia dengan program yang tepat sasaran."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-card border-gold/20">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-foreground mb-6 italic">
                  "Program CSR ini memberi dampak nyata untuk masyarakat. Transparansi dan profesionalisme dalam pengelolaan donasi sangat terjaga."
                </blockquote>
                <cite className="text-muted-foreground font-medium">— CEO Anggota Global CEO Indonesia</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Mari bersama wujudkan dampak sosial yang lebih luas.
          </h3>
          <Button onClick={openDanaMart} className="btn-gold text-lg px-8 py-3">
            Lihat Program & Donasi di DanaMart
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-8">Transparansi & Akuntabilitas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Laporan Berkala</h3>
                  <p className="text-muted-foreground">
                    Laporan penggunaan dana dan dampak program disampaikan secara berkala kepada para donatur melalui platform DanaMart.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Audit Independen</h3>
                  <p className="text-muted-foreground">
                    Seluruh program CSR diaudit oleh pihak independen untuk memastikan transparansi dan akuntabilitas pengelolaan dana.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSRDonation;