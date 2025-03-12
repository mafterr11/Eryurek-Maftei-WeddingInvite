"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Cununia Civilă",
    date: "12 Aprilie 2025",
    time: "12:00",
    location: "Oficiul Stării Civile, Strada Exemplar 12, București",
    image: "/treehouse.jpg",
  },
  {
    title: "Petrecerea",
    date: "12 Aprilie 2025",
    time: "18:00",
    location: "Restaurant Elegant, Strada Petrecerii 24, București",
    image: "/treehouse2.jpg",
  },
];

export default function Eveniment() {
  return (
    <section className="py-16 bg-lightGreen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Unde și când
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
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
                  <MapPin className="w-5 h-5 mr-2" />
                  <p>{event.location}</p>
                </div>
                <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white">
                  Vezi harta
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
