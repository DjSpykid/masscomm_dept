// components/student-life/AlumniSpotlight.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const alumni = [
  {
    name: "Amina Mohammed",
    role: "Senior Producer at CNN Africa",
    quote:
      "The hands-on experience in the campus TV studio gave me the confidence to pursue broadcast journalism.",
    image: "/images/lecturers/Dean_masscomm.jpg",
  },
  {
    name: "Chike Obi",
    role: "Digital Marketing Director, MTN Nigeria",
    quote:
      "The media entrepreneurship courses helped me develop skills I use daily in my corporate role.",
    image: "/images/lecturers/ogini.jpeg",
  },
  {
    name: "Fatima Bello",
    role: "Documentary Filmmaker",
    quote:
      "Faculty mentorship during my final year project led directly to my first film commission.",
    image: "/images/lecturers/sunday_masscomm.jpeg",
  },
];

export default function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? alumni.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-gray-50 rounded-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Alumni Success Stories
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={alumni[currentIndex].image}
                alt={alumni[currentIndex].name}
                fill
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "{alumni[currentIndex].quote}"
            </blockquote>
            <div className="text-right">
              <p className="font-bold text-gray-900">
                {alumni[currentIndex].name}
              </p>
              <p className="text-gray-600">{alumni[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
