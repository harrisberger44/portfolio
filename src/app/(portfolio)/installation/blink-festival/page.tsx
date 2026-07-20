import Link from "next/link";
import { BlinkFestivalContent } from "@/components/SpecialProjectSections";

export default function BlinkFestivalPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <div>
        <Link
          href="/installation"
          className="text-xs font-bold uppercase tracking-wide opacity-35 transition-opacity hover:opacity-65"
        >
          ← Installation
        </Link>
      </div>

      <BlinkFestivalContent />
    </div>
  );
}
