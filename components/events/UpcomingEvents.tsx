import { upcomingEvents } from "@/lib/data/events";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Stay informed on activities, lectures, and opportunities happening
          soon in the department.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.slice(0, 3).map((event, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow transition"
            >
              <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-2">
                <CalendarDays className="w-4 h-4" />
                {formatDate(event.date)}{" "}
                {event.time && (
                  <>
                    • <Clock className="w-4 h-4" />
                    {event.time}
                  </>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{event.description}</p>
              <Link
                href={event.link}
                className="text-sm text-blue-700 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA to full page */}
        <div className="mt-10 text-center">
          <Link href="/news-events">
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 group"
            >
              View All Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
