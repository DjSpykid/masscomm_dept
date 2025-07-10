"use client";

import Image from "next/image";
import { testimonialData } from "@/lib/data/testimonials";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Student Success
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from our students and alumni about how Lead City’s Mass
          Communication program shaped their journey.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialData.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition p-6 flex flex-col items-start text-left"
            >
              {/* Quote icon */}
              <Quote className="w-5 h-5 text-blue-600 mb-2" />

              {/* Quote text */}
              <p className="text-sm text-gray-700 italic mb-4 leading-relaxed">
                "{student.quote}"
              </p>

              {/* Student info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-blue-200">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {student.name}
                  </h4>
                  <span className="text-xs text-blue-700">{student.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
