export default function WorkoutLoading() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-[#252b35] bg-[#11141a]"
        >
          <div className="h-48 animate-pulse bg-[#181c23]" />

          <div className="space-y-4 p-4">
            <div className="flex gap-2">
              <div className="h-5 w-14 animate-pulse rounded-full bg-[#20252e]" />
              <div className="h-5 w-14 animate-pulse rounded-full bg-[#20252e]" />
            </div>

            <div className="h-4 w-3/4 animate-pulse rounded bg-[#20252e]" />

            <div className="h-3 w-1/2 animate-pulse rounded bg-[#20252e]" />

            <div className="flex gap-4">
              <div className="h-3 w-16 animate-pulse rounded bg-[#20252e]" />
              <div className="h-3 w-16 animate-pulse rounded bg-[#20252e]" />
              <div className="h-3 w-12 animate-pulse rounded bg-[#20252e]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}