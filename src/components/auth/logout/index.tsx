"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export const LogoutButton = () => {
  return (
    <Button
      className="rounded bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-600"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Logout
    </Button>
  );
};
