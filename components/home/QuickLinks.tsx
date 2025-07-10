"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, Users, BookOpen } from "lucide-react";

const links = [
  {
    title: "News & Announcements",
    description: "Stay updated with the latest department news.",
    href: "/news-events",
    icon: Megaphone,
  },
  {
    title: "Our Staff",
    description: "Meet our dedicated lecturers and staff.",
    href: "/faculty",
    icon: Users,
  },
  {
    title: "Student Resources",
    description: "Access timetables, course outlines, and more.",
    href: "/students",
    icon: BookOpen,
  },
];

export default function QuickLinks() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Quick Links
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {links.map((item, index) => (
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
            >
              <Link
                href={item.href}
                className="group block bg-white hover:bg-blue-50 hover:border-blue-400 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <item.icon className="w-10 h-10 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
