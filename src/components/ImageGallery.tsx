import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  altPrefix?: string;
};

export default function ImageGallery({
  images,
  altPrefix = "Gallery image",
}: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {images.map((src, index) => {
        const isGif = /\.gif(?:$|\?)/i.test(decodeURIComponent(src));

        return (
          <div
            key={src}
            className="relative aspect-square overflow-hidden bg-neutral-100"
          >
            <Image
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              fill
              unoptimized={isGif}
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </div>
  );
}
