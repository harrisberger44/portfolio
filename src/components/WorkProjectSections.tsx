import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import {
  ABE_MOR_CATALOG_URL,
  ABE_MOR_HERO_IMAGE,
  getAbeMorImages,
} from "@/lib/abe-mor-diamonds";
import {
  ALEXA_MEADE_HERO_IMAGE,
  getAlexaMeadeImages,
} from "@/lib/alexa-meade-art";
import {
  getKathrynMarkelImages,
  KATHRYN_MARKEL_HERO_IMAGE,
} from "@/lib/kathryn-markel-fine-arts";

export function KathrynMarkelFineArtsContent() {
  const images = getKathrynMarkelImages();

  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide">
          May 2024 - Present
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Kathryn Markel Fine Arts
        </h2>
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
        <h3 className="text-xs font-bold uppercase tracking-wide">Gallery</h3>
        <ImageGallery images={images} altPrefix="Kathryn Markel Fine Arts" />
      </section>
    </>
  );
}

export function AbeMorDiamondsContent() {
  const images = getAbeMorImages();

  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide">
          February 2022 - February 2023
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Abe Mor Diamonds.
        </h2>
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
        <h3 className="text-xs font-bold uppercase tracking-wide">
          Product Photography
        </h3>
        <ImageGallery images={images} altPrefix="Abe Mor product photography" />
      </section>
    </>
  );
}

export function AlexaMeadeArtContent() {
  const images = getAlexaMeadeImages();

  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide">
          July 2022 - September 2023
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Alexa Meade Art
        </h2>
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
            shoots, and helped maintain Wonderland Dreams, a yearlong interactive
            experience in Midtown Manhattan that attracted over 100,000 visitors.
            I also supported private events, performances, and exhibition
            programming within the space.
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
        <h3 className="text-xs font-bold uppercase tracking-wide">Gallery</h3>
        <ImageGallery images={images} altPrefix="Alexa Meade Art" />
      </section>
    </>
  );
}
