import Link from "next/link";
import { NightLightsDenverContent } from "@/components/SpecialProjectSections";

export default function NightLightsDenverPage() {
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

      <NightLightsDenverContent />
    </div>
  );
}
