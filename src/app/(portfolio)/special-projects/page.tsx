import {
  BlinkFestivalContent,
  NightLightsDenverContent,
} from "@/components/SpecialProjectSections";

export default function SpecialProjectsPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <div className="flex max-w-3xl flex-col gap-16">
        <header>
          <h1 className="text-base font-bold uppercase tracking-wide">
            Special Projects
          </h1>
        </header>

        <nav className="flex flex-col gap-8" aria-label="Special projects">
          <a
            href="#night-lights-denver"
            className="group flex flex-col gap-2"
          >
            <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
              Night Lights Denver
            </h2>
            <p className="text-sm font-normal leading-relaxed opacity-70">
              With/in. — projection, performance, and light in Denver.
            </p>
          </a>

          <a href="#blink-festival" className="group flex flex-col gap-2">
            <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
              Blink Festival
            </h2>
            <p className="text-sm font-normal leading-relaxed opacity-70">
              FuTerra | I Was The Earth — immersive projection for BLINK 2024.
            </p>
          </a>
        </nav>
      </div>

      <div className="h-px w-full bg-black" aria-hidden="true" />

      <article
        id="night-lights-denver"
        className="flex scroll-mt-8 flex-col gap-14"
      >
        <NightLightsDenverContent />
      </article>

      <div className="h-px w-full bg-black" aria-hidden="true" />

      <article
        id="blink-festival"
        className="flex scroll-mt-8 flex-col gap-14"
      >
        <BlinkFestivalContent />
      </article>
    </div>
  );
}
