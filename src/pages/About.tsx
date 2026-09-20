import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-background py-20 border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Global CEO Indonesia – FOR A BETTER INDONESIA
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h2 className="text-3xl font-bold text-gradient-gold mb-6">Our History</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span className="text-gradient-gold font-semibold">The Indonesian CEO Community began as a gathering of Directors and Commissioners in 2016</span>, 
                  comprising people of diverse ethnicities, religions, and backgrounds. United by a shared vision and mission, 
                  we collaborate for the nation’s progress. By the end of 2024, membership reached <span className="text-gradient-gold font-semibold">3,000</span> individuals under 
                  the umbrella of the <span className="text-gradient-gold font-semibold">Global CEO Indonesia Foundation</span>.
                </p>
              </div>
              <div className="fade-in-up-delay-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-gold/10 to-gold-light/10 rounded-full flex items-center justify-center border-2 border-gold/20">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <Star className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient-gold mb-12 text-center">Vision & Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="fade-in-up">
                <div className="bg-gradient-to-br from-gold/10 to-gold-light/10 p-8 rounded-2xl border border-gold/20 gold-glow">
                  <h3 className="text-2xl font-bold text-gold mb-4">Visi</h3>
                  <p className="text-muted-foreground leading-relaxed italic text-lg">
                    "To become an association of Directors and Commissioners that embodies Bhinneka Tunggal Ika (Unity in Diversity), 
                    fostering independent and creative entrepreneurship for the advancement of the Indonesian nation and state, 
                    so that we can compete on the international stage."
                  </p>
                </div>
              </div>
              
              {/* Mission */}
              <div className="fade-in-up-delay-1">
                <h3 className="text-2xl font-bold text-gold mb-6">Misi</h3>
                <div className="space-y-4">
                  {[
                    "Synergize stakeholders (government, professionals, entrepreneurs, and others).",
                    "Create entrepreneurial opportunities and open new jobs.",
                    "Provide entrepreneurship training and education for the nation’s progress.",
                    "Optimize Indonesian entrepreneurs’ competitive advantages in global competition.",
                    "Help support the successful implementation of government programs."
                  ].map((mission, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gradient-gold mb-12">CEO Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">C</span>
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Creative</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encouraging innovative thinking and new ideas to drive sustainable business growth.
                </p>
              </div>
              
              <div className="text-center fade-in-up-delay-1">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">E</span>
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strengthening leaders and members to achieve their full potential and positive impact.
                </p>
              </div>
              
              <div className="text-center fade-in-up-delay-2">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">O</span>
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Optimistic</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building a confident outlook towards the future of Indonesia's economy and leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-gold-light/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-gradient-gold italic leading-relaxed">
              "Together, we are not just leading companies, but also the future of the nation."
            </blockquote>
            <div className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;