import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8" />
              <span className="text-xl font-bold">SecureVision</span>
            </div>
            <p className="text-gray-300">
              Leading provider of advanced security solutions for businesses and homes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-accent transition-colors">Products</a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-accent transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@securevision.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@securevision.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-gray-300">
                  123 Security Ave, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest security updates and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
              />
              <Button className="w-full bg-accent hover:bg-accent-light text-primary font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-300">
          <p>© 2024 SecureVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;