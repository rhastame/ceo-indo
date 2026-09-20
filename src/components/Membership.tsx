import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Membership = () => {
  const membershipTiers = [
    {
      name: "Founder",
      price: "Rp 25,000,000",
      period: "Annual",
      description: "Exclusive founding member privileges",
      features: [
        "Lifetime membership recognition",
        "VIP access to all events",
        "Direct CEO mentorship program",
        "Executive boardroom access",
        "Annual business summit speaker slot",
        "Premium networking dinners",
        "International CEO exchange program"
      ],
      featured: false
    },
    {
      name: "Platinum",
      price: "Rp 15,000,000",
      period: "Annual",
      description: "Premium leadership experience",
      features: [
        "All CEO events & summits",
        "Monthly leadership workshops",
        "Business advisory sessions",
        "Priority networking access",
        "Digital leadership library",
        "Quarterly industry reports",
        "Regional CEO meetups"
      ],
      featured: true
    },
    {
      name: "Gold",
      price: "Rp 8,500,000",
      period: "Annual",
      description: "Essential CEO networking",
      features: [
        "Quarterly CEO gatherings",
        "Online leadership resources",
        "Industry networking events",
        "CEO directory access",
        "Monthly newsletters",
        "Business development sessions"
      ],
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the membership tier that best suits your leadership journey and business objectives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:scale-105 gold-glow ${
                tier.featured 
                  ? 'border-gold shadow-gold-glow scale-105' 
                  : 'border-border/20 hover:border-gold/50'
              } fade-in-up-delay-${index === 0 ? '1' : index === 1 ? '2' : '1'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold to-gold-light text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  tier.featured 
                    ? 'btn-gold' 
                    : 'btn-gold-outline'
                }`}
              >
                Choose {tier.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 fade-in-up-delay-2">
          <p className="text-muted-foreground mb-4">
            Need a custom membership plan for your organization?
          </p>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;