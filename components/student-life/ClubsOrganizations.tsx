// components/student-life/ClubsOrganizations.tsx
const clubs = [
  {
    name: "Mass Communication Students Association",
    description: "Official student governing body organizing academic and social events",
    members: 120
  },
  {
    name: "Campus Media Collective",
    description: "Publishes the student newspaper and runs online media platforms",
    members: 45
  },
  {
    name: "Film Production Club",
    description: "Student filmmakers creating short films and documentaries",
    members: 32
  },
  {
    name: "Debate & Public Speaking Society",
    description: "Develops oratory skills through competitions and workshops",
    members: 28
  }
];

export default function ClubsOrganizations() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Student Organizations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
            <p className="text-gray-600 mb-4">{club.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{club.members} active members</span>
              <button className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}