import textstyles from "@/utils/textstyles";

// fixes prerender Error
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function ComingSoon() {
  return (
    <div className={"flex h-screen justify-center items-center"}>
      <h1 className={textstyles.H1}>Coming Soon</h1>
    </div>
  );
}
