const Partners = () => {
  const partners = [
    { name: "Bank Mandiri", logo: "BM" },
    { name: "Telkom Indonesia", logo: "TI" },
    { name: "Pertamina", logo: "PT" },
    { name: "BCA", logo: "BCA" },
    { name: "Garuda Indonesia", logo: "GA" },
    { name: "Astra International", logo: "AI" },
    { name: "Sinar Mas", logo: "SM" },
    { name: "Lippo Group", logo: "LG" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Partners & Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly supported by Indonesia's leading corporations and industry pioneers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group bg-secondary/30 rounded-2xl p-8 border border-border/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 gold-glow fade-in-up-delay-${index % 2 === 0 ? '1' : '2'}`}
            >
              {/* Logo Placeholder */}
              <div className="flex items-center justify-center h-16 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {partner.logo}
                  </span>
                </div>
              </div>
              
              {/* Partner Name */}
              <h3 className="text-center text-foreground font-semibold text-sm group-hover:text-gold transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center bg-secondary/20 rounded-2xl p-12 border border-border/20 fade-in-up-delay-2">
          <h3 className="text-2xl font-bold text-gold mb-4">
            Become a Strategic Partner
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading Indonesian corporations in supporting the growth of our CEO community. 
            Partner with us to access exclusive networking opportunities and showcase your brand 
            to Indonesia's top business leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold">
              Partnership Opportunities
            </button>
            <button className="btn-gold-outline">
              Sponsorship Packages
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in-up-delay-1">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">200+</div>
            <p className="text-muted-foreground">Active CEO Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <p className="text-muted-foreground">Corporate Partners</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">25+</div>
            <p className="text-muted-foreground">Annual Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;