import ContentBlock from "@/components/ContentBlock";
import Link from "next/link";

export default function SpecialProjectsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">
          Special Projects
        </h1>
      </header>

      <ContentBlock
        text="Self-initiated and experimental work lives here — personal series, collaborations, and one-off explorations."
      />

      <section className="flex flex-col gap-4">
        <Link
          href="/special-projects/night-lights-denver"
          className="group flex flex-col gap-2"
        >
          <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
            Night Lights Denver
          </h2>
          <p className="text-sm font-normal leading-relaxed opacity-70">
            With/in. — projection, performance, and light in Denver.
          </p>
        </Link>
      </section>
    </div>
  );
}
