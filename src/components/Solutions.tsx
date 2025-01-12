import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Shield, Users } from "lucide-react";

const solutions = [
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions for large organizations",
    icon: Building2,
    features: [
      "Multi-location monitoring",
      "Advanced analytics dashboard",
      "Custom integration options",
      "24/7 technical support"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Home Protection",
    description: "Smart security systems for residential properties",
    icon: Home,
    features: [
      "Easy mobile control",
      "Motion detection alerts",
      "Night vision cameras",
      "Video doorbell integration"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Small Business",
    description: "Tailored security packages for small businesses",
    icon: Shield,
    features: [
      "Affordable packages",
      "Easy installation",
      "Remote monitoring",
      "Cloud storage"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Property Management",
    description: "Multi-unit property surveillance solutions",
    icon: Users,
    features: [
      "Centralized management",
      "Access control",
      "Visitor tracking",
      "Emergency response"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored security solutions to meet the unique needs of every client, from homes to enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <solution.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;