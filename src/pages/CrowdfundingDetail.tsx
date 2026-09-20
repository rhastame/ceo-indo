import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useParams, Link } from 'react-router-dom';
import { getCrowdfundingProject, getRelatedProjects } from '@/data/crowdfundingData';
import { 
  MapPin, 
  Calendar, 
  TrendingUp,
  ExternalLink,
  Building,
  User,
  Target,
  AlertTriangle,
  ChevronLeft,
  Eye,
  Users,
  PieChart
} from 'lucide-react';

const CrowdfundingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getCrowdfundingProject(slug) : null;
  const relatedProjects = slug ? getRelatedProjects(slug) : [];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The crowdfunding project you're looking for doesn't exist.</p>
          <Link to="/crowdfunding">
            <Button className="btn-gold">
              <ChevronLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  const progress = calculateProgress(project.raisedFunding, project.targetFunding);

  const openDanaMart = () => {
    window.open('https://danamart.id', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="py-6 bg-muted/20 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">Home</Link>
            <span className="text-muted-foreground">→</span>
            <Link to="/crowdfunding" className="text-muted-foreground hover:text-gold transition-colors">Crowdfunding</Link>
            <span className="text-muted-foreground">→</span>
            <span className="text-foreground font-medium">{project.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Project Info */}
            <div>
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full mb-4">
                  {project.industry}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
                {project.name}
              </h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Side - Funding Info */}
            <div>
              <Card className="bg-card border-gold/20 sticky top-6">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gold mb-4">Funding Progress</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Target Pendanaan</span>
                          <span className="text-xl font-bold text-foreground">{formatCurrency(project.targetFunding)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Dana Terkumpul</span>
                          <span className="text-lg font-semibold text-gold">{formatCurrency(project.raisedFunding)}</span>
                        </div>
                        <Progress value={progress} className="h-3 bg-muted">
                          <div 
                            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </Progress>
                        <div className="flex justify-between items-center">
                          <span className="text-gold font-bold text-lg">{progress}% Complete</span>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{project.daysLeft} hari tersisa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button onClick={openDanaMart} className="w-full btn-gold text-lg py-3">
                      Join Business with DanaMart
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Investasi melalui platform resmi DanaMart
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="description">Deskripsi Usaha</TabsTrigger>
                <TabsTrigger value="founder">Tim Pendiri</TabsTrigger>
                <TabsTrigger value="funding">Rencana Dana</TabsTrigger>
                <TabsTrigger value="projections">Proyeksi & Risiko</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <Card className="bg-card border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-gold flex items-center">
                      <Building className="mr-2 w-5 h-5" />
                      Tentang Bisnis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Unique Value Proposition</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Bisnis ini menawarkan solusi inovatif dengan pendekatan yang unik di industri {project.industry.toLowerCase()}. 
                        Dengan fokus pada kualitas, keberlanjutan, dan customer experience yang superior.
                      </p>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Market Opportunity</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Pasar {project.industry.toLowerCase()} di Indonesia menunjukkan pertumbuhan yang konsisten dengan potensi 
                        ekspansi yang besar. Target market yang jelas dengan segmentasi yang tepat.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="founder" className="space-y-6">
                <Card className="bg-card border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-gold flex items-center">
                      <User className="mr-2 w-5 h-5" />
                      Tim Pendiri
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.founder.name}</h3>
                        <p className="text-gold font-medium mb-3">{project.founder.role}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.founder.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="funding" className="space-y-6">
                <Card className="bg-card border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-gold flex items-center">
                      <PieChart className="mr-2 w-5 h-5" />
                      Breakdown Penggunaan Dana
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {Object.entries(project.fundingBreakdown).map(([key, percentage]) => {
                          const labels: Record<string, string> = {
                            production: 'Produksi',
                            marketing: 'Marketing',
                            operations: 'Operasional', 
                            reserve: 'Cadangan'
                          };
                          
                          return (
                            <div key={key} className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-foreground font-medium">{labels[key]}</span>
                                <span className="text-gold font-bold">{percentage}%</span>
                              </div>
                              <Progress value={percentage} className="h-2">
                                <div 
                                  className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                                  style={{ width: `${percentage}%` }}
                                />
                              </Progress>
                            </div>
                          );
                        })}
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Total Kebutuhan</h4>
                        <p className="text-2xl font-bold text-gold mb-2">{formatCurrency(project.targetFunding)}</p>
                        <p className="text-sm text-muted-foreground">
                          Dana akan digunakan secara bertahap sesuai milestone yang telah ditetapkan.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projections" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-card border-gold/20">
                    <CardHeader>
                      <CardTitle className="text-gold flex items-center">
                        <Target className="mr-2 w-5 h-5" />
                        Proyeksi & Potensi ROI
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.projectedROI}
                      </p>
                      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                        <p className="text-sm text-foreground">
                          <strong>Disclaimer:</strong> Proyeksi ini berdasarkan analisis pasar dan asumsi bisnis. 
                          Hasil aktual dapat berbeda dari proyeksi.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-gold/20">
                    <CardHeader>
                      <CardTitle className="text-gold flex items-center">
                        <AlertTriangle className="mr-2 w-5 h-5" />
                        Risiko & Mitigasi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {project.risks.map((risk, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gold text-center mb-12">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedProjects.map((relatedProject) => {
                const relatedProgress = calculateProgress(relatedProject.raisedFunding, relatedProject.targetFunding);
                
                return (
                  <Card key={relatedProject.id} className="bg-black border border-gold/30 hover:border-gold/60 transition-all group">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-gold text-lg font-bold">{relatedProject.name}</CardTitle>
                      <div className="flex items-center text-white/70 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{relatedProject.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="space-y-3 mb-4">
                        <Progress value={relatedProgress} className="h-2 bg-gray-800">
                          <div 
                            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                            style={{ width: `${relatedProgress}%` }}
                          />
                        </Progress>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">{formatCurrency(relatedProject.raisedFunding)}</span>
                          <span className="text-gold font-bold">{relatedProgress}%</span>
                        </div>
                      </div>
                      <Link to={`/crowdfunding/${relatedProject.slug}`}>
                        <Button className="w-full bg-gold hover:bg-gold-light text-black font-semibold">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Tertarik dengan proyek ini?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openDanaMart} className="btn-gold">
              Join Business with DanaMart
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/crowdfunding">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                <ChevronLeft className="mr-2 w-4 h-4" />
                Back to Projects  
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrowdfundingDetail;