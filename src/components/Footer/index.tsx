import Link from "next/link";
import { ClockIcon, HomeIcon, PersonStandingIcon } from "../Icons";

export const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-[#4338ca] bg-opacity-90 p-4">
      <div className="flex justify-between">
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-white" />
        </Link>
        <Link href="/history">
          <ClockIcon className="h-6 w-6 text-white" />
        </Link>
        <Link href="/account">
          <PersonStandingIcon className="h-6 w-6 text-white" />
        </Link>
      </div>
    </div>
  );
};
