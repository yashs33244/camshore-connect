import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Shield, ShieldCheck, ShieldAlert, Camera } from "lucide-react";

const products = [
  {
    title: "EcoWatch Pro",
    description: "Smart home surveillance with eco-friendly design",
    icon: Camera,
    features: ["360° Rotation", "Night Vision", "Motion Detection", "Mobile App Control"],
    image: "/lovable-uploads/cf90ff8f-4c4c-44d0-b1b3-1e6087e3f8c2.png",
    price: "$299.99"
  },
  {
    title: "SmartGuard Elite",
    description: "Enterprise-grade security monitoring",
    icon: ShieldCheck,
    features: ["4K Resolution", "AI Analytics", "Cloud Storage", "24/7 Support"],
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80",
    price: "$499.99"
  },
  {
    title: "SecureVision Pro",
    description: "Advanced facial recognition system",
    icon: Shield,
    features: ["Face Detection", "Temperature Sensing", "Access Control", "Instant Alerts"],
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80",
    price: "$399.99"
  },
  {
    title: "Guardian Series X",
    description: "Complete perimeter security solution",
    icon: ShieldAlert,
    features: ["Weather Resistant", "Two-Way Audio", "Remote Access", "Smart Integration"],
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80",
    price: "$599.99"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-[#F2FCE2] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Security Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of cutting-edge security products designed for modern homes and businesses.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <Card className="mx-2 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    {index === 0 && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-white/30 animate-pulse" />
                    )}
                  </div>
                  <CardHeader className="relative z-10 bg-white/95 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <product.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-gray-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white/95 backdrop-blur-sm">
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </CardContent>
                </Card>
                {index < products.length - 1 && (
                  <Separator orientation="vertical" className="absolute right-0 top-1/4 h-1/2 bg-gray-200" />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Products;