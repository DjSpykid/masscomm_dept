"use client";

import HighlightCard from "../highlights/HighlightCard";
import { highlightData } from "@/lib/data/highlightData";
import Link from "next/link";
import { Button } from "../ui/button";

export default function DepartmentHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Department Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {highlightData.slice(0, 3).map((highlight) => (
            <HighlightCard
              key={highlight.slug}
              title={highlight.title}
              description={highlight.description}
              image={highlight.image}
              date={highlight.date}
              link={highlight.link}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/highlights">
            <Button variant="secondary" size="lg">
              View All Highlights
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
