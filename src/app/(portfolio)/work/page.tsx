import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16">
      <header>
        <h1 className="text-base font-bold uppercase tracking-wide">Work</h1>
      </header>

      <section className="flex flex-col gap-8">
        <Link
          href="/work/kathryn-markel-fine-arts"
          className="group flex flex-col gap-2"
        >
          <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
            Kathryn Markel Fine Arts
          </h2>
          <p className="text-sm font-normal leading-relaxed opacity-70">
            Registrar | May 2024 - Present
          </p>
        </Link>

        <Link
          href="/work/abe-mor-diamonds"
          className="group flex flex-col gap-2"
        >
          <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
            Abe Mor Diamonds
          </h2>
          <p className="text-sm font-normal leading-relaxed opacity-70">
            Marketing &amp; Operations | February 2022 - February 2023
          </p>
        </Link>

        <Link
          href="/work/alexa-meade-art"
          className="group flex flex-col gap-2"
        >
          <h2 className="text-base font-bold uppercase tracking-wide transition-opacity group-hover:opacity-65">
            Alexa Meade Art
          </h2>
          <p className="text-sm font-normal leading-relaxed opacity-70">
            Studio Assistant | July 2022 - September 2023
          </p>
        </Link>
      </section>
    </div>
  );
}
