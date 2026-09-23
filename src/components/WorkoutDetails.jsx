"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Gauge,
  ListChecks,
  Star,
} from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
  const {
    addToPlan,
    addToSaved,
    isInPlan,
    isSaved,
  } = useFitLog();

  const {
    id,
    name,
    image,
    muscleGroups = [],
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions = [],
  } = workout;

  const alreadyInPlan = isInPlan(id);
  const alreadySaved = isSaved(id);

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  const handleSave = () => {
    addToSaved(workout);
  };

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="fitlog-container">
        {/* Back Link */}
        <Link
          href="/#library"
          className="mb-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#858d9b] transition-colors hover:text-white"
        >
          <ArrowLeft size={13} />
          Back to library
        </Link>

        {/* Main Details Container */}
        <div className="overflow-hidden rounded-xl border border-[#252b35] bg-[#11141a]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            {/* Image */}
            <div className="relative min-h-[320px] bg-[#181c23] sm:min-h-[460px] lg:min-h-[620px]">
              <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Difficulty */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-[#ccff00]/30 bg-[#0b0d10]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#ccff00] backdrop-blur-sm">
                  {difficulty}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 sm:p-7 lg:p-8">
              {/* Muscle Groups */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="fitlog-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl">
                {name}
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-xs leading-5 text-[#858d9b] sm:text-[13px]">
                {description}
              </p>

              {/* Specifications */}
              <div className="mt-7 overflow-hidden rounded-xl border border-[#252b35] bg-[#0e1116]">
                <div className="border-b border-[#252b35] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Gauge
                      size={13}
                      className="text-[#ccff00]"
                    />

                    <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                      Workout Details
                    </h2>
                  </div>
                </div>

                <div className="divide-y divide-[#20252e]">
                  <SpecRow
                    label="Equipment"
                    value={equipment}
                  />

                  <SpecRow
                    label="Difficulty"
                    value={difficulty}
                  />

                  <SpecRow
                    label="Sets"
                    value={sets}
                  />

                  <SpecRow
                    label="Reps"
                    value={reps}
                  />

                  <SpecRow
                    label="Duration"
                    value={`${duration} min`}
                  />

                  <SpecRow
                    label="Calories"
                    value={`${caloriesBurned} kcal`}
                  />

                  <SpecRow
                    label="Rating"
                    value={
                      <span className="inline-flex items-center gap-1">
                        {rating}

                        <Star
                          size={11}
                          fill="currentColor"
                          className="text-[#ccff00]"
                        />
                      </span>
                    }
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-7">
                <div className="mb-4 flex items-center gap-2">
                  <ListChecks
                    size={14}
                    className="text-[#ccff00]"
                  />

                  <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Instructions
                  </h2>
                </div>

                <ol className="space-y-3">
                  {instructions.map((instruction, index) => (
                    <li
                      key={`${index}-${instruction}`}
                      className="flex gap-3 text-[11px] leading-5 text-[#858d9b]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#303640] text-[8px] font-bold text-[#ccff00]">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                {/* Add To Plan */}
                <button
                  type="button"
                  onClick={handleAddToPlan}
                  disabled={alreadyInPlan}
                  className={`btn h-11 min-h-11 flex-1 rounded-lg border-none px-4 text-[9px] font-extrabold uppercase tracking-[0.06em] ${
                    alreadyInPlan
                      ? "bg-[#242a20] text-[#ccff00]"
                      : "bg-[#ccff00] text-black hover:bg-[#d8ff33]"
                  }`}
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                  />

                  {alreadyInPlan
                    ? "Already in today's plan"
                    : "Add to today's plan"}
                </button>

                {/* Save */}
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={alreadySaved}
                  className={`btn h-11 min-h-11 flex-1 rounded-lg border px-4 text-[9px] font-bold uppercase tracking-[0.06em] ${
                    alreadySaved
                      ? "border-[#ccff00]/30 bg-[#142000] text-[#ccff00]"
                      : "border-[#303640] bg-transparent text-[#c2c7cf] hover:border-[#454d59] hover:bg-[#151922]"
                  }`}
                >
                  <Bookmark
                    size={14}
                    fill={alreadySaved ? "currentColor" : "none"}
                  />

                  {alreadySaved
                    ? "Saved"
                    : "Save for later"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#626a77]">
        {label}
      </span>

      <span className="text-right text-[10px] font-medium text-[#c5cad2]">
        {value}
      </span>
    </div>
  );
}