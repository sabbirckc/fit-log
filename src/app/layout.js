import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense workout companion for discovering, planning, and tracking your workouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </FitLogProvider>
      </body>
    </html>
  );
}