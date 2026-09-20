const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              About Global CEO Indonesia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8" />
          </div>
          
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="fade-in-up-delay-1">
              <div className="bg-secondary/50 p-8 rounded-2xl border border-border/20 gold-glow">
                <h3 className="text-2xl font-bold text-gold mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the premier platform that unites and empowers CEOs across Indonesia, 
                  fostering collaborative leadership that drives national economic growth and 
                  sustainable business excellence.
                </p>
              </div>
            </div>
            
            <div className="fade-in-up-delay-2">
              <div className="bg-secondary/50 p-8 rounded-2xl border border-border/20 gold-glow">
                <h3 className="text-2xl font-bold text-gold mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating an exclusive network where visionary leaders share insights, 
                  build strategic partnerships, and collectively shape Indonesia's 
                  future through innovative business practices and ethical leadership.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values - CEO */}
          <div className="fade-in-up-delay-1 mb-16">
            <h3 className="text-2xl font-bold text-gradient-gold mb-8">CEO Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">C</span>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Creative</h4>
                <p className="text-sm text-muted-foreground">Encouraging innovative thinking and new ideas to drive sustainable business growth</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">E</span>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Empowerment</h4>
                <p className="text-sm text-muted-foreground">Strengthening leaders and members to achieve their full potential and make a positive impact</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">O</span>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Optimistic</h4>
                <p className="text-sm text-muted-foreground">Building a confident outlook towards the future of Indonesia's economy and leadership</p>
              </div>
            </div>
          </div>
          
          {/* Vision & Mission */}
          <div className="fade-in-up-delay-2">
            <h3 className="text-3xl font-bold text-gradient-gold mb-12 text-center">Vision & Mission</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div>
                <div className="bg-gradient-to-br from-gold/10 to-gold-light/10 p-8 rounded-2xl border border-gold/20 gold-glow">
                  <h4 className="text-xl font-bold text-gold mb-4">Visi</h4>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Menjadi perhimpunan Direktur dan Komisaris yang ber-Bhineka Tunggal Ika, 
                    untuk membangun kewirausahaan yang mandiri, kreatif bagi kemajuan Bangsa dan 
                    Negara Indonesia sehingga mampu bersaing di kancah Internasional."
                  </p>
                </div>
              </div>
              
              {/* Mission */}
              <div>
                <h4 className="text-xl font-bold text-gold mb-6">Misi</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">1</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bersinergi para stakeholder (pemerintah, profesional, pengusaha, dan unsur lainnya).
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">2</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Menciptakan peluang kewirausahaan dan membuka lapangan pekerjaan.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">3</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Memberikan pelatihan & pendidikan kewirausahaan untuk kemajuan bangsa dan negara.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">4</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Optimalisasi keunggulan kompetitif wirausaha Indonesia dalam persaingan global.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary-foreground">5</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Membantu mensukseskan program-program pemerintah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;