import Link from "next/link";
import { BookIcon } from "~/components/Icons";

export default function HomePage() {
  return (
    <main
      className="
    min-h-screen bg-[#6f5de6] text-white"
    >
      <div className="mx-6 ">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          What do you need today?
        </h2>

        <Link href={"/meditation"}>
          <div className="mt-4 flex items-center rounded-lg bg-white bg-opacity-10 p-4">
            <BookIcon className="mr-2 h-6 w-6 text-white" />
            <div>
              <p className="font-semibold">Breathing Exercise</p>
              <p className="text-sm opacity-70">Stay clam and breath</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
