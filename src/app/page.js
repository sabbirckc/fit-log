import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <Hero />

      {/* Library section will be added in Part 6 */}
      <section
        id="library"
        className="min-h-[200px] bg-[#0b0d10]"
      />
    </main>
  );
}