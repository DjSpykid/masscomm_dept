"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Y. OGINNI",
    title: "Head of Department",
    email: "akin.olayemi@lcu.edu.ng",
    image: "/images/lecturers/ogini.jpeg",
  },
  {
    name: "Prof. L. IHEBUZOR ",
    title: "Coordinator, PR & Advertising",
    email: "amina.durojaiye@lcu.edu.ng",
    image: "/images/lecturers/Dean_masscomm.jpg",
  },
  {
    name: "MR Sunday",
    title: "Postgraduate Program Director",
    email: "olufunke.adebayo@lcu.edu.ng",
    image: "/images/lecturers/sunday_masscomm.jpeg",
  },
];

export default function LeadershipTeam() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Leadership Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-5 text-center"
          >
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {person.name}
            </h3>
            <p className="text-sm text-blue-700 mb-2">{person.title}</p>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition"
            >
              <Mail className="w-4 h-4" />
              {person.email}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
