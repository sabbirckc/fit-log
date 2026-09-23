import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <Hero />

      <WorkoutLibrary />
    </main>
  );
}