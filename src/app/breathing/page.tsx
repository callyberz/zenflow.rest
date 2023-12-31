"use client";

import { useState } from "react";
import {
  inahleExhaleIntervalInSecond,
  pauseIntervalInSecond,
} from "~/lib/constants";
import { BreathingCircleMotion } from "~/components/BreathingCircleMotion";
import { Slider } from "~/components/ui/slider";

export default function BreathingExercise() {
  const [breathingSeconds, setBreathingSeconds] = useState(
    inahleExhaleIntervalInSecond,
  );

  return (
    <div className="min-h-screen bg-amber-400 px-6 text-black">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex-1">
          <h2 className="mt-6 text-2xl font-semibold">Customization Options</h2>
          <div className="mt-4 flex items-center justify-center rounded-lg bg-amber-200 p-4">
            <div className="w-full md:w-1/2 ">
              <p className="text-center">
                {`${breathingSeconds} seconds per breathing cycle`}
              </p>

              <Slider
                className="py-4"
                defaultValue={[breathingSeconds]}
                min={5}
                max={30}
                step={1}
                onValueChange={(value) => {
                  console.log(value);
                  setBreathingSeconds(Number(value));
                }}
              />

              <p className="text-center text-sm">
                {`${pauseIntervalInSecond} seconds pause between cycles`}
              </p>
            </div>
          </div>
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
