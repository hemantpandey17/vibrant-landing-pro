
import { BookOpen, Star, Download, ArrowRight, Heart } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Tech Career Playbook",
      description: "The ultimate guide to navigating and accelerating your tech career journey.",
      price: "$29",
      features: ["Career planning templates", "Promotion frameworks", "Negotiation scripts"],
      emoji: "📚"
    },
    {
      title: "System Design Essentials",
      description: "Master the fundamentals of designing scalable and resilient systems.",
      price: "$39",
      features: ["10+ detailed case studies", "Architecture patterns", "Performance optimization"],
      emoji: "🏗️"
    },
    {
      title: "Engineering Leadership Bundle",
      description: "Everything you need to excel as a technical leader and manager.",
      price: "$59",
      features: ["Team management strategies", "Technical decision frameworks", "Stakeholder communication"],
      emoji: "👨‍💼"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title font-heading">
            Digital Resources for Engineers 
            <span className="fun-highlight ml-2">📱</span>
          </h2>
          <p className="section-subtitle font-sans">
            Practical tools, templates, and guides to help you excel in your technical career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="feature-card flex flex-col group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:animate-bounce">{product.emoji}</div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-teal mr-2" />
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={14} 
                      className="text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-brand-dark font-heading">{product.title}</h3>
              <p className="text-muted-foreground mb-4 font-sans">{product.description}</p>
              
              <div className="text-2xl font-bold text-brand-teal mb-4 font-fun">
                {product.price}
              </div>
              
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Heart className="text-brand-blue mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-sm font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <a 
                  href="https://hemantpandey.gumroad.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full font-heading"
                >
                  Learn More ✨
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://hemantpandey.gumroad.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline font-heading"
          >
            View All Products <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
