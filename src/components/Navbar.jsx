"use client";

import Link from "next/link";
import { Dumbbell, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const planCount = 0;
  const savedCount = 0;

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  const isPlanActive = pathname.startsWith("/my-plan");

  return (
    <header className="border-b border-[#1d222b] bg-[#0b0d10]">
      <div className="fitlog-container">
        <nav className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="FitLog home"
          >
            <img
              src="/images/logo.png"
              alt=""
              className="h-6 w-6 object-contain"
            />

            <span className="text-[15px] font-extrabold tracking-[-0.03em] text-white">
              FITLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-[11px] font-medium transition-colors ${
                isWorkoutActive
                  ? "bg-[#151b0b] text-[#ccff00]"
                  : "text-[#858d9b] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-[11px] font-medium transition-colors ${
                isPlanActive
                  ? "bg-[#151b0b] text-[#ccff00]"
                  : "text-[#858d9b] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Desktop Counters */}
          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-[10px] text-[#858d9b] transition-colors hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[9px] font-bold text-black">
                {planCount}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-[10px] text-[#858d9b] transition-colors hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#353b46] px-1.5 text-[9px] font-medium text-[#a4abb6]">
                {savedCount}
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <div className="dropdown dropdown-end">
              <button
                type="button"
                tabIndex={0}
                className="btn btn-ghost btn-sm h-9 min-h-9 border border-[#252b35] bg-[#11141a] px-3 text-[#858d9b] hover:bg-[#151922] hover:text-white"
                aria-label="Open navigation menu"
              >
                <span className="text-xs">Menu</span>
                <ChevronDown size={14} />
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[50] mt-3 w-48 rounded-xl border border-[#252b35] bg-[#11141a] p-2 shadow-2xl"
              >
                <li>
                  <Link
                    href="/"
                    className={
                      isWorkoutActive
                        ? "text-[#ccff00]"
                        : "text-[#858d9b]"
                    }
                  >
                    <Dumbbell size={15} />
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan"
                    className={
                      isPlanActive
                        ? "text-[#ccff00]"
                        : "text-[#858d9b]"
                    }
                  >
                    My Plan
                  </Link>
                </li>

                <li className="my-1 border-t border-[#252b35]" />

                <li>
                  <Link href="/my-plan">
                    <span>Plan</span>

                    <span className="ml-auto rounded-full bg-[#ccff00] px-2 py-0.5 text-[9px] font-bold text-black">
                      {planCount}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/my-plan">
                    <span>Saved</span>

                    <span className="ml-auto rounded-full border border-[#353b46] px-2 py-0.5 text-[9px] text-[#a4abb6]">
                      {savedCount}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}