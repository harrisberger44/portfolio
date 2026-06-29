import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/night lights denver",
);

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

export function getNightLightsDenverImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  return fs
    .readdirSync(IMAGE_DIR)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/images/night lights denver/${file}`);
}

export const NIGHT_LIGHTS_YOUTUBE_ID = "kG5vO0mP-b8";
