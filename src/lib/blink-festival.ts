import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(process.cwd(), "public/images/blink festival");

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

const GALLERY_ORDER = [
  "NWS04874-Enhanced-NR-2.jpg",
  "NWS04915.jpg",
  "NWS04929.jpg",
  "Projection-by-Grey-Vanderwoude.jpg",
  "Screenshot_2024-08-02_at_12.44.47.PNG",
  "unnamed (2).jpg",
  "0006.jpeg",
  "IMG_4532.PNG",
];

export function getBlinkFestivalImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  const onDisk = new Set(
    fs.readdirSync(IMAGE_DIR).filter((file) => IMAGE_EXTENSIONS.test(file)),
  );

  return GALLERY_ORDER.filter((file) => onDisk.has(file)).map(
    (file) => `/images/blink festival/${file}`,
  );
}

export const BLINK_FESTIVAL_VIMEO_ID = "1154478017";
