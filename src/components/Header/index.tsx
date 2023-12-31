import { useEffect, useState } from "react";
import { getServerAuthSession } from "~/server/auth";
import { LoginButton } from "../auth/login";
import { LogoutButton } from "../auth/logout";

export const Header = async () => {
  const auth = await getServerAuthSession();
  console.log(auth);

  // const [currentDateTimeString, setCurrentDateTimeString] = useState<
  //   string | null
  // >(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDateTimeString(new Date().toLocaleString());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-[#6f5de6] ">
      <div className="px-6 pt-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome {auth && auth.user ? auth.user.name : "Guest"}
        </h1>

        {auth && auth.user ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};
