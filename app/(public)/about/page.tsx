"use client";

import MissionValues from "./MissionValues";
import DepartmentTimeline from "./Timeline";
import Image from "next/image";
import { motion } from "framer-motion";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Accreditation from "@/components/about/Accreditation";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] bg-gray-900 overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Lead City University - Mass Comm Department"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 " />
        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3"
          >
            About Our Department
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-200 max-w-2xl drop-shadow-sm"
          >
            Pioneering excellence in{" "}
            <span className="text-blue-400 font-semibold">
              Mass Communication
            </span>{" "}
            education since 1985.
          </motion.p>
        </div>
      </div>

      {/* Optional Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-white py-10"
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-xl text-gray-800 italic font-medium leading-relaxed">
            “We don’t just teach media — we shape communicators who will
            influence the world with words, images, and innovation.”
          </p>
        </div>
      </motion.div>

      {/* Main Grid Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our History
              </h2>
              <DepartmentTimeline />
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MissionValues />
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            {/* You can use this column later for news widgets or featured alumni */}
          </div>
        </div>
      </div>

      {/* These below should be FULL WIDTH */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        <LeadershipTeam />
        <Accreditation />
        <AboutCTA />
      </div>
    </div>
  );
}
