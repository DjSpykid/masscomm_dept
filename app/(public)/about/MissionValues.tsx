'use client';

import { Target, BarChart2, Eye, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To educate and empower media professionals who will shape the future of communication with integrity and innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be a globally recognized center of excellence in mass communication education and research.",
  },
  {
    icon: BarChart2,
    title: "Core Values",
    description: "Excellence, Creativity, Integrity, Diversity, and Social Responsibility.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We're committed to serving our community through media literacy programs and public engagement initiatives.",
  },
];

export default function MissionValues() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Mission & Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 hover:border-blue-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <item.icon className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
