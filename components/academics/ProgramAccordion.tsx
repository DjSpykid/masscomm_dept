// components/academics/ProgramAccordion.tsx
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const programs = {
  undergraduate: [
    {
      name: "B.Sc. Mass Communication",
      description:
        "Comprehensive program covering all aspects of media and communication",
      duration: "4 Years",
      courses: [
        "Introduction to Mass Communication",
        "Media Writing and Reporting",
        "Broadcast Journalism",
        "Media Law and Ethics",
        "Digital Media Production",
      ],
      requirements: "5 O'Level credits including English",
    },
    {
      name: "B.A. Digital Media",
      description:
        "Focus on digital content creation and social media strategy",
      duration: "4 Years",
      courses: [
        "Digital Content Creation",
        "Social Media Management",
        "Multimedia Storytelling",
        "Web Design for Media",
        "Data Journalism",
      ],
      requirements: "5 O'Level credits including English",
    },
  ],
  postgraduate: [
    {
      name: "M.Sc. Media & Communication",
      description:
        "Advanced study of media theories and professional practices",
      duration: "2 Years",
      courses: [
        "Advanced Communication Theory",
        "Media Research Methods",
        "Strategic Communication",
        "Global Media Systems",
        "Thesis Research",
      ],
      requirements: "Bachelor's degree in related field",
    },
  ],
};

export default function ProgramAccordion() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const toggleProgram = (programName: string) => {
    setOpenProgram(openProgram === programName ? null : programName);
  };

  return (
    <div className="space-y-4">
      {Object.entries(programs).map(([level, programList]) => (
        <div key={level}>
          <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
            {level} Programs
          </h3>

          <div className="space-y-4">
            {programList.map((program) => (
              <div
                key={program.name}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleProgram(program.name)}
                  className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">
                      {program.name}
                    </h4>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  {openProgram === program.name ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openProgram === program.name && (
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          Duration
                        </h5>
                        <p>{program.duration}</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          Entry Requirements
                        </h5>
                        <p>{program.requirements}</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          Sample Courses
                        </h5>
                        <ul className="list-disc list-inside space-y-1">
                          {program.courses.slice(0, 3).map((course) => (
                            <li key={course}>{course}</li>
                          ))}
                          {program.courses.length > 3 && (
                            <li className="text-blue-700">
                              +{program.courses.length - 3} more
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="text-blue-700 hover:text-blue-800 font-medium">
                        View Full Program Details →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
