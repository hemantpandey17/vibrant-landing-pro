
import { Users, Calendar, FileText, ArrowRight, Star } from "lucide-react";

const Mentorship = () => {
  const mentorshipFeatures = [
    {
      icon: <Users className="w-10 h-10 text-brand-blue" />,
      title: "1:1 Coaching",
      description: "Personalized guidance tailored to your career goals and challenges.",
      emoji: "👥"
    },
    {
      icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      title: "Flexible Sessions",
      description: "Book sessions that fit your schedule, from quick calls to deep dives.",
      emoji: "📅"
    },
    {
      icon: <FileText className="w-10 h-10 text-brand-blue" />,
      title: "Resume Reviews",
      description: "Get expert feedback on your resume to stand out to top employers.",
      emoji: "📝"
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title font-heading">
            Accelerate Your Growth with Mentorship 
            <span className="fun-highlight ml-2">⚡</span>
          </h2>
          <p className="section-subtitle font-sans">
            Get personalized guidance to navigate your tech career challenges and opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mentorshipFeatures.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-2 text-4xl group-hover:animate-bounce">{feature.emoji}</div>
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark font-heading">{feature.title}</h3>
              <p className="text-muted-foreground font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-brand-light rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2 font-heading flex items-center">
                Ready to level up? <Star className="ml-2 text-yellow-500 animate-pulse" />
              </h3>
              <p className="text-muted-foreground font-sans">
                Book a mentorship session to discuss your career goals and challenges.
              </p>
            </div>
            <a 
              href="https://topmate.io/hemant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap font-heading"
            >
              Book a Session <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
