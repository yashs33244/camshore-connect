import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Metrics from "@/components/Metrics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Metrics />
      <Navigation />
      <Hero />
      <Products />
      <Solutions />
      <About />
    </div>
  );
};

export default Index;