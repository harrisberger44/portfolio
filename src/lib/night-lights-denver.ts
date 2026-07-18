import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/night lights denver/new images for page",
);

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

/** Public URL; only encode characters that break URL parsing (&). */
function toPublicUrl(...segments: string[]): string {
  return `/${["images", "night lights denver", "new images for page", ...segments]
    .map((segment) => segment.replaceAll("&", "%26"))
    .join("/")}`;
}

function listImagesIn(subdir: string): string[] {
  const dir = path.join(IMAGE_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => toPublicUrl(subdir, file));
}

export type NightLightsDenverGallery = {
  hero: string | null;
  wholeBuilding: string[];
  gifs: string[];
  bts: string[];
  grid: string[];
};

export function getNightLightsDenverGallery(): NightLightsDenverGallery {
  const heroFile = "NLD hero for website.jpg";
  const heroPath = path.join(IMAGE_DIR, heroFile);
  const hero = fs.existsSync(heroPath) ? toPublicUrl(heroFile) : null;

  const wholeBuilding = listImagesIn("whole building");
  const gifs = listImagesIn("gifs");
  const bts = listImagesIn("BTS");

  return {
    hero,
    wholeBuilding,
    gifs,
    bts,
    grid: [...wholeBuilding, ...gifs, ...bts],
  };
}

export const NIGHT_LIGHTS_VIMEO_ID = "1210920285";
