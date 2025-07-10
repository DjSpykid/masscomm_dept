"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProgramsList from "@/components/academics/ProgramsList";
import CourseStructure from "@/components/academics/CourseStructure";
import FieldExperience from "@/components/academics/FieldExperience";
import AcademicResources from "@/components/academics/AcademicResources";
import AcademicFAQ from "@/components/academics/AcademicFAQ";
import AdvisorContact from "@/components/academics/AdvisorContact";

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] bg-gray-900 overflow-hidden">
        <Image
          src="/images/academics.jpg"
          alt="Academic Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Explore Our Academic Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-sm">
              From foundational courses to hands-on fieldwork, our programs
              shape future leaders in Journalism, PR, Digital Media, and
              Broadcasting.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <ProgramsList />
      <CourseStructure />
      <FieldExperience />
      <AcademicResources />
      <AcademicFAQ />
      <AdvisorContact />
    </div>
  );
}
