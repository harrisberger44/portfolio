import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/Kathryn Markel Fine Arts",
);

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export const KATHRYN_MARKEL_HERO_IMAGE =
  "/images/Kathryn Markel Fine Arts/SL_01.JPG";

export function getKathrynMarkelImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  return fs
    .readdirSync(IMAGE_DIR)
    .filter(
      (file) =>
        IMAGE_EXTENSIONS.test(file) &&
        !["sl_01.jpg", "img_0437.jpg"].includes(file.toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/images/Kathryn Markel Fine Arts/${file}`);
}
