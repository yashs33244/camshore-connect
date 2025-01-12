import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Home } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const [segment, setSegment] = useState<"b2b" | "d2c">("b2b");
  const { toast } = useToast();

  useEffect(() => {
    // Track segment changes
    console.log('Segment changed:', segment);
    
    // Show a welcome message based on segment
    toast({
      title: `Welcome to ${segment === 'b2b' ? 'Business' : 'Consumer'} Solutions`,
      description: segment === 'b2b' 
        ? "Discover enterprise-grade security solutions"
        : "Explore smart home security products",
    });
  }, [segment]);

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
        </div>
      </div>
    </div>
  );
};

export default Hero;