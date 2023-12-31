"use client";

import { useState } from "react";
import { inahleExhaleIntervalInSecond } from "~/lib/constants";
import { BreathingCircleMotion } from "~/components/BreathingCircleMotion";

export default function Meditation() {
  const [breathingSeconds, setBreathingSeconds] = useState(
    inahleExhaleIntervalInSecond,
  );

  return (
    <div className="px-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex-1">
          <h2 className="mt-6 text-2xl font-semibold">Customization Options</h2>
          <div className="mt-4 flex items-center justify-center rounded-lg bg-white bg-opacity-10 p-4">
            <div className="w-full md:w-1/2 ">
              <p className="text-center font-semibold">Breathing Duration</p>
              <input
                className="mt-2 h-2 w-full appearance-none rounded-full bg-[#4338ca]"
                max="10"
                min="5"
                type="range"
                value={breathingSeconds}
                onChange={(e) => setBreathingSeconds(Number(e.target.value))}
              />
              {`Your current inhale duration is ${breathingSeconds} seconds`}
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-md justify-center pt-10">
          <BreathingCircleMotion magnifyingDuration={breathingSeconds} />
        </div>
      </div>
    </div>
  );
}
