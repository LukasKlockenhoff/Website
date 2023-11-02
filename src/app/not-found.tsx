import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Textstyles from "@/utils/textstyles";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center flex-col gap-y-10">
      <div className={"flex flex-col items-center gap-y-2"}>
        <h2 className={twMerge(Textstyles.H2)}>
          404 - This Page does not Exist
        </h2>
      </div>
      <div className={"flex flex-col items-center gap-y-2"}>
        <h3 className={twMerge(Textstyles.H3)}>But try here:</h3>
        <Button asChild variant={"link"}>
          <Link href="/">🏡 Return Home</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href="/projects">👨‍💻 Go To Projects</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href="/cv">💼 Go To CV</Link>
        </Button>
      </div>
    </div>
  );
}
