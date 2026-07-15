import Link from "next/link";

export default function SpecialProjectsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">
          Special Projects
        </h1>
      </header>

      <section className="flex flex-col gap-8">
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

        <Link
          href="/special-projects/blink-festival"
          className="group flex flex-col gap-2"
        >
          <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
            Blink Festival
          </h2>
          <p className="text-sm font-normal leading-relaxed opacity-70">
            FuTerra | I Was The Earth — immersive projection for BLINK 2024.
          </p>
        </Link>
      </section>
    </div>
  );
}
