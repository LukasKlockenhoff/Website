import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";

// fixes prerender Error
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function NotFound() {
  return (
    <div className="w-full h-3/4 dark:bg-black bg-white flex justify-center items-center flex-col gap-y-10">
      <h2
        className={twMerge(
          Textstyles.H1Gradient,
          "flex content-center text-center sm:text-3xl bg-gradient-to-b from-white dark:from-gray-900 via-purple-300 dark:via-purple-900 to-violet-600 dark:to-violet-600 bg-clip-text",
        )}
      >
        404
      </h2>
    </div>
  );
}
