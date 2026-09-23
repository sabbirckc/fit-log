"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();

  const {
    plan,
    saved,
  } = useFitLog();

  const planCount = plan?.length || 0;
  const savedCount = saved?.length || 0;

  const isWorkoutPage =
    pathname === "/" || pathname.startsWith("/workout/");

  const isMyPlanPage = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#20252e] bg-[#0b0d10]/95 backdrop-blur-md">
      <nav className="fitlog-container">
        <div className="relative flex h-[68px] items-center justify-between">

          {/* =====================================================
              LEFT — LOGO
          ====================================================== */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="FitLog home"
          >
            <Dumbbell
              size={19}
              strokeWidth={2.8}
              className="text-[#ccff00]"
            />

            <span className="text-[13px] font-extrabold uppercase tracking-[-0.04em] text-white">
              FitLog
            </span>
          </Link>


          {/* =====================================================
              CENTER — NAVIGATION
          ====================================================== */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">

            {/* Workouts */}
            <Link
              href="/"
              className={`
                rounded-full px-4 py-2
                text-[9px] font-medium
                transition-all duration-200
                ${
                  isWorkoutPage
                    ? "bg-[#172000] text-[#ccff00]"
                    : "text-[#858d9b] hover:bg-[#14171c] hover:text-white"
                }
              `}
            >
              Workouts
            </Link>


            {/* My Plan */}
            <Link
              href="/my-plan"
              className={`
                rounded-full px-4 py-2
                text-[9px] font-medium
                transition-all duration-200
                ${
                  isMyPlanPage
                    ? "bg-[#172000] text-[#ccff00]"
                    : "text-[#858d9b] hover:bg-[#14171c] hover:text-white"
                }
              `}
            >
              My Plan
            </Link>

          </div>


          {/* =====================================================
              RIGHT — PLAN / SAVED COUNTERS
          ====================================================== */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">

            {/* ---------------- PLAN ---------------- */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-1.5"
              aria-label={`Today's plan: ${planCount} workouts`}
            >
              <span className="text-[9px] font-medium text-[#858d9b] transition-colors group-hover:text-white">
                Plan
              </span>

              <span
                className="
                  flex h-[19px] min-w-[19px]
                  items-center justify-center
                  rounded-full
                  bg-[#ccff00]
                  px-1.5
                  text-[8px]
                  font-extrabold
                  text-black
                "
              >
                {planCount}
              </span>
            </Link>


            {/* ---------------- SAVED ---------------- */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-1.5"
              aria-label={`Saved workouts: ${savedCount}`}
            >
              <span className="text-[9px] font-medium text-[#858d9b] transition-colors group-hover:text-white">
                Saved
              </span>

              <span
                className="
                  flex h-[19px] min-w-[19px]
                  items-center justify-center
                  rounded-full
                  border border-[#303640]
                  bg-transparent
                  px-1.5
                  text-[8px]
                  font-medium
                  text-[#858d9b]
                  transition-colors
                  group-hover:border-[#ccff00]
                  group-hover:text-[#ccff00]
                "
              >
                {savedCount}
              </span>
            </Link>

          </div>

        </div>
      </nav>
    </header>
  );
}