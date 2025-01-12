import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">SecureVision</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-primary">Products</a>
            <a href="#solutions" className="text-gray-600 hover:text-primary">Solutions</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <Button variant="outline" className="mr-2">Request Demo</Button>
            <Button>Shop Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-600 hover:text-primary px-4">Products</a>
              <a href="#solutions" className="text-gray-600 hover:text-primary px-4">Solutions</a>
              <a href="#about" className="text-gray-600 hover:text-primary px-4">About</a>
              <Button variant="outline" className="mx-4 mb-2">Request Demo</Button>
              <Button className="mx-4">Shop Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;