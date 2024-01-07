"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { increaseCheckinCount } from "../action";

export const CheckInButton = () => {
  const checkIn = async () => {
    const result = await increaseCheckinCount();
    if (!result) {
      return;
    }
    toast("Daily Check-in", {
      description: `Check-in successfully on ${new Date().toLocaleString()}`,
      action: {
        label: "Got it",
        onClick: () => {
          return;
        },
      },
    });
  };

  return (
    <Button 
    className="rounded bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-600" onClick={checkIn}>
      Check In
    </Button>
  );
};
