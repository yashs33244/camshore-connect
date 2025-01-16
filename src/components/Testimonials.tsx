import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Security Director, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content: "SecureVision has transformed our security infrastructure. The AI-powered surveillance system has reduced incidents by 75% and improved response times significantly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GlobalTech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "The integration was seamless, and the support team is exceptional. Our facilities have never been more secure and efficiently monitored.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Facility Manager, SafeSpace Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    content: "Outstanding product quality and customer service. The smart analytics have helped us prevent numerous security breaches before they occurred.",
    rating: 5
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide to deliver cutting-edge security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transitionDuration: '1000ms'
              }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;