import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Provincial Leadership", href: "/provincial-leadership" },
  { name: "International Leadership", href: "/international-leadership" },
  { name: "CEO Directory", href: "/ceo-directory" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact" },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ item, mobile = false }: { item: typeof navigationItems[0]; mobile?: boolean }) => {
    const active = isActive(item.href);
    
    return (
      <Link
        to={item.href}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={cn(
          "relative px-4 py-2 text-sm font-medium transition-all duration-300 group",
          "hover:text-gold",
          active 
            ? "text-gold font-bold" 
            : "text-foreground",
          mobile && "block text-lg py-4 border-b border-border/20"
        )}
      >
        {item.name}
        
        {/* Hover underline with glow effect */}
        <span 
          className={cn(
            "absolute bottom-0 left-4 right-4 h-0.5 bg-gold transition-all duration-300 transform origin-left",
            "group-hover:animate-glow",
            active 
              ? "scale-x-100 animate-glow" 
              : "scale-x-0 group-hover:scale-x-100"
          )}
        />
        
        {/* Subtle glow on hover */}
        <span 
          className={cn(
            "absolute inset-0 rounded transition-all duration-300 opacity-0",
            "group-hover:opacity-100 group-hover:bg-gold/5"
          )}
        />
      </Link>
    );
  };

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-background/80 backdrop-blur-md border-b",
          isLoaded ? "animate-slide-down" : "opacity-0 -translate-y-full",
          isScrolled 
            ? "shadow-lg border-gold/40 py-3" 
            : "border-gold/20 py-4"
        )}
        style={{
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 0 hsl(var(--gold) / 0.3)' : undefined
        }}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Avatar className="h-12 w-12 rounded-xl">
              <AvatarImage src="/minilogo.png" alt="Global CEO Indonesia" />
              <AvatarFallback className="bg-transparent"> </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <h1 className="ml-3 text-xl font-bold font-montserrat text-foreground group-hover:text-gold transition-colors duration-300">
                Global CEO Indonesia
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors duration-300 group"
            aria-label="Toggle mobile menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
              <span className="absolute inset-0 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-gold/10" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-card border-l border-gold/20 transform transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <h2 className="text-lg font-bold font-montserrat text-foreground">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-gold transition-colors duration-300 group"
            >
              <X className="h-5 w-5" />
              <span className="absolute inset-0 rounded transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-gold/10" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <nav className="p-6 space-y-2">
            {navigationItems.map((item) => (
              <NavLink key={item.name} item={item} mobile />
            ))}
          </nav>
          
          {/* Drawer Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/20">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">FOR A BETTER INDONESIA</p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto animate-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className={cn("transition-all duration-300", isScrolled ? "h-16" : "h-20")}></div>
    </>
  );
};