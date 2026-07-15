import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(process.cwd(), "public/images/illustration");

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

export function getIllustrationImages(): string[] {
  if (!fs.existsSync(IMAGE_DIR)) return [];

  const files = fs
    .readdirSync(IMAGE_DIR)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return shuffleWithSeed(files, "illustration-grabbag").map(
    (file) => `/images/illustration/${file}`,
  );
}
