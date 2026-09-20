const Quotes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-card via-secondary/20 to-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="mb-8 fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">"</span>
            </div>
          </div>

          {/* Main Quote */}
          <div className="mb-12 fade-in-up-delay-1">
            <blockquote className="text-2xl md:text-4xl font-light text-foreground leading-relaxed font-playfair">
              "Together, we don’t just lead companies, 
              <span className="text-gradient-gold font-semibold">
                {" "}we help lead the nation’s future.
              </span>"
            </blockquote>
          </div>

          {/* Attribution */}
          <div className="fade-in-up-delay-2">
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6" />
            <p className="text-gold font-semibold text-lg">
              Global CEO Indonesia Community
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              FOR A BETTER INDONESIA
            </p>
          </div>

          {/* Supporting Text */}
          <div className="mt-16 max-w-2xl mx-auto fade-in-up-delay-1">
            <p className="text-muted-foreground leading-relaxed">
              As Indonesian business leaders, we bear responsibility not only to our own enterprises but also to the country’s economic progress and people’s well-being. Together, we create sustainable impact for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;