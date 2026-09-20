import { Navigation } from "@/components/Navigation";
import Hero from "@/components/Hero";
//import Membership from "@/components/Membership";
import CEODirectory from "@/components/CEODirectory";
import Events from "@/components/Events";
import Quotes from "@/components/Quotes";
//import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Quotes />
      <CEODirectory />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
