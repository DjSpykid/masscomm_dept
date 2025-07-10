// app/(public)/faculty/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FacultyGrid from "@/components/faculty/FacultyGrid";
import { facultyData } from "@/lib/data/facultyData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaculty = facultyData.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showLimited = searchTerm.trim() === "";
  const visibleFaculty = showLimited
    ? filteredFaculty.slice(0, 6)
    : filteredFaculty;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[450px] overflow-hidden bg-gray-900">
        <Image
          src="/images/faculty_img.jpg"
          alt="Faculty"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3"
          >
            Meet Our Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-200 max-w-2xl drop-shadow-sm"
          >
            Dedicated lecturers, researchers, and media professionals who shape
            our students' academic journey.
          </motion.p>
        </div>
      </div>

      {/* Search + Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto mb-8 text-center">
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-center"
          />
        </div>

        <FacultyGrid faculty={visibleFaculty} />

        {/* Show CTA only when not filtering */}
        {showLimited && filteredFaculty.length > 6 && (
          <div className="text-center mt-10">
            <Link href="/faculty/all">
              <Button variant="primary" size="lg">
                View All Staff
              </Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
