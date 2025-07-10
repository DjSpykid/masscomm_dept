// components/faculty/LeadershipTeam.tsx
import Image from "next/image";

const leadership = [
  {
    name: "Dr. Akin Olayemi",
    position: "Head of Department",
    image: "/images/staff/akin.jpg",
    bio: "Dr. Olayemi leads the department with a vision to bridge media theory with professional excellence.",
  },
  {
    name: "Mrs. Amina Durojaiye",
    position: "Program Coordinator",
    image: "/images/staff/amina.jpg",
    bio: "With over 15 years in PR and journalism, she coordinates academic programming across levels.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Department Leadership
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {leadership.map((leader, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {leader.name}
                </h4>
                <p className="text-sm text-blue-700">{leader.position}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{leader.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
