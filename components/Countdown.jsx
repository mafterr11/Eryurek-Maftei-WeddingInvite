"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-05-30T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft()); // Set initial countdown when component mounts

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p className="text-center ">Loading countdown...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-1/2 bg-countdown bg-fixed bg-center  relative max-md:py-20">
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative flex items-center flex-col justify-center">
        <h1 className="text-2xl xl:text-4xl font-bold mb-4">
          Ziua noastră cea mare!
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-2xl font-semibold">
          {[
            { value: timeLeft.days, label: "Zile" },
            { value: timeLeft.hours, label: "Ore" },
            { value: timeLeft.minutes, label: "Minute" },
            { value: timeLeft.seconds, label: "Secunde" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-square"
            >
              <span className="text-3xl xl:text-5xl font-bold">
                {item.value}
              </span>
              <span className="text-lg">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
