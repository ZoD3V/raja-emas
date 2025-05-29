"use client";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dayName = now.toLocaleString("id-ID", { weekday: "long" });
      const datePart = now.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const timePart = now.toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setCurrentTime(`${dayName} ${datePart} ◉ Pukul ${timePart}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-bold text-center font-body md:text-primary-950 text-white text-sm md:text-base lg:text-lg">
      {currentTime}
    </p>
  );
}
