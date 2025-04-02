
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/f60fa699-511b-4f4f-9bbe-344397f2a3cf.png" 
              alt="The Hustling Engineer Logo" 
              className="h-12 w-12 mr-3"
            />
            <div>
              <h2 className="text-2xl font-bold font-heading">The Hustling Engineer</h2>
              <p className="text-gray-400 mt-2">
                Helping engineers excel in their tech careers.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full mb-4 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The Hustling Engineer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
