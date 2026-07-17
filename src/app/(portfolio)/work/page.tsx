import {
  AbeMorDiamondsContent,
  AlexaMeadeArtContent,
  KathrynMarkelFineArtsContent,
} from "@/components/WorkProjectSections";

export default function WorkPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <div className="flex max-w-3xl flex-col gap-16">
        <header>
          <h1 className="text-base font-bold uppercase tracking-wide">Work</h1>
        </header>

        <nav className="flex flex-col gap-8" aria-label="Work projects">
          <a
            href="#kathryn-markel-fine-arts"
            className="group flex flex-col gap-2"
          >
            <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
              Kathryn Markel Fine Arts
            </h2>
            <p className="text-sm font-normal leading-relaxed opacity-70">
              Registrar | May 2024 - Present
            </p>
          </a>

          <a href="#abe-mor-diamonds" className="group flex flex-col gap-2">
            <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
              Abe Mor Diamonds
            </h2>
            <p className="text-sm font-normal leading-relaxed opacity-70">
              Marketing &amp; Operations | February 2022 - February 2023
            </p>
          </a>

          <a href="#alexa-meade-art" className="group flex flex-col gap-2">
            <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
              Alexa Meade Art
            </h2>
            <p className="text-sm font-normal leading-relaxed opacity-70">
              Studio Assistant | July 2022 - September 2023
            </p>
          </a>
        </nav>
      </div>

      <div className="h-px w-full bg-black" aria-hidden="true" />

      <article
        id="kathryn-markel-fine-arts"
        className="flex scroll-mt-8 flex-col gap-14"
      >
        <KathrynMarkelFineArtsContent />
      </article>

      <div className="h-px w-full bg-black" aria-hidden="true" />

      <article
        id="abe-mor-diamonds"
        className="flex scroll-mt-8 flex-col gap-14"
      >
        <AbeMorDiamondsContent />
      </article>

      <div className="h-px w-full bg-black" aria-hidden="true" />

      <article
        id="alexa-meade-art"
        className="flex scroll-mt-8 flex-col gap-14"
      >
        <AlexaMeadeArtContent />
      </article>
    </div>
  );
}
