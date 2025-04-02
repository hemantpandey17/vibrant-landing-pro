
import { Twitter, Linkedin, Youtube, Mail, Link2, ArrowRight } from "lucide-react";

const Connect = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      handle: "@thehustlingengineer",
      emoji: "🐦"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      handle: "hemantpandey",
      emoji: "👔"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      handle: "TheHustlingEngineer",
      emoji: "📺"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      handle: "hello@thehustlingengineer.com",
      emoji: "✉️"
    }
  ];

  return (
    <section id="connect" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title font-heading">
            Let's Connect 
            <span className="fun-highlight ml-2">🤝</span>
          </h2>
          <p className="section-subtitle font-sans">
            Follow me on social media for daily tips, insights, and updates.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <div key={index} className="feature-card flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2 group-hover:animate-bounce">{link.emoji}</div>
                <div className="bg-brand-light p-3 rounded-full mb-4">
                  {link.icon}
                </div>
                <h3 className="font-bold text-brand-dark font-heading">{link.name}</h3>
                <p className="text-sm text-muted-foreground font-sans">{link.handle}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-brand-dark text-white rounded-lg p-8 text-center">
            <div className="flex flex-col items-center">
              <Link2 className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-heading">Find All My Links in One Place ✨</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto font-sans">
                Access all my social profiles, resources, latest blog posts, and more from a single hub.
              </p>
              <a 
                href="https://linktr.ee/hemant.pandey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-brand-dark hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-200 inline-flex items-center font-heading"
              >
                Visit My Linktree <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
