import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(process.cwd(), "public/images/Alexa Meade Art");

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export const ALEXA_MEADE_HERO_IMAGE =
  "/images/Alexa Meade Art/IMG_2885.jpeg";

export function getAlexaMeadeImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  return fs
    .readdirSync(IMAGE_DIR)
    .filter(
      (file) =>
        IMAGE_EXTENSIONS.test(file) &&
        file.toLowerCase() !== "img_2885.jpeg",
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .slice(0, -1)
    .map((file) => `/images/Alexa Meade Art/${file}`);
}
