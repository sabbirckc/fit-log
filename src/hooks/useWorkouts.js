"use client";

import { useCallback, useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadWorkouts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getWorkouts();

      setWorkouts(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading workouts."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWorkouts();
  }, [loadWorkouts]);

  return {
    workouts,
    loading,
    error,
    retry: loadWorkouts,
  };
}