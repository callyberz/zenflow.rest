"use client";

import { useState } from "react";
import {
  inahleExhaleIntervalInSecond,
  pauseIntervalInSecond,
} from "~/lib/constants";
import { BreathingCircleMotion } from "~/components/BreathingCircleMotion";
import { BreathingOptions } from "~/components/BreathingOptions";

export default function BreathingExercise() {
  const [breathingSeconds, setBreathingSeconds] = useState(
    inahleExhaleIntervalInSecond,
  );

  return (
    <div
      className="px-619 min-h-screen bg-amber-400
     text-black"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex-1">
          <BreathingOptions
            breathingSeconds={breathingSeconds}
            setBreathingSeconds={setBreathingSeconds}
            pauseIntervalInSecond={pauseIntervalInSecond}
          />
        </div>
        <div className="flex w-full max-w-md justify-center pt-10">
          <BreathingCircleMotion
            magnifyingDuration={breathingSeconds}
            pauseDuration={pauseIntervalInSecond}
          />
        </div>
      </div>
    </div>
  );
}
