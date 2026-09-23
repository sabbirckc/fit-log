import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutDetails from "@/components/WorkoutDetails";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkoutById(id);
  } catch {
    notFound();
  }

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <WorkoutDetails workout={workout} />
    </main>
  );
}