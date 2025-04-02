
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
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
          
          <div className="bg-muted rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground italic">
              "Hemant's insights have been game-changing for my career development. His newsletter is a must-read for any ambitious engineer."
            </p>
            <p className="font-medium mt-2">— Engineering Manager at FAANG</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
