import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="programs">
          <ServicesSection />
        </section>
        
        <section id="membership">
          <MembershipSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gym-gray-light py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-black">
              <span className="text-white">RYU</span>
              <span className="text-primary ml-1">FITNESS</span>
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Transform your body, elevate your mind.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Ryu Fitness. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
