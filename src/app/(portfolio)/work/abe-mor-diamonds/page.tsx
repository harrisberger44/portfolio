import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import {
  ABE_MOR_CATALOG_URL,
  ABE_MOR_HERO_IMAGE,
  getAbeMorImages,
} from "@/lib/abe-mor-diamonds";

export default function AbeMorDiamondsPage() {
  const images = getAbeMorImages();

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
          February 2022 - February 2023
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Abe Mor Diamonds.
        </h1>
        <p className="text-xs tracking-wide [font-variant:small-caps] opacity-65">
          role: marketing &amp; operations
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-sm font-normal leading-relaxed">
          <p>
            At Abe Mor Diamonds, I was responsible for developing the
            company&apos;s visual communications across both print and digital
            platforms. My work included designing inventory catalogs, email
            marketing campaigns, social media graphics, and photographing fine
            jewelry for sales and promotional materials. In addition to creative
            work, I managed inventory and customer databases, coordinated with
            clients, designers, and manufacturers, and oversaw the secure
            handling and shipment of valuable merchandise.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
            <Image
              src={ABE_MOR_HERO_IMAGE}
              alt="Abe Mor Diamonds catalog cover designed by Harris Berger"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <p className="text-xs font-normal leading-relaxed opacity-65">
            View the product catalog I designed{" "}
            <a
              href={ABE_MOR_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-65"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">
          Product Photography
        </h2>
        <ImageGallery images={images} altPrefix="Abe Mor product photography" />
      </section>
    </div>
  );
}
