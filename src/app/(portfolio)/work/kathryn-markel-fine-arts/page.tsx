import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import {
  getKathrynMarkelImages,
  KATHRYN_MARKEL_HERO_IMAGE,
} from "@/lib/kathryn-markel-fine-arts";

export default function KathrynMarkelFineArtsPage() {
  const images = getKathrynMarkelImages();

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
          May 2024 - Present
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Kathryn Markel Fine Arts
        </h1>
        <p className="text-xs tracking-wide [font-variant:small-caps] opacity-65">
          role: registrar
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-sm font-normal leading-relaxed">
          <p>
            At Kathryn Markel Fine Arts, I contribute to both the creative and
            operational sides of gallery management. My role spans artwork
            inventory and logistics, exhibition production, print and exhibition
            graphic design, artwork photography, website maintenance, and
            exhibition installation, helping bring each exhibition from planning
            through its final presentation.
          </p>
          <p>
            Founded nearly fifty years ago, Kathryn Markel Fine Arts has built a
            reputation for fostering the careers of contemporary artists while
            serving private collectors, architects, interior designers, and art
            advisors. Across two gallery locations in Chelsea&apos;s Fine Arts
            District, we produce up to four exhibitions every five weeks,
            representing more than fifty professional artists working across a
            wide range of mediums and at various stages of their careers. Working
            in this fast-paced environment has given me firsthand experience with
            every stage of the exhibition process while reinforcing what I find
            most rewarding about the role: creating meaningful experiences for
            collectors and clients while supporting the long-term growth and
            success of the artists we represent.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
          <Image
            src={KATHRYN_MARKEL_HERO_IMAGE}
            alt="Kathryn Markel Fine Arts gallery installation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-xs font-bold uppercase tracking-wide">Gallery</h2>
        <ImageGallery images={images} altPrefix="Kathryn Markel Fine Arts" />
      </section>
    </div>
  );
}
