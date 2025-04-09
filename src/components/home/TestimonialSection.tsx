
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      rating: 5,
      text: "Seva Health Connect made it so easy to find a specialist for my father's cardiac condition. We got an appointment with a top cardiologist within hours. The entire process was smooth and hassle-free."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "I've been using Seva Health for all my family's medical appointments for the past year. The convenience of booking appointments and getting reminders has saved us so much time and stress."
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Bangalore",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      text: "As a working professional, finding time to visit a doctor was always challenging. The video consultation feature on Seva Health has been a lifesaver for me. I can now consult with doctors without taking time off work."
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Chennai",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      text: "The quality of doctors on this platform is exceptional. I was able to book an appointment with a highly recommended orthopedic surgeon who helped me with my knee pain. Thank you Seva Health!"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => 
      prev < testimonials.length - visibleCount ? prev + 1 : prev
    );
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who have experienced the convenience and quality of Seva Health Connect
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white shadow-md"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white shadow-md"
            onClick={handleNext}
            disabled={activeIndex >= testimonials.length - visibleCount}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-seva-600 text-seva-600 hover:bg-seva-50">
            View All Testimonials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
