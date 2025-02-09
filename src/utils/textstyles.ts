import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

const fornire = localFont({
  src: "../../src/assets/fonts/fornire-light.woff2",
});

const montreal = localFont({
  src: "../../src/assets/fonts/montreal.woff",
});

const TextStyles = {
  H1: "font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tighter dark:text-white text-black tracking-tight",
  H1Gradient:
    "font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tighter text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-200",
  H2: "font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tighter dark:text-white text-black tracking-tight",
  H2Gradient:
    "font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tighter text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-200",
  H3: "font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tighter dark:text-white text-black tracking-tight",
  H3Gradient:
    "font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tighter text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-200",
  H4: "font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-tighter dark:text-white text-bold tracking-tight",
  Highlighted: "font-sans text-sm dark:text-white text-black",
  SmallText:
    "font-sans font-light text-[0.875rem] text-darkgrey dark:text-white",
  Text: "font-sans text-base sm:text-[0.875rem] text-black dark:text-white",
  BigText:
    "font-sans text-md md:text-xl text-black dark:text-white leading-tighter",
  SerifHeader: twMerge(
    montreal.className,
    "text-2xl md:text-2xl dark:text-white text-darkgrey leading-tighter mb-2",
  ),
  Elevated:
    "font-playfare font-bold text-lg md:text-lg dark:text-white text-darkgrey leading-tighter mb-2",
  BigTag: "font-sans text-[0.9375rem] dark:text-white text-black",
  Tag: "font-sans text-xs text-darkgrey dark:text-grey",
  LinkText: twMerge(
    fornire.className,
    "font-light text-2xl text-darkgrey dark:text-white hover:underline hover:decoration-1",
  ),
  BigHint:
    "font-sans font-extralight text-[1.0625rem] text-darkgrey dark:text-white",
  Hint: "font-sans text-[0.9375rem] text-darkgrey dark:text-white",
  CursiveHint:
    "font-playfare text-sm sm:text-[1.0625rem] text-darkgrey dark:text-grey",
} as const;

export default TextStyles;
