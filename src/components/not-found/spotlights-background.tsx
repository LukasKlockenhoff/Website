import { twMerge } from "tailwind-merge";

export default function SpotlightsBackground() {
  return (
    <div
      className={twMerge(
        "fixed md:hidden w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-90% to-10% from-secondary to-secondary/80 blur-3xl top-32 left-0",
      )}
    />
  );
}
