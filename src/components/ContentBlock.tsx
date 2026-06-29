import Image from "next/image";

type ContentBlockProps = {
  title?: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "above" | "below";
};

export default function ContentBlock({
  title,
  text,
  imageSrc,
  imageAlt = "",
  imagePosition = "below",
}: ContentBlockProps) {
  const image = imageSrc ? (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 720px"
      />
    </div>
  ) : (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center bg-neutral-100"
      aria-hidden="true"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
        Image
      </span>
    </div>
  );

  return (
    <section className="flex flex-col gap-6">
      {title && (
        <h2 className="text-base font-bold uppercase tracking-wide">{title}</h2>
      )}

      {imagePosition === "above" ? (
        <>
          {image}
          <p className="max-w-prose text-sm leading-relaxed">{text}</p>
        </>
      ) : (
        <>
          <p className="max-w-prose text-sm leading-relaxed">{text}</p>
          {image}
        </>
      )}
    </section>
  );
}
