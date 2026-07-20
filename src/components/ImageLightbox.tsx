"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type LightboxImage = {
  src: string;
  alt: string;
};

type Transform = {
  scale: number;
  x: number;
  y: number;
};

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const DOUBLE_CLICK_SCALE = 2.5;

function clampScale(scale: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}

function getTouchDistance(touches: TouchList) {
  const [a, b] = [touches[0], touches[1]];
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy);
}

function getTouchCenter(touches: TouchList) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  };
}

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<Transform>({ scale: 1, x: 0, y: 0 });
  const [transform, setTransform] = useState<Transform>({
    scale: 1,
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isPinching, setIsPinching] = useState(false);

  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const pinchRef = useRef<{
    distance: number;
    scale: number;
  } | null>(null);

  const updateTransform = useCallback((next: Transform) => {
    const normalized =
      next.scale <= MIN_SCALE
        ? { scale: MIN_SCALE, x: 0, y: 0 }
        : { ...next, scale: clampScale(next.scale) };
    transformRef.current = normalized;
    setTransform(normalized);
  }, []);

  useEffect(() => {
    updateTransform({ scale: 1, x: 0, y: 0 });
  }, [src, updateTransform]);

  const zoomAt = useCallback(
    (clientX: number, clientY: number, nextScale: number) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const offsetX = clientX - rect.left - rect.width / 2;
      const offsetY = clientY - rect.top - rect.height / 2;
      const prev = transformRef.current;
      const scale = clampScale(nextScale);

      if (scale === MIN_SCALE) {
        updateTransform({ scale: MIN_SCALE, x: 0, y: 0 });
        return;
      }

      const ratio = scale / prev.scale;
      updateTransform({
        scale,
        x: offsetX - (offsetX - prev.x) * ratio,
        y: offsetY - (offsetY - prev.y) * ratio,
      });
    },
    [updateTransform],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const prev = transformRef.current;
      const delta = event.deltaY > 0 ? -0.18 : 0.18;
      zoomAt(event.clientX, event.clientY, prev.scale + delta);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 2) return;
      dragRef.current = null;
      setIsDragging(false);
      pinchRef.current = {
        distance: getTouchDistance(event.touches),
        scale: transformRef.current.scale,
      };
      setIsPinching(true);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 2 || !pinchRef.current) return;
      event.preventDefault();

      const distance = getTouchDistance(event.touches);
      const center = getTouchCenter(event.touches);
      const nextScale =
        pinchRef.current.scale * (distance / pinchRef.current.distance);
      zoomAt(center.x, center.y, nextScale);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (event.touches.length >= 2) return;
      pinchRef.current = null;
      setIsPinching(false);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [zoomAt]);

  const handleDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const prev = transformRef.current;
    if (prev.scale > MIN_SCALE) {
      updateTransform({ scale: MIN_SCALE, x: 0, y: 0 });
      return;
    }
    zoomAt(event.clientX, event.clientY, DOUBLE_CLICK_SCALE);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (transformRef.current.scale <= MIN_SCALE) return;
    if (pinchRef.current) return;
    if (event.pointerType === "touch" && !event.isPrimary) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: transformRef.current.x,
      originY: transformRef.current.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId || pinchRef.current) return;

    updateTransform({
      scale: transformRef.current.scale,
      x: drag.originX + (event.clientX - drag.startX),
      y: drag.originY + (event.clientY - drag.startY),
    });
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    setIsDragging(false);
  };

  const isZoomed = transform.scale > MIN_SCALE;
  const isInteracting = isDragging || isPinching;

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[calc(100vh-7rem)] w-full items-center justify-center overflow-hidden touch-none ${
        isZoomed
          ? isDragging
            ? "cursor-grabbing"
            : "cursor-grab"
          : "cursor-zoom-in"
      }`}
      onDoubleClick={handleDoubleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* The browser URL preserves Next.js image optimization. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="max-h-full max-w-[calc(100vw-5rem)] select-none object-contain"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
          transformOrigin: "center center",
          transition: isInteracting ? "none" : "transform 120ms ease-out",
        }}
      />
    </div>
  );
}

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
              <ZoomableImage src={activeImage.src} alt={activeImage.alt} />
              {activeImage.alt && (
                <p className="max-w-3xl text-center text-xs font-normal text-white/70">
                  {activeImage.alt}
                </p>
              )}
              <p className="text-xs font-normal text-white/50">
                {(activeIndex ?? 0) + 1} / {images.length}
                <span className="mx-2 text-white/25">·</span>
                Scroll or pinch to zoom
              </p>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
