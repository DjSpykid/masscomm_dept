"use client";

import { GraduationCap, Radio, Megaphone, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "B.Sc. Mass Communication",
    description:
      "Our core undergraduate program combining theory, media ethics, and hands-on training.",
    icon: GraduationCap,
  },
  {
    title: "Broadcast Journalism",
    description:
      "Specialized training in TV, radio, and digital broadcasting techniques.",
    icon: Radio,
  },
  {
    title: "Public Relations & Advertising",
    description:
      "Strategic communication for brands, politics, and nonprofits.",
    icon: Megaphone,
  },
  {
    title: "Digital Media & Content Creation",
    description:
      "Focus on social platforms, content design, and storytelling for the web.",
    icon: Monitor,
  },
];

export default function ProgramsList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Programs We Offer
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore the various academic tracks that shape tomorrow&apos;s media
          professionals.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white hover:shadow-lg transition rounded-lg p-6 text-left border border-gray-100"
            >
              <div className="text-blue-700 mb-4">
                <program.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
