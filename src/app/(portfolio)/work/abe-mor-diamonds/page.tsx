import Link from "next/link";
import { AbeMorDiamondsContent } from "@/components/WorkProjectSections";

export default function AbeMorDiamondsPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <div>
        <Link
          href="/work"
          className="text-xs font-bold uppercase tracking-wide opacity-35 transition-opacity hover:opacity-65"
        >
          ← Work
        </Link>
      </div>

      <AbeMorDiamondsContent />
    </div>
  );
}
