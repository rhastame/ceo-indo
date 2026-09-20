import React from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Flag } from 'lucide-react';

interface LeadershipCard {
  country: string;
  ketua: string;
  sekretaris?: string;
  flagEmoji: string;
}

const InternationalLeadership = () => {
  const leadership: LeadershipCard[] = [
    {
      country: "Australia",
      ketua: "Johny Gunawan",
      sekretaris: "Susan",
      flagEmoji: "🇦🇺"
    },
    {
      country: "China",
      ketua: "Frans Tairas",
      flagEmoji: "🇨🇳"
    },
    {
      country: "Canada",
      ketua: "Robert Tjandra",
      flagEmoji: "🇨🇦"
    },
    {
      country: "India",
      ketua: "Manish Gidwani",
      flagEmoji: "🇮🇳"
    },
    {
      country: "Malaysia",
      ketua: "Frankie Ridzal",
      flagEmoji: "🇲🇾"
    },
    {
      country: "Singapore",
      ketua: "Boediman Widjaja",
      flagEmoji: "🇸🇬"
    },
    {
      country: "USA",
      ketua: "Rachmad Poetranto",
      flagEmoji: "🇺🇸"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent">
            <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-gold opacity-30" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              International Leadership
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium">
              Pengurus CEO Indonesia Luar Negeri
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={index}
                className="bg-black border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group"
              >
                <CardContent className="p-6 relative">
                  {/* Country Flag */}
                  <div className="absolute top-4 left-4 text-2xl">
                    {leader.flagEmoji}
                  </div>
                  
                  {/* Country Name */}
                  <div className="text-center mb-6 pt-8">
                    <h3 className="text-2xl font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
                      {leader.country}
                    </h3>
                  </div>

                  {/* Leadership Info */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-gold font-bold text-lg mb-1">Ketua</p>
                      <p className="text-white text-base">{leader.ketua}</p>
                    </div>
                    
                    {leader.sekretaris && (
                      <div>
                        <p className="text-gold font-semibold text-base mb-1">Sekretaris</p>
                        <p className="text-white text-base">{leader.sekretaris}</p>
                      </div>
                    )}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gold gold-glow">
              Dari Indonesia untuk dunia — bersama kita membangun jejaring global para CEO.
            </p>
          </div>
        </div>
        
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalLeadership;