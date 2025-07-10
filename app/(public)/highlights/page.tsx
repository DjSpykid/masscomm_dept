"use client";

import { highlightData } from "@/lib/data/highlightData";
import HighlightCard from "@/components/highlights/HighlightCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HighlightsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] bg-gray-900 overflow-hidden">
        <Image
          src="/images/fieldwork.jpg"
          alt="Field Work and Highlights"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3"
          >
            Department Highlights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-200 max-w-2xl drop-shadow-sm"
          >
            Explore events, internships, awards, and memorable moments in our
            department.
          </motion.p>
        </div>
      </div>

      {/* Highlight Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-900 mb-10 text-center"
          >
            All Highlights
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlightData.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <HighlightCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
