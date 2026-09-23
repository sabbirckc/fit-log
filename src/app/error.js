"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Dumbbell } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-[#0b0d10] px-5 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#303640] bg-[#11141a]">
          <Dumbbell
            size={22}
            className="text-[#ccff00]"
          />
        </div>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          Something went wrong
        </p>

        <h1 className="fitlog-display mt-3 text-4xl uppercase leading-none text-white sm:text-5xl">
          Workout Interrupted
        </h1>

        <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-[#737b88]">
          Something went wrong while loading this
          page. Try again or return to the workout
          library.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="btn h-10 min-h-10 rounded-lg border-none bg-[#ccff00] px-5 text-[9px] font-extrabold uppercase text-black hover:bg-[#d8ff33]"
          >
            <RefreshCcw size={13} />
            Try Again
          </button>

          <Link
            href="/#library"
            className="btn h-10 min-h-10 rounded-lg border border-[#303640] bg-transparent px-5 text-[9px] font-semibold uppercase text-[#c5cad2] hover:bg-[#151922]"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    </main>
  );
}