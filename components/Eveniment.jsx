"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Cununia Civilă",
    date: "30 Mai 2026",
    time: "14:00",
    location: "Oficiul Stării Civile, Strada Snagov, nr. 12",
    image: "/treehouse.jpg",
  },
  {
    title: "Petrecerea",
    date: "30 Mai 2026",
    time: "15:00",
    location: "Treehouse Cosoba, Strada Dambovita",
    image: "/treehouse2.jpg",
  },
];

export default function Eveniment() {
  return (
    <section className="py-16 bg-lightGreen">
      <div className="w-full xl:w-[75%] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center  mb-24">Unde și când</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <p>{event.date}</p>
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="w-5 h-5 mr-2 shrink-0" />
                  <p>{event.location}</p>
                </div>
                <button className="mt-4 w-full bg-accentGreen hover:bg-accentGreen/90 text-white rounded-sm p-2 transition-all duration-300 ease-in-out cursor-pointer hover:scale-[0.97]">
                  Vezi harta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
