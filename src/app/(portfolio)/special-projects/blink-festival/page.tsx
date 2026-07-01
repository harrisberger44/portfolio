import ImageGallery from "@/components/ImageGallery";
import {
  BLINK_FESTIVAL_VIMEO_ID,
  getBlinkFestivalImages,
} from "@/lib/blink-festival";
import Link from "next/link";

export default function BlinkFestivalPage() {
  const images = getBlinkFestivalImages();

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
          Blink Festival | 2024
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          FuTerra | I Was The Earth.
        </h1>
        <p className="text-xs tracking-wide [font-variant:small-caps] opacity-65">
          role: concept/storyboard artist
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-sm font-normal leading-relaxed">
          <p>
            <em>FuTerra | I Was The Earth</em> was an immersive projection
            experience created for <em>BLINK 2024</em>, imagining a future city
            shaped by balance between technology, nature, and human connection. The
            work explored how shared presence, care, and togetherness can
            function as a spiritual force within an urban environment.
          </p>
          <p>
            Rather than positioning technology, nature, and humanity in
            opposition, the experience framed them as interdependent, offering a
            vision of a city where growth, restraint, and connection exist in
            harmony.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <p className="text-xs font-bold uppercase tracking-wide">
              Credits
            </p>
            <ul className="flex flex-col gap-1 text-sm font-normal leading-relaxed">
              <li>Executive Producer – Mason Thompson</li>
              <li>Creative Director – Jack Tajerstein</li>
              <li>Technical Director – Nate Wilkens</li>
              <li>Art Director | Illustrator – Grey Vanderwoude</li>
              <li>3D Artist – Shelly Boehm</li>
              <li>Music Design – Brad Schmitz</li>
              <li>Creature Design | Storyboard Artist – Harris Berger</li>
              <li>Production Coordinator – Emily Ho</li>
              <li>Motion Designer – Emma Todys</li>
              <li>Creature + Rigging – Hengye Xu</li>
            </ul>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
          <iframe
            src={`https://player.vimeo.com/video/${BLINK_FESTIVAL_VIMEO_ID}`}
            title="Blink Festival — FuTerra | I Was The Earth"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Gallery</h2>
        <ImageGallery images={images} altPrefix="Blink Festival" />
      </section>
    </div>
  );
}
