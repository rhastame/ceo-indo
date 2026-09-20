import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg font-playfair">G</span>
                </div>
                <h3 className="text-xl font-bold text-gradient-gold font-playfair">
                  Global CEO Indonesia
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                An exclusive association uniting Indonesia’s visionary leaders to drive sustainable business growth and advance the nation’s economy.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 gold-glow"
              >
                <Linkedin className="w-4 h-4 text-gold" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 gold-glow"
              >
                <Instagram className="w-4 h-4 text-gold" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-border/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 gold-glow"
              >
                <Twitter className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/csr-donation" className="text-muted-foreground hover:text-gold transition-colors duration-300">CSR Donation</a></li>
              <li><a href="/crowdfunding" className="text-muted-foreground hover:text-gold transition-colors duration-300">Crowdfunding</a></li>
              <li><a href="/articles" className="text-muted-foreground hover:text-gold transition-colors duration-300">Articles</a></li>
              <li><a href="/gallery" className="text-muted-foreground hover:text-gold transition-colors duration-300">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Address <br />
                    Jl. Pantai Indah Selatan Blok C19, RT.3/RW.3,<br />
                    Kamal Muara, Kecamatan Penjaringan,<br />
                    Jakarta Utara 14470
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <p className="text-muted-foreground text-sm">+62 811 9802 880</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <p className="text-muted-foreground text-sm">yayasan.ceo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Global CEO Indonesia. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;