// components/home/HeroSection.tsx
'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fb_image.jpg"
          alt="Lead City Senate Building"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl space-y-6">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-xl"
          >
            Empowering Tomorrow&apos;s{" "}
            <span className="text-blue-400 underline decoration-blue-500">
              Media Leaders
            </span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 drop-shadow"
          >
            At Lead City University, our Department of Mass Communication
            combines academic rigor with real-world media skills — preparing
            students to lead in journalism, broadcasting, public relations, and
            digital storytelling.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Explore Programs - Internal Link */}
            <a href="/academics">
              <Button variant="primary" size="lg">
                Explore Programs
              </Button>
            </a>

            {/* Apply Now - External Link */}
            <a
              href="https://admissions.lcu.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                Apply Now
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
