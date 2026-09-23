"use client";

import Link from "next/link";
import {
  Check,
  ChevronDown,
  Clock3,
  Flame,
  Star,
  X,
  ArrowRight,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanContent() {
  const { plan, saved, removeFromPlan, removeFromSaved, showToast, hydrated } =
    useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");
  const [doneIds, setDoneIds] = useState([]);

  /*
   * Loading state
   *
   * FitLogProvider restores localStorage first.
   * Until that happens, don't render the list.
   */
  if (!hydrated) {
    return (
      <main className="min-h-[calc(100vh-68px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="fitlog-container">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-md text-[#ccff00]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#737b88]">
                Loading workouts…
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const currentList = activeTab === "plan" ? plan : saved;

  /*
   * Sort current list
   */
  const sortedList = useMemo(() => {
    const list = [...currentList];

    if (sortBy === "duration") {
      list.sort((a, b) => Number(a.duration) - Number(b.duration));
    }

    if (sortBy === "calories") {
      list.sort((a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned));
    }

    if (sortBy === "rating") {
      list.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return list;
  }, [currentList, sortBy]);

  /*
   * Today's Plan metrics
   */
  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  /*
   * Mark workout as done
   */
  const handleMarkDone = (workout) => {
    setDoneIds((current) => {
      if (current.includes(workout.id)) {
        return current;
      }

      return [...current, workout.id];
    });

    showToast(`${workout.name} marked as done`, "success");
  };

  /*
   * Remove workout
   */
  const handleRemove = (workout) => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }

    setDoneIds((current) => current.filter((id) => id !== workout.id));
  };

  return (
    <main className="min-h-[calc(100vh-68px)] bg-[#0b0d10] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="fitlog-container">
        {/* Header */}
        <section>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
            Workout Log
          </p>

          <h1 className="fitlog-display text-4xl uppercase leading-none text-white sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-xs text-[#737b88]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Metrics */}
        <section className="mt-7 overflow-hidden rounded-xl border border-[#252b35] bg-[#11141a]">
          <div className="grid grid-cols-1 divide-y divide-[#252b35] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <Metric label="Exercises" value={totalExercises} />

            <Metric label="Minutes" value={totalMinutes} />

            <Metric label="Calories" value={totalCalories} />
          </div>
        </section>

        {/* Tabs + Sort */}
        <section className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="inline-flex w-fit rounded-lg border border-[#252b35] bg-[#11141a] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-[9px] font-semibold transition-all ${
                activeTab === "plan"
                  ? "bg-[#20252e] text-white"
                  : "text-[#737b88] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-[9px] font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#20252e] text-white"
                  : "text-[#737b88] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-[#626a77]">Sort By</span>

            <label className="relative">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="select select-sm h-8 min-h-8 appearance-none rounded-lg border border-[#252b35] bg-[#11141a] px-3 pr-8 text-[9px] font-medium text-[#c5cad2] outline-none focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>

                <option value="calories">Calories</option>

                <option value="rating">Rating</option>
              </select>

              <ChevronDown
                size={12}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737b88]"
              />
            </label>
          </div>
        </section>

        {/* List */}
        <section className="mt-4">
          {sortedList.length === 0 ? (
            <EmptyState activeTab={activeTab} />
          ) : (
            <div className="space-y-3">
              {sortedList.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  activeTab={activeTab}
                  done={doneIds.includes(workout.id)}
                  onDone={handleMarkDone}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/*
|--------------------------------------------------------------------------
| Metric
|--------------------------------------------------------------------------
*/

function Metric({ label, value }) {
  return (
    <div className="px-5 py-5 sm:px-6 sm:py-6">
      <p className="text-[9px] font-medium text-[#737b88]">{label}</p>

      <p className="fitlog-display mt-2 text-3xl leading-none text-white sm:text-4xl">
        {value}
      </p>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Workout Card
|--------------------------------------------------------------------------
*/

function PlanWorkoutCard({ workout, activeTab, done, onDone, onRemove }) {
  const { id, name, image, equipment, duration, caloriesBurned, rating } =
    workout;

  return (
    <article
      className={`rounded-xl border bg-[#11141a] p-3 transition-all sm:p-4 ${
        done ? "border-[#ccff00]/20 opacity-70" : "border-[#252b35]"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Thumbnail */}
        <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg bg-[#181c23] sm:h-20 sm:w-32">
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-all ${
              done ? "grayscale" : ""
            }`}
          />
        </div>

        {/* Information */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2
                className={`fitlog-display text-base uppercase leading-none ${
                  done ? "text-[#737b88] line-through" : "text-white"
                }`}
              >
                {name}
              </h2>

              <p className="mt-1.5 text-[9px] text-[#737b88]">{equipment}</p>
            </div>

            {/* Mobile remove */}
            <button
              type="button"
              onClick={() => onRemove(workout)}
              aria-label={`Remove ${name}`}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#626a77] transition-colors hover:bg-[#20252e] hover:text-white sm:hidden"
            >
              <X size={13} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Stat icon={<Clock3 size={11} />} value={`${duration} min`} />

            <Stat icon={<Flame size={11} />} value={`${caloriesBurned} kcal`} />

            <Stat
              icon={<Star size={11} fill="currentColor" />}
              value={rating}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={`/workout/${id}`}
            className="btn h-9 min-h-9 rounded-lg border border-[#303640] bg-transparent px-3 text-[8px] font-semibold uppercase tracking-wide text-[#c5cad2] hover:border-[#4a5260] hover:bg-[#181c23] hover:text-white"
          >
            View Details
          </Link>

          {activeTab === "plan" && (
            <button
              type="button"
              onClick={() => onDone(workout)}
              disabled={done}
              className={`btn h-9 min-h-9 rounded-lg border-none px-3 text-[8px] font-extrabold uppercase tracking-wide ${
                done
                  ? "bg-[#20251d] text-[#ccff00]"
                  : "bg-[#ccff00] text-black hover:bg-[#d8ff33]"
              }`}
            >
              <Check size={12} strokeWidth={3} />

              {done ? "Done" : "Mark as Done"}
            </button>
          )}

          {/* Desktop remove */}
          <button
            type="button"
            onClick={() => onRemove(workout)}
            aria-label={`Remove ${name}`}
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-[#626a77] transition-colors hover:bg-[#20252e] hover:text-white sm:flex"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Stats
|--------------------------------------------------------------------------
*/

function Stat({ icon, value }) {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] text-[#858d9b]">
      <span className="text-[#ccff00]">{icon}</span>

      {value}
    </span>
  );
}

/*
|--------------------------------------------------------------------------
| Empty State
|--------------------------------------------------------------------------
*/

function EmptyState({ activeTab }) {
  const isSaved = activeTab === "saved";

  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252b35] bg-[#0e1116] px-5 text-center">
      <h2 className="fitlog-display text-xl uppercase text-white">
        Nothing Here Yet
      </h2>

      <p className="mt-2 max-w-sm text-[10px] leading-5 text-[#737b88]">
        {isSaved
          ? "Save workouts from the library and keep them here for later."
          : "Browse the library and add a lift to get today moving."}
      </p>

      <Link
        href="/#library"
        className="btn mt-5 h-9 min-h-9 rounded-lg border-none bg-[#ccff00] px-4 text-[9px] font-extrabold uppercase text-black hover:bg-[#d8ff33]"
      >
        Go to workouts
        <ArrowRight size={12} />
      </Link>
    </div>
  );
}
