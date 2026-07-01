import ImageGallery from "@/components/ImageGallery";
import {
  getNightLightsDenverImages,
  NIGHT_LIGHTS_YOUTUBE_ID,
} from "@/lib/night-lights-denver";
import Link from "next/link";

export default function NightLightsDenverPage() {
  const images = getNightLightsDenverImages();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <div>
        <Link
          href="/special-projects"
          className="text-xs font-bold uppercase tracking-wide opacity-35 transition-opacity hover:opacity-65"
        >
          ← Special Projects
        </Link>
      </div>

      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide">
          Night Lights Denver | April 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          With/in.
        </h1>
        <p className="text-xs tracking-wide [font-variant:small-caps] opacity-65">
          role: artistic director
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-sm font-normal leading-relaxed">
          <p>
            <em>With/In</em> is a projection-based artwork/animation created for{" "}
            <em>Night Lights Denver</em> that tells a story set in a fantastical
            dreamscape where childhood games and toys become mystical rituals for
            personal enlightenment.
          </p>
          <p>
            The work explores the transformations that are most dramatic in our
            youth but recur in all seasons of life: finding your voice amid
            alienation, finding your creativity in solitude, and finally finding
            yourself by uplifting the community around you.
          </p>
          <p>
            The work was projected onto the Daniel&apos;s &amp; Fisher Tower in
            downtown Denver from April 1–30 2026.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <p className="text-xs font-bold uppercase tracking-wide">
              Credits
            </p>
            <ul className="flex flex-col gap-1 text-sm font-normal leading-relaxed">
              <li>Executive Producer/Creative Director – Emily Ho</li>
              <li>Artistic Director | Lead Illustration – Harris Berger</li>
              <li>Production Coordinator – Brad Schmitz</li>
              <li>Lead Motion Designer – Emma Todys</li>
            </ul>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
          <iframe
            src={`https://www.youtube.com/embed/${NIGHT_LIGHTS_YOUTUBE_ID}`}
            title="Night Lights Denver"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Gallery</h2>
        <ImageGallery images={images} altPrefix="Night Lights Denver" />
      </section>
    </div>
  );
}
