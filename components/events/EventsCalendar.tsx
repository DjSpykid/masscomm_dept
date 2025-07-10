// 
// components/events/EventsCalendar.tsx
'use client';

import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { format, isToday } from 'date-fns';
import { CalendarEvent } from '@/types/faculty';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function EventsCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data.slice(0, 5)); // Show only upcoming events
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-6">
      <div className="bg-blue-700 px-6 py-4">
        <h3 className="text-lg font-bold text-white flex items-center">
          <CalendarDays className="h-5 w-5 mr-2" />
          Upcoming Events
        </h3>
      </div>
      
      <div className="p-6">
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded h-20 animate-pulse"></div>
            ))}
          </div>
        ) : events.length > 0 ? (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h4 className={`font-bold ${isToday(new Date(event.date)) ? 'text-blue-600' : 'text-gray-900'}`}>
                  {event.title}
                </h4>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  {format(new Date(event.date), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Clock className="h-4 w-4 mr-1.5" />
                  {format(new Date(event.date), 'h:mm a')}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  {event.location}
                </div>
              </div>
            ))}
            
            <Link 
              href="/events" 
              className="text-blue-700 hover:text-blue-800 font-medium text-sm inline-flex items-center mt-4"
            >
              View all events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No upcoming events</p>
        )}
      </div>
    </div>
  );
}