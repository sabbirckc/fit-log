export default function Loading() {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-[#0b0d10] px-5">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-md text-[#ccff00]" />

        <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.15em] text-[#737b88]">
          Loading FitLog…
        </p>
      </div>
    </main>
  );
}