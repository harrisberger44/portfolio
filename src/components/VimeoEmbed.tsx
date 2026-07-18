import Script from "next/script";

type VimeoEmbedProps = {
  videoId: string;
  title: string;
  query?: string;
};

export default function VimeoEmbed({
  videoId,
  title,
  query = "badge=0&autopause=0&player_id=0&app_id=58479",
}: VimeoEmbedProps) {
  const src = `https://player.vimeo.com/video/${videoId}${query ? `?${query}` : ""}`;

  return (
    <>
      <div className="relative w-full overflow-hidden bg-neutral-100 pt-[56.25%]">
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </>
  );
}
