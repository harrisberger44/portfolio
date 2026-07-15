import ImageGallery from "@/components/ImageGallery";
import { getIllustrationImages } from "@/lib/illustration";

export default function IllustrationPage() {
  const images = getIllustrationImages();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14">
      <header className="flex flex-col gap-4">
        <h1 className="text-base font-bold uppercase tracking-wide">
          Illustration
        </h1>
        <p className="text-2xl font-bold tracking-tight md:text-3xl">
          Here is a random grabbag of my art, enjoy!
        </p>
      </header>

      <ImageGallery images={images} altPrefix="Illustration by Harris Berger" />
    </div>
  );
}
