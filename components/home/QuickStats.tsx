// components/home/QuickStats.tsx
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

const stats = [
  { id: 1, name: "Students Enrolled", value: "1,200+", icon: Users },
  { id: 2, name: "Academic Programs", value: "8", icon: BookOpen },
  { id: 3, name: "Faculty Members", value: "45+", icon: GraduationCap },
  { id: 4, name: "Awards Won", value: "25+", icon: Trophy },
];

export default function QuickStats() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Department at a Glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
