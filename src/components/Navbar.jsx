"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();

  const { planCount, savedCount } = useFitLog();

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workout/");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[#20252e] bg-[#0b0d10]">
      <div className="fitlog-container">
        <div className="flex min-h-[68px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="FitLog home"
          >
            <Dumbbell size={18} strokeWidth={2.5} className="text-[#ccff00]" />

            <span className="text-sm font-extrabold uppercase tracking-[-0.03em] text-white">
              FitLog
            </span>
          </Link>

          {/* Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-[10px] font-semibold transition-colors ${
                isWorkoutsActive
                  ? "bg-[#142000] text-[#ccff00]"
                  : "text-[#858d9b] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-[10px] font-semibold transition-colors ${
                isPlanActive
                  ? "bg-[#142000] text-[#ccff00]"
                  : "text-[#858d9b] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </nav>

          {/* Counters */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link href="/my-plan" className="group flex items-center gap-1.5">
              <span className="text-[9px] font-medium text-[#858d9b] transition-colors group-hover:text-white">
                Plan
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[9px] font-extrabold text-black">
                {planCount}
              </span>
            </Link>

            <Link href="/my-plan" className="group flex items-center gap-1.5">
              <span className="text-[9px] font-medium text-[#858d9b] transition-colors group-hover:text-white">
                Saved
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#303640] px-1.5 text-[9px] font-semibold text-[#b5bbc5] transition-colors group-hover:border-[#59616d]">
                {savedCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex items-center justify-center gap-1 border-t border-[#20252e] py-2 sm:hidden">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[9px] font-semibold ${
              isWorkoutsActive
                ? "bg-[#142000] text-[#ccff00]"
                : "text-[#858d9b]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[9px] font-semibold ${
              isPlanActive ? "bg-[#142000] text-[#ccff00]" : "text-[#858d9b]"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
