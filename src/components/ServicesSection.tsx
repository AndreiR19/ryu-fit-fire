import { Card } from "@/components/ui/card";
import { Dumbbell, Users, Trophy, Zap } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "State-of-the-art equipment for building raw power and muscle mass.",
  },
  {
    icon: Zap,
    title: "HIIT Classes", 
    description: "High-intensity workouts designed to maximize fat burn and endurance.",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals and needs.",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    description: "Professional guidance for bodybuilding and powerlifting competitions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">ELITE</span>{" "}
            <span className="text-primary">PROGRAMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to greatness with our specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="gradient-card border-gym-gray-light hover-lift p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;