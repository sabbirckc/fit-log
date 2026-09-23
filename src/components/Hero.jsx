import Link from "next/link";
import { ArrowDown, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0b0d10] px-4 py-5 sm:px-6 lg:px-8">
      <div className="fitlog-container">
        <div className="relative overflow-hidden border border-[#252b35] bg-[#11141a]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 h-px w-full bg-[#ccff00]/20" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-[#252b35]" />
          </div>

          <div className="grid min-h-[420px] grid-cols-1 items-center lg:min-h-[480px] lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#ccff00]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ccff00]">
                  Workout Library
                </span>
              </div>

              {/* Heading */}
              <h1 className="fitlog-display max-w-[650px] text-[42px] leading-[0.94] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[64px]">
                TRAIN WITH INTENT.
                <br />
                LOG EVERY SET.
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[510px] text-[13px] leading-6 text-[#858d9b] sm:text-sm">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today&apos;s plan, and watch the week&apos;s
                work add up.
              </p>

              {/* CTA */}
              <Link
                href="#library"
                className="group mt-8 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-[#d8ff33] hover:shadow-[0_0_25px_rgba(204,255,0,0.12)]"
              >
                <Dumbbell
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:rotate-[-8deg]"
                />

                Browse Workouts

                <ArrowDown
                  size={13}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative flex h-full min-h-[320px] items-end justify-center overflow-hidden lg:min-h-[480px] lg:items-center">
              {/* Glow behind image */}
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/[0.035] blur-3xl sm:h-[350px] sm:w-[350px]" />

              <img
                src="/images/banner.png"
                alt="Workout illustration"
                className="relative z-10 h-auto w-[250px] object-contain sm:w-[310px] lg:w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}