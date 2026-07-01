import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(
  process.cwd(),
  "public/images/night lights denver",
);

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

function shuffleWithSeed<T>(items: T[], seed: string): T[] {
  const shuffled = [...items];
  let state = 0;

  for (let i = 0; i < seed.length; i++) {
    state = (state + seed.charCodeAt(i)) % 2147483647;
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    state = (state * 48271) % 2147483647;
    const j = state % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function getNightLightsDenverImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  const files = fs
    .readdirSync(IMAGE_DIR)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => a.localeCompare(b));

  return shuffleWithSeed(files, "night-lights-denver-gallery").map(
    (file) => `/images/night lights denver/${file}`,
  );
}

export const NIGHT_LIGHTS_YOUTUBE_ID = "kG5vO0mP-b8";
