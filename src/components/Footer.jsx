"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#20252e] bg-[#0b0d10]">
      <div className="fitlog-container">
        <div className="flex min-h-[72px] flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="FitLog home"
          >
            <Dumbbell
              size={15}
              strokeWidth={2.5}
              className="text-[#ccff00]"
            />

            <span className="text-[11px] font-extrabold uppercase tracking-[-0.02em] text-white">
              FitLog
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-center text-[8px] text-[#626a77] sm:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}