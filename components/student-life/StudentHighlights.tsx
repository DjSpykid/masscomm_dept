// components/student-life/StudentHighlights.tsx
import { Award, Users, Mic, Film } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Annual Media Festival",
    description: "Showcase student productions and compete for awards",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Connect with industry professionals and alumni",
  },
  {
    icon: Mic,
    title: "Campus Radio Station",
    description: "Live broadcasting experience for students",
  },
  {
    icon: Film,
    title: "Film Screenings",
    description: "Weekly student film showcases and discussions",
  },
];

export default function StudentHighlights() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Campus Life Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
