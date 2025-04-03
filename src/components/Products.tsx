
import { Button } from "@/components/ui/button";
import { BookOpen, Code, BarChart3, ExternalLink } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Code className="h-10 w-10 text-brand-blue" />,
      title: "System Design Interview Prep",
      description: "A comprehensive guide to ace system design interviews at top tech companies.",
      highlight: "Most Popular"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-brand-teal" />,
      title: "Tech Career Growth Toolkit",
      description: "Templates, scripts, and frameworks to accelerate your engineering career.",
      highlight: "New Release"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-brand-blue" />,
      title: "Productivity Playbook for Engineers",
      description: "Proven strategies to 2x your productivity as a software engineer.",
      highlight: "Bestseller"
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="fun-title">Digital Products</span> to Accelerate Your Growth
          </h2>
          <p className="section-subtitle">
            Battle-tested resources that help you become a better engineer. <span className="emoji-bullet">🛠️</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-muted rounded-full">
                    {product.icon}
                  </div>
                  <span className="bg-brand-teal text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
                    {product.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 font-sans">{product.description}</p>
              </div>
              <div className="p-6 bg-muted mt-auto">
                <a 
                  href="https://hemantpandey.gumroad.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-brand-blue font-medium py-2 px-4 rounded-md border border-brand-blue transition-all duration-200 inline-flex items-center justify-center w-full"
                >
                  View Details <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://hemantpandey.gumroad.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Browse All Products <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
