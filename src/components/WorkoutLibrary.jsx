"use client";

import { LibraryBig } from "lucide-react";
import useWorkouts from "@/hooks/useWorkouts";
import WorkoutCard from "@/components/WorkoutCard";
import WorkoutLoading from "@/components/WorkoutLoading";
import WorkoutError from "@/components/WorkoutError";

export default function WorkoutLibrary() {
  const {
    workouts,
    loading,
    error,
    retry,
  } = useWorkouts();

  return (
    <section
      id="library"
      className="bg-[#0b0d10] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="fitlog-container">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LibraryBig
                size={13}
                strokeWidth={2.5}
                className="text-[#ccff00]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ccff00]">
                Workout Library
              </span>
            </div>

            <h2 className="fitlog-display text-3xl uppercase leading-none text-white sm:text-4xl">
              The Library
            </h2>

            <p className="mt-2 text-[11px] text-[#858d9b] sm:text-xs">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {!loading && !error && workouts.length > 0 && (
            <span className="text-[9px] uppercase tracking-[0.12em] text-[#5f6672]">
              {workouts.length} Workouts
            </span>
          )}
        </div>

        {/* Loading */}
        {loading && <WorkoutLoading />}

        {/* Error */}
        {!loading && error && (
          <WorkoutError
            message={error}
            onRetry={retry}
          />
        )}

        {/* Empty State */}
        {!loading && !error && workouts.length === 0 && (
          <div className="rounded-xl border border-dashed border-[#252b35] bg-[#11141a] px-6 py-16 text-center">
            <h3 className="text-sm font-bold uppercase text-white">
              No workouts found
            </h3>

            <p className="mt-2 text-xs text-[#858d9b]">
              There are currently no workouts available in the library.
            </p>
          </div>
        )}

        {/* Workout Grid */}
        {!loading && !error && workouts.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}