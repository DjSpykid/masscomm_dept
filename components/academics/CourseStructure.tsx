"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const courseLevels = [
  {
    level: "100 Level",
    semesters: {
      "First Semester": [
        "Introduction to Mass Communication",
        "Use of English I",
        "History of Nigerian Media",
        "Computer Fundamentals",
      ],
      "Second Semester": [
        "Writing for the Media",
        "Use of English II",
        "Introduction to Sociology",
        "Photojournalism",
      ],
    },
  },
  {
    level: "200 Level",
    semesters: {
      "First Semester": [
        "News Reporting & Writing",
        "Media Law & Ethics",
        "Introduction to Broadcasting",
        "Public Relations Principles",
      ],
      "Second Semester": [
        "Advertising Concepts",
        "Development Communication",
        "Television Production",
        "Communication Theories",
      ],
    },
  },
  {
    level: "300 Level",
    semesters: {
      "First Semester": [
        "Advanced Broadcast Journalism",
        "Online Media Publishing",
        "Corporate Communication",
        "Internship Orientation",
      ],
      "Second Semester": [
        "Field Work / SIWES",
        "Communication Research Methods",
        "Multimedia Production",
        "Crisis Communication",
      ],
    },
  },
  {
    level: "400 Level",
    semesters: {
      "First Semester": [
        "Media Project Management",
        "Advanced PR Writing",
        "Political Communication",
        "Final Year Project I",
      ],
      "Second Semester": [
        "Media Entrepreneurship",
        "ICT & Media",
        "Final Year Project II",
        "Internship Report",
      ],
    },
  },
];

export default function CourseStructure() {
  const [openLevel, setOpenLevel] = useState<string | null>(null);

  const toggleLevel = (level: string) => {
    setOpenLevel(openLevel === level ? null : level);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Course Structure
        </h2>

        <div className="space-y-6">
          {courseLevels.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-md shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleLevel(item.level)}
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="flex items-center gap-2 font-semibold text-blue-900">
                  <BookOpen className="w-5 h-5" />
                  {item.level}
                </div>
                {openLevel === item.level ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {openLevel === item.level && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-white space-y-4 text-sm text-gray-700"
                  >
                    {Object.entries(item.semesters).map(
                      ([semester, courses], idx) => (
                        <div key={idx}>
                          <h4 className="text-blue-700 font-semibold mb-2">
                            {semester}
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {courses.map((course, i) => (
                              <li key={i}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
