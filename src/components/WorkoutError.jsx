export default function WorkoutError({ message, onRetry }) {
  return (
    <div className="rounded-xl border border-red-900/40 bg-[#11141a] px-6 py-12 text-center">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400">
        !
      </div>

      <h3 className="text-sm font-bold uppercase tracking-wide text-white">
        Unable to load workouts
      </h3>

      <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#858d9b]">
        {message || "Something went wrong while loading the workout library."}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="btn btn-sm mt-5 border-none bg-[#ccff00] text-black hover:bg-[#d8ff33]"
        >
          Try Again
        </button>
      )}
    </div>
  );
}