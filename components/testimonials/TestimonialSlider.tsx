// components/testimonials/TestimonialSlider.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adebayo Johnson",
    role: "Alumni, Class of 2018",
    content:
      "The Mass Communication program provided me with both the theoretical knowledge and practical skills needed to excel in broadcast journalism. The faculty members are incredibly supportive and knowledgeable.",
    avatar: "/images/testimonials/adebayo.jpg",
  },
  {
    id: 2,
    name: "Chioma Eze",
    role: "Current Student",
    content:
      "The hands-on experience with the campus radio station and TV studio gave me the confidence to pursue my career in media production. The facilities are state-of-the-art!",
    avatar: "/images/testimonials/chioma.jpg",
  },
  {
    id: 3,
    name: "Oluwaseun Adeleke",
    role: "Media Consultant, Alumni",
    content:
      "The department's strong industry connections helped me secure internships that eventually led to my current position. The curriculum is always updated to reflect industry trends.",
    avatar: "/images/testimonials/seun.jpg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          What Our Students Say
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <Quote className="h-8 w-8 text-blue-200 mb-4" />

              <p className="text-lg text-gray-700 mb-6">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
