
import { BookOpen, Star, Download, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Tech Career Playbook",
      description: "The ultimate guide to navigating and accelerating your tech career journey.",
      price: "$29",
      features: ["Career planning templates", "Promotion frameworks", "Negotiation scripts"]
    },
    {
      title: "System Design Essentials",
      description: "Master the fundamentals of designing scalable and resilient systems.",
      price: "$39",
      features: ["10+ detailed case studies", "Architecture patterns", "Performance optimization"]
    },
    {
      title: "Engineering Leadership Bundle",
      description: "Everything you need to excel as a technical leader and manager.",
      price: "$59",
      features: ["Team management strategies", "Technical decision frameworks", "Stakeholder communication"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Digital Resources for Engineers</h2>
          <p className="section-subtitle">
            Practical tools, templates, and guides to help you excel in your technical career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="feature-card flex flex-col">
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
              
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="text-2xl font-bold text-brand-teal mb-4">
                {product.price}
              </div>
              
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Download className="text-brand-blue mr-2 flex-shrink-0 mt-1" size={14} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <a 
                  href="https://hemantpandey.gumroad.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  Learn More
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
            className="btn-outline"
          >
            View All Products <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
