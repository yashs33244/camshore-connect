import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Shield, ShieldCheck, ShieldAlert, Camera } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getIconComponent = (name: string) => {
    switch (name.toLowerCase()) {
      case 'camera':
        return Camera;
      case 'shield':
        return Shield;
      case 'shield-check':
        return ShieldCheck;
      default:
        return ShieldAlert;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse w-16 h-16 rounded-full bg-primary/20" />
      </div>
    );
  }

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
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <Card className="mx-2 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    {product.category === 'B2B' && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                        Enterprise
                      </div>
                    )}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-white/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="relative z-10 bg-white/95 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      {React.createElement(getIconComponent(product.name), { className: "h-6 w-6 text-primary" })}
                      <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
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
                      <span className="text-lg font-bold text-primary">${product.price}</span>
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