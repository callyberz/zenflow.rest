"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Slider } from "~/components/ui/slider";
import { Button } from "../ui/button";

interface BreathingOptionsTypes {
  breathingSeconds: number;
  pauseIntervalInSecond: number;
  setBreathingSeconds: (value: number) => void;
}

export const BreathingOptions = ({
  breathingSeconds,
  setBreathingSeconds,
  pauseIntervalInSecond,
}: BreathingOptionsTypes) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="secondary">
          Settings
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Customization</DialogTitle>
          <DialogDescription>
            <div className="w-full">
              <p className="text-center">{`${breathingSeconds}s / cycle`}</p>

              <Slider
                className="py-4"
                defaultValue={[breathingSeconds]}
                min={5}
                max={30}
                step={1}
                onValueChange={(value) => {
                  setBreathingSeconds(Number(value));
                }}
              />

              <p className="text-center text-sm">
                {`Wait for ${pauseIntervalInSecond}s between cycle`}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
