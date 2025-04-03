
import { Button } from "@/components/ui/button";
import Testimonial from "@/components/Testimonial";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

const Newsletter = () => {
  const features = [
    "Career advancement strategies for engineers 🧠",
    "Productivity hacks and tools for developers ⚡",
    "Tech industry trends and opportunities 📊",
    "Coding tips and resources to level up 💻",
    "Exclusive interviews with successful engineers 🎙️"
  ];

  const testimonials = [
    {
      quote: "The best tech newsletter I've subscribed to. Every issue has at least one tip I can immediately apply to my work.",
      author: "Sarah Williams",
      role: "Full Stack Developer",
      initials: "SW"
    },
    {
      quote: "I've recommended this newsletter to my entire team. It's that good!",
      author: "David Park",
      role: "Engineering Manager",
      initials: "DP"
    },
    {
      quote: "Reading this newsletter has become my Sunday ritual. Always insightful!",
      author: "Jasmine Taylor",
      role: "DevOps Engineer",
      initials: "JT"
    }
  ];

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            The <span className="fun-title">Weekly Digest</span> Engineers Love
          </h2>
          <p className="section-subtitle">
            Join thousands of engineers who get actionable advice delivered straight to their inbox every Sunday. <span className="emoji-bullet">📧</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-muted rounded-lg p-8 mb-8 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Mail className="text-brand-teal mr-3" size={24} />
                <h3 className="text-2xl font-bold font-heading">What You'll Get</h3>
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-brand-teal mt-1 mr-3 flex-shrink-0" size={18} />
                    <p className="font-sans">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <Testimonial testimonials={testimonials} />
          </div>
          
          <div className="bg-gradient-to-br from-brand-light to-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-heading mb-6">Ready to accelerate your career?</h3>
            <p className="mb-8 text-muted-foreground font-sans">
              Join <span className="font-fun text-brand-teal">5,000+</span> engineers who are already getting value every week. The newsletter is free, and you can unsubscribe anytime!
            </p>
            <div className="text-center">
              <a 
                href="https://thehustlingengineer.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full mb-4 group"
              >
                Subscribe Now 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-muted-foreground font-sans">
                No spam, ever. <span className="emoji-bullet">🔒</span> Your email stays private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
