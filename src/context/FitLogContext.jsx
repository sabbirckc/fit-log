"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const FitLogContext = createContext(null);

const PLAN_STORAGE_KEY = "fitlog-todays-plan";
const SAVED_STORAGE_KEY = "fitlog-saved-workouts";

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const [hydrated, setHydrated] = useState(false);

  const [toast, setToast] = useState(null);

  
  // Load data from localStorage


  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
      const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

      if (storedPlan) {
        const parsedPlan = JSON.parse(storedPlan);

        if (Array.isArray(parsedPlan)) {
          setPlan(parsedPlan);
        }
      }

      if (storedSaved) {
        const parsedSaved = JSON.parse(storedSaved);

        if (Array.isArray(parsedSaved)) {
          setSaved(parsedSaved);
        }
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setHydrated(true);
    }
  }, []);


  // Save data to localStorage


  useEffect(() => {
    if (!hydrated) {
      return;
    }

    try {
      localStorage.setItem(
        PLAN_STORAGE_KEY,
        JSON.stringify(plan)
      );

      localStorage.setItem(
        SAVED_STORAGE_KEY,
        JSON.stringify(saved)
      );
    } catch (error) {
      console.error("Failed to save FitLog data:", error);
    }
  }, [plan, saved, hydrated]);


  // Toast


  const showToast = useCallback((message, type = "success") => {
    setToast({
      id: Date.now(),
      message,
      type,
    });
  }, []);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast(null);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);


  // Add workout to Today's Plan


  const addToPlan = useCallback(
    (workout) => {
      if (!workout) {
        return false;
      }

      if (plan.some((item) => item.id === workout.id)) {
        showToast("Workout is already in today's plan", "warning");
        return false;
      }

      if (plan.length >= 5) {
        showToast(
          "Today's plan is full. Maximum 5 lifts.",
          "warning"
        );

        return false;
      }

      setPlan((currentPlan) => [
        ...currentPlan,
        workout,
      ]);

      showToast("Added to today's plan", "success");

      return true;
    },
    [plan, showToast]
  );


  // Remove workout from Today's Plan


  const removeFromPlan = useCallback(
    (workoutId) => {
      setPlan((currentPlan) =>
        currentPlan.filter(
          (workout) => workout.id !== workoutId
        )
      );

      showToast("Removed from today's plan", "success");
    },
    [showToast]
  );


  // Add workout to Saved


  const addToSaved = useCallback(
    (workout) => {
      if (!workout) {
        return false;
      }

      if (saved.some((item) => item.id === workout.id)) {
        showToast("Workout is already saved", "warning");
        return false;
      }

      setSaved((currentSaved) => [
        ...currentSaved,
        workout,
      ]);

      showToast("Saved for later", "success");

      return true;
    },
    [saved, showToast]
  );


  // Remove workout from Saved


  const removeFromSaved = useCallback(
    (workoutId) => {
      setSaved((currentSaved) =>
        currentSaved.filter(
          (workout) => workout.id !== workoutId
        )
      );

      showToast("Removed from saved", "success");
    },
    [showToast]
  );


  // Check if workout exists

  const isInPlan = useCallback(
    (workoutId) => {
      return plan.some(
        (workout) => workout.id === workoutId
      );
    },
    [plan]
  );

  const isSaved = useCallback(
    (workoutId) => {
      return saved.some(
        (workout) => workout.id === workoutId
      );
    },
    [saved]
  );


  // Context value


  const value = {
    plan,
    saved,

    planCount: plan.length,
    savedCount: saved.length,

    addToPlan,
    removeFromPlan,

    addToSaved,
    removeFromSaved,

    isInPlan,
    isSaved,

    showToast,

    hydrated,
  };

  return (
    <FitLogContext.Provider value={value}>
      {children}

      {/* Global Toast */}
      {toast && (
        <div className="toast toast-bottom toast-center z-[9999]">
          <div
            className={`alert ${
              toast.type === "warning"
                ? "alert-warning"
                : "alert-success"
            }`}
          >
            <span className="text-xs font-semibold">
              {toast.message}
            </span>
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
}


// Custom hook


export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}