import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";

export default async function About() {
  return (
    <div
      className={
        "w-full h-full flex justify-center dark:bg-background bg-white"
      }
    >
      <h1
        className={twMerge(
          TextStyles.H2Gradient,
          "flex justify-center bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-100",
        )}
      >
        About
      </h1>
    </div>
  );
}
