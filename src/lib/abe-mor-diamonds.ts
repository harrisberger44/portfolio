import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/Abe Mor Diamonds",
);

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export const ABE_MOR_HERO_IMAGE =
  "/images/Abe Mor Diamonds/catalog cover.jpg";

export const ABE_MOR_CATALOG_URL =
  "https://drive.google.com/file/d/1_ILEGISv5YpWFjxuG5r9dhi2BCKvNFTk/view?usp=sharing";

export function getAbeMorImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  return fs
    .readdirSync(IMAGE_DIR)
    .filter(
      (file) =>
        IMAGE_EXTENSIONS.test(file) &&
        file.toLowerCase() !== "catalog cover.jpg",
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .slice(0, 9)
    .map((file) => `/images/Abe Mor Diamonds/${file}`);
}
