import React from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { crowdfundingProjects } from '@/data/crowdfundingData';
import { 
  MapPin, 
  Calendar, 
  TrendingUp,
  ExternalLink,
  AlertCircle,
  Eye,
  Users,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Crowdfunding = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateProgress = (raised: number, target: number) => {
    return Math.round((raised / target) * 100);
  };

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
            Crowdfunding Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Bergabung dalam pendanaan bisnis dan usaha bersama komunitas CEO.
          </p>
          
          {/* Important Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-foreground font-medium">
                  <strong>Seluruh proses crowdfunding dikelola melalui platform resmi DanaMart.</strong>
                </p>
                <p className="text-muted-foreground mt-1">
                  Website ini hanya menampilkan informasi proyek, klik tombol untuk diarahkan ke DanaMart.
                </p>
              </div>
            </div>
          </div>

          <Button onClick={openDanaMart} className="btn-gold text-lg px-8 py-3">
            Explore More at DanaMart
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Why Crowdfunding */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Why Join Our Crowdfunding?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Eye,
                title: "Akses Eksklusif",
                description: "Peluang investasi yang dikurasi khusus untuk komunitas CEO Indonesia."
              },
              {
                icon: Users,
                title: "Network Value",
                description: "Bergabung dengan jaringan investor dan entrepreneur terpilih."
              },
              {
                icon: Target,
                title: "Due Diligence",
                description: "Setiap proyek telah melalui proses seleksi dan validasi yang ketat."
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

      {/* Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {crowdfundingProjects.map((project) => {
              const progress = calculateProgress(project.raisedFunding, project.targetFunding);
              
              return (
                <Card key={project.id} className="bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-gold text-xl font-bold group-hover:text-gold-light transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center text-white/70 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="text-gold text-xs font-medium bg-gold/20 px-2 py-1 rounded">
                        {project.industry}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/70">Target</span>
                          <span className="text-gold font-medium">{formatCurrency(project.targetFunding)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/70">Terkumpul</span>
                          <span className="text-white">{formatCurrency(project.raisedFunding)}</span>
                        </div>
                        <Progress value={progress} className="h-2 bg-gray-800">
                          <div 
                            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </Progress>
                        <div className="text-right mt-1">
                          <span className="text-gold font-bold text-sm">{progress}%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-white/70">
                          <Calendar className="w-4 h-4" />
                          <span>{project.daysLeft} hari tersisa</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-gold" />
                          <span className="text-gold font-medium">Active</span>
                        </div>
                      </div>
                    </div>

                    <Link to={`/crowdfunding/${project.slug}`}>
                      <Button className="w-full bg-gold hover:bg-gold-light text-black font-semibold group">
                        View Details
                        <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Dukung pertumbuhan bisnis bersama komunitas CEO Indonesia.
          </h3>
          <Button onClick={openDanaMart} className="btn-gold text-lg px-8 py-3">
            Explore More at DanaMart
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crowdfunding;