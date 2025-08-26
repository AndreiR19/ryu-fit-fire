import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "WARRIOR",
    price: "29",
    period: "month",
    description: "Perfect for fitness beginners",
    features: [
      "Gym access during business hours",
      "Basic equipment usage",
      "Locker room access",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "CHAMPION", 
    price: "49",
    period: "month",
    description: "Most popular choice",
    features: [
      "24/7 gym access",
      "All equipment & classes",
      "Guest passes (2/month)",
      "Personal training consultation",
      "Nutrition guidance"
    ],
    popular: true
  },
  {
    name: "LEGEND",
    price: "89", 
    period: "month",
    description: "Ultimate fitness experience",
    features: [
      "Everything in Champion",
      "Unlimited guest passes",
      "Personal training sessions (4/month)",
      "Recovery services access",
      "Priority booking",
      "Exclusive member events"
    ],
    popular: false
  }
];

const MembershipSection = () => {
  return (
    <section className="py-20 px-4 bg-gym-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">CHOOSE YOUR</span>{" "}
            <span className="text-primary">PATH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the membership that fits your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative gradient-card border-gym-gray-light hover-lift p-8 text-center animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-black text-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 animate-glow-pulse' 
                    : 'bg-secondary hover:bg-secondary/90'
                } hover-lift`}
                size="lg"
              >
                JOIN {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;