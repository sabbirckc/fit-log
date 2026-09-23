const API_BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

/**
 * Fetch all FitLog workouts.
 */
export async function getWorkouts() {
  const response = await fetch(API_BASE_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts. Server responded with ${response.status}.`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid workout data received from the API.");
  }

  return data;
}

/**
 * Fetch a single workout by ID.
 */
export async function getWorkoutById(id) {
  if (!id) {
    throw new Error("Workout ID is required.");
  }

  const response = await fetch(`${API_BASE_URL}/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Workout not found.");
    }

    throw new Error(
      `Failed to fetch workout. Server responded with ${response.status}.`
    );
  }

  const data = await response.json();

  return data;
}