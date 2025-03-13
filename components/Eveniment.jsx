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
    <section id="unde-si-cand" className="mb-20 py-16">
      <div className="mx-auto w-full px-6 xl:w-[75%]">
        <h2 className="mb-24 text-center text-4xl font-bold">Unde și când</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm bg-white shadow-lg"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  <p>{event.date}</p>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <Clock className="mr-2 h-5 w-5" />
                  <p>{event.time}</p>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <p className="leading-normal">{event.location}</p>
                </div>
                <button className="bg-accentGreen hover:bg-accentGreen/90 mt-4 w-full cursor-pointer rounded-sm p-2 text-white transition-all duration-300 ease-in-out hover:scale-[0.97]">
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
