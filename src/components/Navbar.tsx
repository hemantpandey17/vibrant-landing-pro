
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="font-heading font-bold text-2xl text-brand-dark">
            The Hustling Engineer
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#newsletter" className="text-gray-700 hover:text-brand-blue transition-colors">
              Newsletter
            </a>
            <a href="#mentorship" className="text-gray-700 hover:text-brand-blue transition-colors">
              Mentorship
            </a>
            <a href="#products" className="text-gray-700 hover:text-brand-blue transition-colors">
              Products
            </a>
            <a 
              href="https://thehustlingengineer.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="#newsletter" 
                className="text-gray-700 hover:text-brand-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Newsletter
              </a>
              <a 
                href="#mentorship" 
                className="text-gray-700 hover:text-brand-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentorship
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-brand-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="https://thehustlingengineer.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
