// components/home/ProgramHighlights.tsx
"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

const programs = {
  undergraduate: [
    {
      name: "B.Sc. Mass Communication",
      description:
        "Comprehensive program covering journalism, broadcasting, public relations, and advertising.",
      duration: "4 Years",
      requirements: "5 O-Level credits including English",
    },
    {
      name: "B.A. Media Studies",
      description:
        "Focuses on critical analysis of media institutions and their social impact.",
      duration: "4 Years",
      requirements: "5 O-Level credits including English",
    },
  ],
  postgraduate: [
    {
      name: "M.Sc. Media & Communication",
      description:
        "Advanced study of media theories and professional practices.",
      duration: "2 Years",
      requirements: "Bachelor's degree in related field",
    },
    {
      name: "Ph.D. Communication Studies",
      description:
        "Research-focused program for academic and industry leadership.",
      duration: "3-5 Years",
      requirements: "Master's degree in related field",
    },
  ],
};

export default function ProgramHighlights() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Our Academic Programs
        </h2>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-md mx-auto mb-8">
            {Object.keys(programs).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(programs).map((programs, idx) => (
              <Tab.Panel key={idx} className={`rounded-xl bg-white p-3`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programs.map((program, programIdx) => (
                    <div
                      key={programIdx}
                      className="relative rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {program.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <span className="font-medium mr-2">Duration:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium mr-2">Requirements:</span>
                        <span>{program.requirements}</span>
                      </div>
                      <Link
                        href="/academics"
                        className="absolute bottom-4 right-4 text-blue-700 hover:text-blue-800 text-sm font-medium"
                      >
                        Learn more →
                      </Link>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
