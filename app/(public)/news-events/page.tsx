// app/(public)/news-events/page.tsx
import EventsCalendar from "@/components/events/EventsCalendar";
import CategoryFilters from "@/components/news/CategoryFilters";
import NewsSection from "@/components/news/NewsSection";

export default function NewsEventsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with department activities and announcements
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <CategoryFilters />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <NewsSection />
          </div>
          
          <div className="lg:col-span-1">
            <EventsCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}