
import { Mail, CheckCircle, Star, Zap, Heart, Brain, Sparkles } from "lucide-react";
import { useState } from "react";
import Testimonial from "./Testimonial";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const testimonials = [
    {
      quote: "I've been following Hemant's content for 6 months and it has completely transformed how I approach my role as a senior developer.",
      author: "Tech Lead",
      role: "at Startup"
    },
    {
      quote: "The weekly newsletter is packed with practical advice I can immediately apply to my work. Invaluable resource!",
      author: "Product Engineer",
      role: "at Scale-up"
    },
    {
      quote: "From junior to senior in two years following the roadmap shared in this newsletter. Can't recommend it enough.",
      author: "Senior Engineer",
      role: "at HealthTech Company"
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - in real app would send to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      
      // Redirect to Substack
      window.open("https://thehustlingengineer.substack.com", "_blank");
    }, 1000);
  };

  const benefits = [
    { icon: <Star className="text-yellow-500" />, text: "Career acceleration frameworks"},
    { icon: <Zap className="text-orange-500" />, text: "Technical leadership insights"},
    { icon: <Sparkles className="text-purple-500" />, text: "Industry trends analysis"},
    { icon: <Heart className="text-pink-500" />, text: "Salary negotiation strategies"},
    { icon: <Brain className="text-green-500" />, text: "Practical coding tips & resources"}
  ];
  
  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title font-heading">
              Stay Ahead with Weekly Insights 
              <span className="fun-highlight ml-2">🚀</span>
            </h2>
            <p className="section-subtitle font-sans">
              The Hustling Engineer newsletter covers practical strategies, industry trends, and technical leadership tips.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark font-heading">What You'll Get:</h3>
              <ul className="space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="emoji-bullet group-hover:animate-wiggle mt-1">{item.icon}</span>
                    <span className="font-sans">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Testimonial testimonials={testimonials} />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-dark flex items-center font-heading">
                <Mail className="mr-2 text-brand-blue" /> Subscribe Now ✉️
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <p className="font-medium text-lg font-heading">Thanks for subscribing! 🎉</p>
                  <p className="text-muted-foreground mt-2 font-sans">
                    You'll be redirected to confirm your subscription.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-sans">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue font-sans"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary font-heading"
                  >
                    {isSubmitting ? "Processing..." : "Subscribe to Newsletter ✨"}
                  </button>
                  
                  <p className="text-xs text-muted-foreground text-center font-sans">
                    You'll be redirected to confirm your subscription on Substack.
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
