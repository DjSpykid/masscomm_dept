"use client";

import { academicResources } from "@/lib/data/academicResources";
import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function AcademicResources() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Academic Resources
        </h2>

        <div className="space-y-12">
          {academicResources.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {group.level}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.resources.map((res, j) => (
                  <a
                    key={j}
                    href={res.file}
                    download
                    className="bg-white border border-gray-200 hover:border-blue-300 rounded-lg p-5 transition shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2 text-blue-700">
                      <FileText className="w-5 h-5" />
                      <span className="font-semibold">{res.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {res.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-700 font-medium">
                      <Download className="w-4 h-4" />
                      Download
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
