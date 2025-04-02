
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  
  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Stay Ahead with Weekly Insights</h2>
            <p className="section-subtitle">
              The Hustling Engineer newsletter covers practical strategies, industry trends, and technical leadership tips.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">What You'll Get:</h3>
              <ul className="space-y-3">
                {[
                  "Career acceleration frameworks",
                  "Technical leadership insights",
                  "Industry trends analysis",
                  "Salary negotiation strategies",
                  "Practical coding tips & resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-brand-teal mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-muted-foreground">
                  "I've been following Hemant's content for 6 months and it has completely
                  transformed how I approach my role as a senior developer."
                </p>
                <p className="font-medium mt-2 text-sm">— Tech Lead at Startup</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-dark flex items-center">
                <Mail className="mr-2 text-brand-blue" /> Subscribe Now
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <p className="font-medium text-lg">Thanks for subscribing!</p>
                  <p className="text-muted-foreground mt-2">
                    You'll be redirected to confirm your subscription.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? "Processing..." : "Subscribe to Newsletter"}
                  </button>
                  
                  <p className="text-xs text-muted-foreground text-center">
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
