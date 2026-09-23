export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0d10] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="fitlog-container">
        {/* Back skeleton */}
        <div className="mb-5 h-4 w-28 animate-pulse rounded bg-[#181c23]" />

        <div className="overflow-hidden rounded-xl border border-[#252b35] bg-[#11141a]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            {/* Image skeleton */}
            <div className="min-h-[320px] animate-pulse bg-[#181c23] sm:min-h-[460px] lg:min-h-[620px]" />

            {/* Content skeleton */}
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="flex gap-2">
                <div className="h-5 w-14 animate-pulse rounded-full bg-[#20252e]" />
                <div className="h-5 w-14 animate-pulse rounded-full bg-[#20252e]" />
              </div>

              <div className="mt-5 h-12 w-4/5 animate-pulse rounded bg-[#20252e]" />

              <div className="mt-4 space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-[#20252e]" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-[#20252e]" />
              </div>

              <div className="mt-7 overflow-hidden rounded-xl border border-[#252b35]">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-[#20252e] px-4 py-3 last:border-b-0"
                  >
                    <div className="h-2 w-20 animate-pulse rounded bg-[#20252e]" />
                    <div className="h-2 w-24 animate-pulse rounded bg-[#20252e]" />
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="h-3 w-24 animate-pulse rounded bg-[#20252e]" />

                <div className="mt-4 space-y-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex gap-3"
                    >
                      <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-[#20252e]" />

                      <div className="h-3 flex-1 animate-pulse rounded bg-[#20252e]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                <div className="h-11 flex-1 animate-pulse rounded-lg bg-[#20252e]" />
                <div className="h-11 flex-1 animate-pulse rounded-lg bg-[#20252e]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}