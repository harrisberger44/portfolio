"use client";

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type LightboxImage = {
  src: string;
  alt: string;
};

export default function ImageLightbox({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const openImage = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;

    const pageImages = Array.from(
      event.currentTarget.querySelectorAll<HTMLImageElement>("main img"),
    );
    const clickedIndex = pageImages.indexOf(target);
    if (clickedIndex === -1) return;

    setImages(
      pageImages.map((image) => ({
        src: image.currentSrc || image.src,
        alt: image.alt,
      })),
    );
    setActiveIndex(clickedIndex);
  };

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <div className="contents" onClick={openImage}>
      {children}

      {activeImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl font-normal text-white transition-opacity hover:opacity-65"
              onClick={close}
              aria-label="Close image viewer"
            >
              ×
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-2 top-1/2 z-10 flex h-14 w-12 -translate-y-1/2 items-center justify-center text-4xl font-normal text-white transition-opacity hover:opacity-65 md:left-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="absolute right-2 top-1/2 z-10 flex h-14 w-12 -translate-y-1/2 items-center justify-center text-4xl font-normal text-white transition-opacity hover:opacity-65 md:right-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div
              className="flex h-full w-full flex-col items-center justify-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              {/* The browser URL preserves Next.js image optimization. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[calc(100vh-7rem)] max-w-[calc(100vw-5rem)] object-contain"
              />
              {activeImage.alt && (
                <p className="max-w-3xl text-center text-xs font-normal text-white/70">
                  {activeImage.alt}
                </p>
              )}
              <p className="text-xs font-normal text-white/50">
                {(activeIndex ?? 0) + 1} / {images.length}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
