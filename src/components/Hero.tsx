
import { ArrowRight } from "lucide-react";
import Testimonial from "./Testimonial";

const Hero = () => {
  const testimonials = [
    {
      quote: "Hemant's insights have been game-changing for my career development. His newsletter is a must-read for any ambitious engineer.",
      author: "Engineering Manager",
      role: "at FAANG"
    },
    {
      quote: "The frameworks shared in this newsletter helped me land my dream role. Incredibly practical and actionable content.",
      author: "Senior Developer",
      role: "at Startup"
    },
    {
      quote: "I've doubled my salary in 18 months using the negotiation tactics I learned from The Hustling Engineer.",
      author: "Tech Lead",
      role: "at Fortune 500"
    }
  ];

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-32 h-32">
            <img 
              src="/lovable-uploads/f60fa699-511b-4f4f-9bbe-344397f2a3cf.png" 
              alt="The Hustling Engineer Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-dark mb-6 max-w-5xl leading-tight">
            Level Up Your Tech Career With 
            <span className="text-brand-blue"> Proven Strategies</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Join thousands of engineers who receive weekly insights on career growth, 
            technical leadership, and proven frameworks to excel in the tech industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="https://thehustlingengineer.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe to Newsletter <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#mentorship" 
              className="btn-outline"
            >
              Explore Mentorship
            </a>
          </div>
          
          <Testimonial testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
