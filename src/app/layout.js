import "./globals.css";
import Navbar from "@/components/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense workout companion for discovering, planning, and tracking your workouts.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          {children}
        </FitLogProvider>
      </body>
    </html>
  );
}