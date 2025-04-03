
import { Button } from "@/components/ui/button";
import Testimonial from "@/components/Testimonial";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const testimonials = [
    {
      quote: "The Hustling Engineer newsletter has been a game-changer for my tech career! Practical advice that actually works.",
      author: "Alex Johnson",
      role: "Senior Developer",
      initials: "AJ"
    },
    {
      quote: "As a junior developer, this newsletter has given me the exact roadmap I needed to grow. Highly recommend!",
      author: "Priya Singh",
      role: "Junior Developer",
      initials: "PS"
    },
    {
      quote: "Finally found career advice that's specific to engineers! Love the actionable tips in every issue.",
      author: "Marco Chen",
      role: "Tech Lead",
      initials: "MC"
    }
  ];

  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Level Up Your <span className="fun-title">Engineering Career</span> With Weekly Insights ✨
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Join <span className="fun-highlight">5,000+</span> engineers who receive practical career advice, productivity hacks, and industry insights every Sunday. <span className="emoji-bullet">🚀</span> No fluff, just value!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://thehustlingengineer.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Subscribe Now <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#newsletter" 
                className="btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-5/12 rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src="/lovable-uploads/f60fa699-511b-4f4f-9bbe-344397f2a3cf.png" 
                alt="The Hustling Engineer Newsletter" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full max-w-sm">
                <Testimonial testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
