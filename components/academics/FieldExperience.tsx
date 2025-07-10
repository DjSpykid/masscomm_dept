"use client";

import { Radio, Tv, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    icon: Radio,
    title: "Broadcast Training",
    description:
      "Our students train in real studios like Channels TV and Splash FM, gaining hands-on production and editing experience.",
  },
  {
    icon: Tv,
    title: "Field Work (SIWES)",
    description:
      "300-level students participate in internships across TV stations, media agencies, and government media outlets.",
  },
  {
    icon: Globe,
    title: "Digital Storytelling Labs",
    description:
      "From podcasting to mobile reporting, students learn the tools of modern media publishing in our digital media suite.",
  },
];

export default function FieldExperience() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Field Experience & Internship
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          We believe real media professionals are trained both in classrooms and
          on the field. Our programs offer industry immersion for every student.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12 text-left">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md p-6 transition"
            >
              <div className="text-blue-700 mb-4">
                <exp.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <Link href="/highlights">
          <Button variant="primary" size="lg">
            View Internship Highlights
          </Button>
        </Link>
      </div>
    </section>
  );
}
