import React from 'react';
import events from './/events.json';

const EventCard = () => {
  return (
    <div>
      <div className="mt-3 font-medium text-center text-red-500 text-bold text-2xl lg:text-center">
        Eventlist
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="m-10 max-w-xs rounded-xl overflow-hidden shadow-xl lg:m-7">
            <img src={event.image} alt="Event" className="w-full h-32 object-fill" />
            <div className="px-3 py-3">
              <div className="font-bold text-xl text-red-500 mb-2">{event.title}</div>
              <div className="px-0 py-3">
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Date: {event.date}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Time: {event.time}
                </span>
              </div>
              <p className="text-black text-base">{event.description}</p>
            </div>
            <div className="px-3 py-3">
              <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                Donate
              </button>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline ml-2"
              >
                View Location on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
