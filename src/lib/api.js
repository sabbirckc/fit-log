const API_BASE_URL =
  "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  const response = await fetch(API_BASE_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts: ${response.status}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error(
      "Invalid workout API response."
    );
  }

  return data;
}

export async function getWorkoutById(id) {
  const response = await fetch(
    `${API_BASE_URL}/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workout: ${response.status}`
    );
  }

  const data = await response.json();

  return data;
}