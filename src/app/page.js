import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function HomePage() {
  return (
    <main className="bg-[#0b0d10]">
      {/* Hero Section */}
      <Hero />

      {/* Workout Library */}
      <WorkoutLibrary />
    </main>
  );
}