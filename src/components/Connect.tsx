
import { Linkedin, Instagram, Twitter, Link2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Connect = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-light" id="connect">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Let's <span className="fun-title">Connect</span>
          </h2>
          <p className="section-subtitle">
            Follow me on social media for daily tips, updates, and inspiration! <span className="emoji-bullet">🌟</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <a 
            href="https://www.linkedin.com/in/hemant-pandey/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card bg-white hover:bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            aria-label="LinkedIn"
          >
            <div className="bg-[#0077B5]/10 p-4 rounded-full mb-4">
              <Linkedin size={32} className="text-[#0077B5]" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center mb-3">Professional updates & career insights</p>
            <Badge variant="outline" className="group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
              Connect
            </Badge>
          </a>
          
          <a 
            href="https://instagram.com/hemant_careerbytes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card bg-white hover:bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            aria-label="Instagram"
          >
            <div className="bg-[#E4405F]/10 p-4 rounded-full mb-4">
              <Instagram size={32} className="text-[#E4405F]" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Instagram</h3>
            <p className="text-sm text-muted-foreground text-center mb-3">Behind-the-scenes & visual content</p>
            <Badge variant="outline" className="group-hover:bg-[#E4405F] group-hover:text-white transition-colors">
              Follow
            </Badge>
          </a>
          
          <a 
            href="https://x.com/hemant_pandey17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card bg-white hover:bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            aria-label="Twitter"
          >
            <div className="bg-[#1DA1F2]/10 p-4 rounded-full mb-4">
              <Twitter size={32} className="text-[#1DA1F2]" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Twitter</h3>
            <p className="text-sm text-muted-foreground text-center mb-3">Tech news & quick thoughts</p>
            <Badge variant="outline" className="group-hover:bg-[#1DA1F2] group-hover:text-white transition-colors">
              Follow
            </Badge>
          </a>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6 mx-auto w-16 h-16 opacity-80">
            <img 
              src="/lovable-uploads/d1b81618-2329-48a4-b7d2-56ac7de57c1b.png" 
              alt="The Hustling Engineer Logo" 
              className="w-full h-full object-contain"
            />
          </div>
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
