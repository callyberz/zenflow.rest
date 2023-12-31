"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="rounded px-4 py-2 font-bold text-black"
      onClick={() => signIn()}
    >
      login
    </button>
  );
};
