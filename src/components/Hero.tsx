import { Button } from "@/components/ui/button";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import heroJakarta from "@/assets/hero-jakarta-night.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Crossfade Background Images */}
      <div className="absolute inset-0">
        {/* Background Image 1 - Boardroom */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-crossfade"
          style={{ 
            backgroundImage: `url(${heroBoardroom})`,
            animationDelay: '0s'
          }}
        />
        
        {/* Background Image 2 - Jakarta Night */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-crossfade opacity-0"
          style={{ 
            backgroundImage: `url(${heroJakarta})`,
            animationDelay: '2s'
          }}
        />
        
        {/* Background Image 3 - Office */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-crossfade opacity-0"
          style={{ 
            backgroundImage: `url(${heroOffice})`,
            animationDelay: '4s'
          }}
        />
        
        {/* Background Image 4 - Meeting */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-crossfade opacity-0"
          style={{ 
            backgroundImage: `url(${heroMeeting})`,
            animationDelay: '6s'
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        
        {/* Gold Particle Shimmer Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-30 animate-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
          
          {/* Subtle shimmer effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent transform -skew-x-12" 
               style={{ 
                 animation: 'shimmer 8s ease-in-out infinite',
               }} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <Avatar className="h-[310px] w-[310px] rounded-xl">
              <AvatarImage src="/logo.png" alt="Global CEO Indonesia" className="object-contain" />
              <AvatarFallback className="bg-transparent" />
            </Avatar>
          </div>
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-gold mb-4 font-montserrat">
              Global CEO
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-white font-montserrat">
              Indonesia
            </h2>
          </div>
          
          {/* Tagline */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              FOR A BETTER INDONESIA
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6 animate-glow" />
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-gold hover:bg-gold-light text-black font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-300 hover:animate-glow hover:scale-105 shadow-lg hover:shadow-xl">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;