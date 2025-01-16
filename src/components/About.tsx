import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Shield, value: 10000, label: "Installations", prefix: "", suffix: "+" },
  { icon: Users, value: 50000, label: "Happy Clients", prefix: "", suffix: "+" },
  { icon: Award, value: 15, label: "Years Experience", prefix: "", suffix: "+" },
  { icon: Clock, value: 24, label: "Support", prefix: "", suffix: "/7" },
];

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const AnimatedNumber = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
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

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, isVisible]);
  
  return (
    <span className="text-3xl font-bold text-primary">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading the industry in innovative security solutions with a decade of excellence and trust.
          </p>
        </div>

        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="mb-2">
                  <AnimatedNumber 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;