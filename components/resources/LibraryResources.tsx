// components/resources/LibraryResources.tsx
import { Book, BookOpen, Database, Link2 } from "lucide-react";

const resources = [
  {
    title: "Department Library",
    description: "Physical collection of media and communication resources",
    icon: Book,
    link: "/library",
  },
  {
    title: "E-Journals Access",
    description: "Digital access to academic journals and publications",
    icon: BookOpen,
    link: "/e-journals",
  },
  {
    title: "Media Database",
    description: "Archive of student films and media projects",
    icon: Database,
    link: "/media-database",
  },
  {
    title: "Online Resources",
    description: "Curated list of external media resources",
    icon: Link2,
    link: "/online-resources",
  },
];

export default function LibraryResources() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Library Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4 text-blue-700">
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                {resource.description}
              </p>
              <span className="text-blue-700 text-sm font-medium inline-flex items-center">
                Access resource
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
