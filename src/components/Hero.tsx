import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Home, Shield, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const [segment, setSegment] = useState<"b2b" | "d2c">("b2b");
  const { toast } = useToast();

  useEffect(() => {
    console.log('Segment changed:', segment);
    
    toast({
      title: `Welcome to ${segment === 'b2b' ? 'Business' : 'Consumer'} Solutions`,
      description: segment === 'b2b' 
        ? "Discover enterprise-grade security solutions"
        : "Explore smart home security products",
    });
  }, [segment]);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received",
      description: "Our team will contact you shortly to schedule your demo.",
    });
  };

  return (
    <div className="pt-16 bg-gradient-to-br from-primary to-primary-light min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center text-white animate-fade-in">
          <div className="mb-8 flex gap-4 bg-white/10 p-2 rounded-full">
            <button
              onClick={() => setSegment("b2b")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                segment === "b2b"
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Building2 className="h-5 w-5" />
              Business
            </button>
            <button
              onClick={() => setSegment("d2c")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                segment === "d2c"
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Home className="h-5 w-5" />
              Consumer
            </button>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in">
            {segment === "b2b" 
              ? "Enterprise Security Solutions"
              : "Smart Home Security"
            }
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl animate-slide-in opacity-90">
            {segment === "b2b"
              ? "Comprehensive surveillance solutions for businesses of all sizes. Advanced analytics, seamless integration, and 24/7 support."
              : "Protect what matters most with our easy-to-use smart cameras. Professional-grade security for your home."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in">
            {segment === "b2b" ? (
              <>
                <Button size="lg" className="bg-white text-primary hover:bg-accent">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Contact Sales
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" className="bg-white text-primary hover:bg-accent">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Features
                </Button>
              </>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Shield className="h-8 w-8 mb-4 mx-auto text-accent" />
              <h3 className="text-lg font-semibold mb-2">Advanced Security</h3>
              <p className="text-sm opacity-80">Enterprise-grade encryption and protection for your data</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Users className="h-8 w-8 mb-4 mx-auto text-accent" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm opacity-80">Round-the-clock technical assistance and monitoring</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Building2 className="h-8 w-8 mb-4 mx-auto text-accent" />
              <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-sm opacity-80">Flexible systems that grow with your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
