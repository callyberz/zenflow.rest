"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [currentDateTimeString, setCurrentDateTimeString] = useState<
    string | null
  >(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTimeString(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#6f5de6] ">
      <div className="px-6 pt-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome
        </h1>
        <p className="text-sm opacity-70">
          {currentDateTimeString ? currentDateTimeString : "loading..."}
        </p>
      </div>
    </div>
  );
};
