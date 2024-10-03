import { redirect } from "next/navigation";

// fixes prerender Error
export const dynamic = "force-dynamic";

export default function NotFound() {
  return redirect("/nothing");
}
