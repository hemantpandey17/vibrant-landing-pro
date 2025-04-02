
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

interface TestimonialProps {
  testimonials: {
    quote: string;
    author: string;
    role: string;
    initials?: string;
  }[];
  intervalTime?: number;
}

const Testimonial = ({ testimonials, intervalTime = 5000 }: TestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [testimonials.length, intervalTime]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials.length) return null;

  return (
    <div className="relative bg-muted rounded-lg p-5 max-w-md mx-auto transform transition-all duration-300 hover:scale-105">
      <div className="absolute -top-3 -left-3">
        <div className="bg-brand-blue rounded-full p-2">
          <MessageSquare size={18} className="text-white" />
        </div>
      </div>
      <div className="min-h-[120px] flex flex-col justify-between">
        <p className="text-sm text-muted-foreground italic mb-4 font-sans">
          "{testimonials[currentIndex].quote}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 bg-brand-teal text-white">
            <AvatarFallback>
              {testimonials[currentIndex].initials || testimonials[currentIndex].author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm font-heading">— {testimonials[currentIndex].author}</p>
            <p className="text-xs text-muted-foreground font-sans">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>
      
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-brand-blue w-4" : "bg-gray-300"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
