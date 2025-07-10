// components/news/CategoryFilters.tsx
"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function CategoryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const categories = [
    { id: "all", name: "All News" },
    { id: "announcements", name: "Announcements" },
    { id: "events", name: "Events" },
    { id: "research", name: "Research" },
    { id: "student-life", name: "Student Life" },
  ];

  const handleFilter = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categoryId);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
