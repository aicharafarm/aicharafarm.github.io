// app/events/page.tsx
import React from 'react';
import Header from '@/components/layout/header';
import { loadEvents } from '@/lib/loadEvents';
import Footer from "@/components/layout/footer";

const EventsPage: React.FC = () => {
  const eventsData = loadEvents();

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="space-y-6">
          {eventsData.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default EventsPage;
