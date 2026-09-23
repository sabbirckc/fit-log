import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  if (!workout) {
    return null;
  }

  const {
    id,
    name,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="group block overflow-hidden rounded-xl border border-[#252b35] bg-[#11141a] transition-all duration-200 hover:-translate-y-1 hover:border-[#3b444f] hover:bg-[#141820]"
    >
      {/* Workout Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#181c23]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Muscle Groups */}
        <div className="flex min-h-[22px] flex-wrap gap-1.5">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-2 py-1 text-[8px] font-extrabold uppercase leading-none tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-3 line-clamp-1 text-[13px] font-extrabold uppercase tracking-[-0.01em] text-white">
          {name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 line-clamp-1 text-[10px] text-[#858d9b]">
          {equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-3 border-t border-[#20252e] pt-3 text-[9px] text-[#858d9b]">
          {/* Duration */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Clock3
              size={11}
              strokeWidth={2}
              className="text-[#ccff00]"
            />
            {duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Flame
              size={11}
              strokeWidth={2}
              className="text-[#ccff00]"
            />
            {caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Star
              size={11}
              strokeWidth={2}
              className="text-[#ccff00]"
            />
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}