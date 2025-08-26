import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">JOIN THE</span>{" "}
            <span className="text-primary">REVOLUTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your transformation? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <Card className="gradient-card border-gym-gray-light p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-muted-foreground">123 Fitness Street, Warrior District</p>
                </div>
              </div>
            </Card>

            <Card className="gradient-card border-gym-gray-light p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) RYU-FITS</p>
                </div>
              </div>
            </Card>

            <Card className="gradient-card border-gym-gray-light p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-muted-foreground">info@ryufitness.com</p>
                </div>
              </div>
            </Card>

            <Card className="gradient-card border-gym-gray-light p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Hours</h3>
                  <p className="text-muted-foreground">24/7 Access for Members</p>
                  <p className="text-sm text-muted-foreground">Staff: Mon-Fri 6AM-10PM</p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="gradient-card border-gym-gray-light p-8 text-center shadow-card">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take the first step towards your fitness goals. Join hundreds of warriors 
                who have already started their transformation journey at Ryu Fitness.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 animate-glow-pulse hover-lift"
                >
                  START FREE TRIAL
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-black hover-lift"
                >
                  SCHEDULE TOUR
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gym-gray-light">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Free 7-day trial</strong> • No commitment • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;