
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MessageCircle, Video } from "lucide-react";

const Mentorship = () => {
  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-brand-teal" />,
      title: "1:1 Coaching Sessions",
      description: "Schedule personal mentorship calls tailored to your specific career goals and challenges."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-brand-teal" />,
      title: "Unlimited Text Advice",
      description: "Get ongoing guidance through text-based communication for quick questions and feedback."
    },
    {
      icon: <Video className="h-6 w-6 text-brand-teal" />,
      title: "Resume & Portfolio Review",
      description: "Receive detailed feedback on your resume, portfolio, and professional profiles."
    }
  ];

  return (
    <section id="mentorship" className="py-16 md:py-24 bg-gradient-to-b from-brand-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="fun-title">Personalized Mentorship</span> for Engineers
          </h2>
          <p className="section-subtitle">
            Skip years of trial and error with 1:1 guidance from someone who's been there. <span className="emoji-bullet">🧠</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold font-heading mb-6">How can mentorship help you?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-muted rounded-md">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground font-sans">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:text-left">
              <a 
                href="https://topmate.io/hemant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                Book a Session <ExternalLink size={18} className="ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-brand-blue text-white text-sm font-bold py-1 px-3 rounded-full shadow-md animate-bounce">
                Limited Slots!
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">What mentees are saying</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-teal pl-4 italic">
                  <p className="mb-2 text-muted-foreground font-sans">"Hemant helped me prepare for tech interviews and I landed a job at my dream company. His guidance was practical and specific to my goals."</p>
                  <p className="font-bold font-sans">— Ravi K., Software Engineer</p>
                </div>
                <div className="border-l-4 border-brand-blue pl-4 italic">
                  <p className="mb-2 text-muted-foreground font-sans">"The career roadmap we developed together has been my north star. Whenever I feel lost, I go back to it for direction."</p>
                  <p className="font-bold font-sans">— Ananya S., Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
