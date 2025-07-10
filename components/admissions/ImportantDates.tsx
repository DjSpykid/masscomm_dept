// components/admissions/ImportantDates.tsx
"use client";

import { CalendarDays, AlertCircle } from "lucide-react";
import { useState } from "react";

const admissionPeriods = [
  {
    id: 1,
    name: "Undergraduate Applications",
    dates: [
      { event: "Application Opens", date: "January 15, 2024" },
      { event: "Early Decision Deadline", date: "March 30, 2024" },
      { event: "Final Deadline", date: "May 15, 2024" },
    ],
  },
  {
    id: 2,
    name: "Postgraduate Applications",
    dates: [
      { event: "Application Opens", date: "February 1, 2024" },
      { event: "Priority Deadline", date: "April 15, 2024" },
      { event: "Final Deadline", date: "June 30, 2024" },
    ],
  },
  {
    id: 3,
    name: "International Students",
    dates: [
      { event: "Application Opens", date: "November 1, 2023" },
      { event: "Visa Processing Deadline", date: "April 1, 2024" },
      { event: "Orientation Week", date: "August 12-16, 2024" },
    ],
  },
];

export default function ImportantDates() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {admissionPeriods.map((period) => (
            <button
              key={period.id}
              onClick={() => setActiveTab(period.id)}
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                activeTab === period.id
                  ? "border-b-2 border-blue-600 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {admissionPeriods.map((period) => (
            <div
              key={period.id}
              className={`space-y-4 ${
                activeTab === period.id ? "block" : "hidden"
              }`}
            >
              <div className="flex items-start">
                <CalendarDays className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {period.name} Timeline
                  </h3>
                  <ul className="space-y-3">
                    {period.dates.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-3">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium">{item.event}</p>
                          <p className="text-sm text-gray-600">{item.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-800">
                  <span className="font-medium">Note:</span> Deadlines are 11:59
                  PM WAT. Late applications may be considered on a case-by-case
                  basis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
