"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            About the Department
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            The Department of Mass Communication at Lead City University is
            committed to producing media professionals equipped with practical
            skills, critical thinking, and ethical awareness.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Through dynamic programs, fieldwork experiences, and partnerships
            with top media houses, our students are empowered to lead in{" "}
            <span className="text-blue-700 font-semibold">Journalism</span>,{" "}
            <span className="text-blue-700 font-semibold">Broadcasting</span>,{" "}
            <span className="text-blue-700 font-semibold">
              Public Relations
            </span>
            , and{" "}
            <span className="text-blue-700 font-semibold">
              Digital Storytelling
            </span>
            .
          </p>

          <Link href="/about">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Button>
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg group"
        >
          <Image
            src="/images/classroom.jpg"
            alt="Mass communication classroom"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
