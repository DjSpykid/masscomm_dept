"use client";

import {
  GraduationCap,
  Radio,
  Megaphone,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    title: "B.Sc. Mass Communication",
    description:
      "Our core undergraduate program combining theory, media ethics, and hands-on training.",
    icon: GraduationCap,
    badge: "Undergraduate",
  },
  {
    title: "Broadcast Journalism",
    description:
      "Specialized training in TV, radio, and digital broadcasting techniques.",
    icon: Radio,
    badge: "Undergraduate",
  },
  {
    title: "Public Relations & Advertising",
    description:
      "Strategic communication for brands, politics, and nonprofits.",
    icon: Megaphone,
    badge: "Undergraduate",
  },
  {
    title: "Digital Media & Content Creation",
    description:
      "Focus on new media, social platforms, and storytelling for the web.",
    icon: Monitor,
    badge: "Undergraduate",
  },
];


export default function ProgramsOffered() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Programs Offered
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the academic paths that prepare students to become leading
          professionals in media, journalism, and communication.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 rounded-xl p-6 text-left group"
            >
              {/* Badge */}
              {program.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm">
                  {program.badge}
                </span>
              )}

              <div className="mb-4 bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                <program.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/academics">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 group"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
