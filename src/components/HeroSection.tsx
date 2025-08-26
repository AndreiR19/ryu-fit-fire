import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="text-white">RYU</span>{" "}
          <span className="text-primary bg-gradient-accent bg-clip-text text-transparent">
            FITNESS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your body, elevate your mind. Join the warriors who push beyond limits.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animate-glow-pulse hover-lift"
          >
            START YOUR JOURNEY
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold hover-lift"
          >
            EXPLORE PROGRAMS
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">5★</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;