import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Metrics />
      <Navigation />
      <Hero />
    </div>
  );
};

export default Index;