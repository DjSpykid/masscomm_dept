// components/resources/EquipmentBooking.tsx
"use client";

import { Camera, Video, Mic2, Calendar } from "lucide-react";
import { useState } from "react";

const equipment = [
  { id: 1, name: "DSLR Camera", type: "Canon EOS 90D", icon: Camera },
  { id: 2, name: "Video Camera", type: "Sony PXW-Z190", icon: Video },
  { id: 3, name: "Audio Recorder", type: "Zoom H6", icon: Mic2 },
  { id: 4, name: "Lighting Kit", type: "Aputure 300D", icon: Camera },
];

export default function EquipmentBooking() {
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(
    null
  );

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Equipment Booking
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Available Equipment
          </h3>
          <div className="space-y-3">
            {equipment.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedEquipment(item.id)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedEquipment === item.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Form</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            {selectedEquipment ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Selected Equipment
                  </label>
                  <div className="bg-white border border-gray-300 rounded-md px-4 py-2">
                    {equipment.find((e) => e.id === selectedEquipment)?.name}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Booking Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Purpose
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    rows={3}
                    placeholder="Describe what you'll be using the equipment for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Submit Booking Request
                </button>
              </form>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Please select equipment to book</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
