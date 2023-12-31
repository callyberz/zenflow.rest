"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="rounded bg-[#4338ca] px-4 py-2 font-bold text-white transition duration-200 ease-in-out hover:bg-[#4338ca] hover:shadow-lg"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};
