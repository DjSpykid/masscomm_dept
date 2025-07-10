"use client";

import FacultyGrid from "@/components/faculty/FacultyGrid";
import { facultyData } from "@/lib/data/facultyData";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// 🔁 Helper to get unique positions
const getAllPositions = (data: typeof facultyData) => {
  const positions = data.map((f) => f.position.trim());
  const unique = Array.from(new Set(positions));
  return ["All", ...unique];
};

export default function AllFacultyPage() {
  const [query, setQuery] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("All");

  // 🔁 Get all positions dynamically from the data
  const positions = useMemo(() => getAllPositions(facultyData), []);

  // 🔍 Filter faculty list
  const filteredFaculty = useMemo(() => {
    return facultyData.filter((member) => {
      const matchesQuery = `${member.name} ${member.specialization}`
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesPosition =
        selectedPosition === "All" || member.position === selectedPosition;

      return matchesQuery && matchesPosition;
    });
  }, [query, selectedPosition]);

  return (
    <div className="bg-white min-h-screen">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[400px] overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/dept_2.jpg"
            alt="Mass Comm Faculty"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3"
          >
            Meet Our Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-200 max-w-2xl drop-shadow-sm"
          >
            Our experienced faculty guides and mentors the next generation of
            communication professionals.
          </motion.p>
        </div>
      </div>

      {/* ===== Filter + Grid Section ===== */}
      <div className="py-16 container mx-auto px-4">
        {/* 🔍 Search Input */}
        <div className="max-w-xl mx-auto mb-6">
          <label className="relative block text-gray-700">
            <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </label>
        </div>

        {/* 🧑‍🏫 Position Filter Buttons (Dynamic) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setSelectedPosition(pos)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                selectedPosition === pos
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* 📦 Faculty Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FacultyGrid faculty={filteredFaculty} />
        </motion.div>
      </div>

      {/* ===== CTA Footer Section ===== */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Interested in Joining Our Academic Team?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Explore career opportunities, research collaborations, or connect with
          our department leadership.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Contact the Department
        </a>
      </section>
    </div>
  );
}
