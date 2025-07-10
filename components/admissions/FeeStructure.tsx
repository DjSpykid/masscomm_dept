// components/admissions/FeeStructure.tsx
import { Info } from "lucide-react";

export default function FeeStructure() {
  const fees = [
    { program: "B.Sc. Mass Communication", amount: "₦250,000/semester" },
    { program: "B.A. Media Studies", amount: "₦230,000/semester" },
    { program: "M.Sc. Media", amount: "₦350,000/semester" },
    { program: "Ph.D. Communication", amount: "₦400,000/semester" },
  ];

  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <Info className="h-5 w-5 text-blue-700 mr-2" />
        Fee Structure
      </h3>

      <div className="space-y-3">
        {fees.map((fee, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-blue-100"
          >
            <span className="text-gray-700">{fee.program}</span>
            <span className="font-medium">{fee.amount}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        * Fees subject to change. Additional departmental fees may apply.
      </p>
    </div>
  );
}
