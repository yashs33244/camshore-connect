import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
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
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;