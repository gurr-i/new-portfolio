import { useState, useEffect, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ScrollAnimation from "./ScrollAnimation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: JSX.Element;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gourab",
    role: "CEO",
    company: "Techsellence",
    content:
      "Working with Gurveer was a game-changer for our company. The website he built for us has significantly increased our conversion rates and user engagement. His attention to detail and problem-solving skills are outstanding.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000); // Change testimonial every 6 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const handleNext = useCallback(() => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setAnimating(false), 500);
    }
  }, [animating]);

  const handlePrev = useCallback(() => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setAnimating(false), 500);
    }
  }, [animating]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Create avatar placeholder with initials
  const getAvatarPlaceholder = useCallback((name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold theme-transition">
        {initials}
      </div>
    );
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-20 bg-card relative theme-transition"
    >
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <ScrollAnimation type="fade-up">
          <h2 className="text-3xl font-semibold mb-12 theme-transition">
            <span className="text-primary theme-transition">#</span>testimonials
          </h2>
        </ScrollAnimation>

        <ScrollAnimation type="zoom-in" delay={200}>
          <div
            className="max-w-4xl mx-auto relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                {/* Testimonial content */}
                <div
                  className={`bg-background border border-gray-700 rounded-lg p-6 md:p-8 transition-all transform theme-transition ${
                    animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <svg
                    className="h-10 w-10 text-primary opacity-30 mb-4 theme-transition"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg mb-6 theme-transition">
                    {activeTestimonial.content}
                  </p>

                  <div className="flex items-center">
                    {activeTestimonial.avatar ||
                      getAvatarPlaceholder(activeTestimonial.name)}
                    <div className="ml-4">
                      <h4 className="font-semibold theme-transition">
                        {activeTestimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400 theme-transition">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary transform rotate-12 hidden md:block theme-transition animate-pulse-slow"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary transform -rotate-12 hidden md:block theme-transition animate-float"></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <div className="flex items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 transition-all theme-transition ${
                      index === activeIndex
                        ? "bg-primary scale-110"
                        : "bg-gray-600"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  className="p-2 border border-gray-700 rounded hover:border-primary transition-colors theme-transition"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="p-2 border border-gray-700 rounded hover:border-primary transition-colors theme-transition"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
