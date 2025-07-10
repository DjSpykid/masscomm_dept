"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How many units do students register per semester?",
    answer:
      "Students typically register between 18–24 units per semester, depending on their level and optional courses available.",
  },
  {
    question: "When does the SIWES internship take place?",
    answer:
      "SIWES is done during the second semester of 300 Level. Students are expected to complete at least 12 weeks in a registered media organization.",
  },
  {
    question: "Are final-year projects individual or group?",
    answer:
      "Projects are individual. Each student is assigned a supervisor and must complete their original research and documentation.",
  },
  {
    question: "Can I specialize in PR or Journalism?",
    answer:
      "Yes. From 300 level upward, you can focus on your track such as Broadcast Journalism, Public Relations, or Advertising.",
  },
];

export default function AcademicFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer transition hover:shadow-sm"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-medium text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-700" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
