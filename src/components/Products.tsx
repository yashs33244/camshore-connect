import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, ShieldCheck, ShieldAlert, Camera } from "lucide-react";

const products = [
  {
    title: "Pro Series CCTV",
    description: "Enterprise-grade surveillance with 4K resolution",
    icon: Camera,
    features: ["4K Ultra HD", "Night Vision", "AI Detection", "Cloud Storage"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "SmartGuard System",
    description: "Intelligent security monitoring solution",
    icon: ShieldCheck,
    features: ["Smart Analytics", "Mobile Access", "24/7 Monitoring", "Instant Alerts"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "SecureVision Elite",
    description: "Advanced facial recognition and tracking",
    icon: Shield,
    features: ["Facial Recognition", "Motion Tracking", "Temperature Sensing", "Access Control"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Guardian Series",
    description: "Complete perimeter security solution",
    icon: ShieldAlert,
    features: ["360° Coverage", "Weather Resistant", "Two-Way Audio", "Remote Access"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of security solutions designed for both businesses and consumers.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="mx-2 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <product.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Products;