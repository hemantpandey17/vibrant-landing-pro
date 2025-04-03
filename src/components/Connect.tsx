
import { Button } from "@/components/ui/button";
import { Link2, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Connect = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Let's <span className="fun-title">Connect</span> & Grow Together
          </h2>
          <p className="section-subtitle">
            Follow me on social media for daily tips, updates, and inspiration. <span className="emoji-bullet">🌟</span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 text-[#1DA1F2] p-4 rounded-full shadow-md transition-transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={28} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 text-[#0077B5] p-4 rounded-full shadow-md transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 text-[#E4405F] p-4 rounded-full shadow-md transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Find All My Links in One Place</h3>
          <p className="text-muted-foreground mb-6 font-sans">
            Access all my social profiles, websites, and content platforms from a single hub. <span className="emoji-bullet">🔗</span>
          </p>
          <a 
            href="https://linktr.ee/hemant.pandey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Link2 size={18} className="mr-2" />
            Visit My Linktree
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
