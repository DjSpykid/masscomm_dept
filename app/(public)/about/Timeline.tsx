"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timelineEvents = [
  {
    year: "1985",
    title: "Department Founded",
    description:
      "Established as one of the first mass communication programs in the region.",
  },
  {
    year: "1992",
    title: "First Accreditation",
    description:
      "Received national accreditation for our undergraduate program.",
  },
  {
    year: "2005",
    title: "Postgraduate Programs Launched",
    description:
      "Introduced M.Sc. and Ph.D. programs in communication studies.",
  },
  {
    year: "2018",
    title: "New Media Wing Opened",
    description:
      "State-of-the-art digital media labs established for practical learning.",
  },
  {
    year: "2023",
    title: "International Collaboration",
    description:
      "Partnership with leading global media schools initiated.",
  },
];

export default function DepartmentTimeline() {
  return (
    <div className="relative border-l-2 border-blue-200 pl-6">
      <div className="space-y-10">
        {timelineEvents.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-4"
          >
            {/* Year Label */}
            <div className="mb-1 flex items-center gap-2 text-sm text-blue-700 font-semibold">
              <CalendarDays className="w-4 h-4" />
              <span>{event.year}</span>
            </div>

            {/* Card Content */}
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md p-5 transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
