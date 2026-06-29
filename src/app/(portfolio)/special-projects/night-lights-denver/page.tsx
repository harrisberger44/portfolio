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
          Night Lights Denver
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          With/in.
        </h1>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <p className="text-sm font-normal leading-relaxed">
          Artist statement placeholder. This space is reserved for your
          statement about Night Lights Denver — the themes, process, and intent
          behind the work. Replace this text with your own words when ready.
        </p>

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
