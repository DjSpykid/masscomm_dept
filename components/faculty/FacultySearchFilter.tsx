// components/faculty/FacultySearchFilter.tsx
"use client";

import { useState } from "react";

interface FacultySearchFilterProps {
  onSearch: (term: string) => void;
}

export default function FacultySearchFilter({
  onSearch,
}: FacultySearchFilterProps) {
  const [term, setTerm] = useState("");

  return (
    <div className="mb-10 max-w-md mx-auto">
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search by name, role or field..."
        className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
      />
    </div>
  );
}
