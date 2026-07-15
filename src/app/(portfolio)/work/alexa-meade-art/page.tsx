import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import {
  ALEXA_MEADE_HERO_IMAGE,
  getAlexaMeadeImages,
} from "@/lib/alexa-meade-art";

export default function AlexaMeadeArtPage() {
  const images = getAlexaMeadeImages();

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

      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide">
          July 2022 - September 2023
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Alexa Meade Art
        </h1>
        <p className="text-xs tracking-wide [font-variant:small-caps] opacity-65">
          role: studio assistant
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-sm font-normal leading-relaxed">
          <p>
            Working as a production assistant for Alexa Meade, I contributed to
            the production of immersive installations that transformed painted
            environments into photographic illusions. I fabricated scenic
            elements, props, and large-scale installations, assisted with photo
            shoots, and helped maintain Wonderland Dreams, a yearlong
            interactive experience in Midtown Manhattan that attracted over
            100,000 visitors. I also supported private events, performances, and
            exhibition programming within the space.
          </p>
          <p>
            Collaborating with a team of artists, fabricators, and creatives to
            build an experience of this scale was one of the most formative
            experiences of my career. Seeing the impact the installation had on
            such a broad audience sparked my own passion for creating immersive
            artistic experiences.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
          <Image
            src={ALEXA_MEADE_HERO_IMAGE}
            alt="Alexa Meade Art installation at Wonderland Dreams"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Gallery</h2>
        <ImageGallery images={images} altPrefix="Alexa Meade Art" />
      </section>
    </div>
  );
}
