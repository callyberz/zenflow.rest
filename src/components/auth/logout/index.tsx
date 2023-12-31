"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      className="rounded bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-600"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Logout
    </button>
  );
};
