import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export const metadata = {
  title: "Page Not Found — FitLog",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-[#0b0d10] px-5 py-16">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#303640] bg-[#11141a]">
          <Dumbbell
            size={22}
            className="text-[#ccff00]"
          />
        </div>

        {/* 404 */}
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          404 — Page Not Found
        </p>

        <h1 className="fitlog-display mt-3 text-5xl uppercase leading-none text-white sm:text-6xl">
          Lost Your Set?
        </h1>

        <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-[#737b88]">
          This workout page doesn't exist. Head back to
          the library and find something worth lifting.
        </p>

        <Link
          href="/#library"
          className="btn mt-7 h-11 min-h-11 rounded-lg border-none bg-[#ccff00] px-5 text-[9px] font-extrabold uppercase tracking-wide text-black hover:bg-[#d8ff33]"
        >
          <ArrowLeft size={13} />
          Back to workouts
        </Link>
      </div>
    </main>
  );
}