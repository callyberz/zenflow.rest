"use client";

import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { useEffect } from "react";

export const CheckInButton = () => {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) {
      toast("Daily Check-in", {
        description: `Check-in successfully on ${new Date().toLocaleString()}`,
        action: {
          label: "Got it",
          onClick: () => {
            return;
          },
        },
      });
    }
  }, [pending]);

  return (
    <Button
      className="rounded bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-600"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      Check In
    </Button>
  );
};
