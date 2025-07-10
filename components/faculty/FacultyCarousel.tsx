// components/faculty/FacultyCarousel.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FacultyMember } from '@/types/faculty';
import FacultyCard from './FacultyCard';

export default function FacultyCarousel({ faculty }: { faculty: FacultyMember[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === faculty.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? faculty.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden">
        <div className="py-8">
          <div className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {faculty.map((member, index) => (
              <div key={member.id} className="w-full flex-shrink-0 px-2">
                <FacultyCard 
                  member={member} 
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous faculty member"
        >
          <ChevronLeft className="h-6 w-6 text-blue-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next faculty member"
        >
          <ChevronRight className="h-6 w-6 text-blue-700" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {faculty.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-700' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}