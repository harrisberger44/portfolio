import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(process.cwd(), "public/images/illustration");

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;

function toPublicUrl(...segments: string[]): string {
  return `/${["images", "illustration", ...segments]
    .map((segment) => segment.replaceAll("&", "%26"))
    .join("/")}`;
}

/** Root Digital images, grouped so each series stays on its own gallery row. */
const DIGITAL_SERIES: string[][] = [
  ["FINAL w texture.JPEG", "IMG_0470news.jpg"],
  ["angelclustermovie.gif", "Untitled_Artwork.PNG", "IMG_0545.gif"],
  ["HarrisBerger-P5-MagazineSpread.jpg", "poster final.JPG"],
];

const ANALOG_SERIES: string[][] = [
  [
    "IL161-P3-post critque edit.JPEG",
    "img20260407_19091794.jpg",
    "rosebeef.PNG",
  ],
  ["angelcutoutsRED2.JPG", "IMG_9316.JPG", "balloonboy(edit).JPG"],
];

const STUDIO_PRACTICE_SERIES: string[][] = [
  ["IMG_2501.jpg", "IMG_0622.JPG", "IMG_1449.jpg"],
  ["IMG_9073.JPG.jpg", "DSCF0275.JPG"],
];

const PHOTO_FINAL_ORDER = [
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPEG",
  "Untitled_Artwork.JPEG",
];

function getOrderedSeries(
  dir: string,
  relativeSegments: string[],
  order: string[],
): string[] {
  if (!fs.existsSync(dir)) return [];

  const onDisk = new Set(
    fs.readdirSync(dir).filter((file) => IMAGE_EXTENSIONS.test(file)),
  );

  return order
    .filter((file) => onDisk.has(file))
    .map((file) => toPublicUrl(...relativeSegments, file));
}

function getFolderSeries(
  folderName: string,
  seriesOrders: string[][],
): string[][] {
  const dir = path.join(IMAGE_DIR, folderName);
  if (!fs.existsSync(dir)) return [];

  const onDisk = new Set(
    fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.test(entry.name))
      .map((entry) => entry.name),
  );

  const claimed = new Set(seriesOrders.flat());
  const series = seriesOrders
    .map((order) =>
      order
        .filter((file) => onDisk.has(file))
        .map((file) => toPublicUrl(folderName, file)),
    )
    .filter((group) => group.length > 0);

  const extras = [...onDisk]
    .filter((file) => !claimed.has(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => toPublicUrl(folderName, file));

  if (extras.length > 0) series.push(extras);

  return series;
}

function getPhotoFinalSeries(): string[] {
  return getOrderedSeries(
    path.join(IMAGE_DIR, "Digital", "photo final"),
    ["Digital", "photo final"],
    PHOTO_FINAL_ORDER,
  );
}

export type IllustrationGalleries = {
  digitalSeries: string[][];
  digitalPhotoFinal: string[];
  analogSeries: string[][];
  studioPracticeSeries: string[][];
};

export function getIllustrationGalleries(): IllustrationGalleries {
  return {
    digitalSeries: getFolderSeries("Digital", DIGITAL_SERIES),
    digitalPhotoFinal: getPhotoFinalSeries(),
    analogSeries: getFolderSeries("Analog", ANALOG_SERIES),
    studioPracticeSeries: getFolderSeries(
      "Studio Practice",
      STUDIO_PRACTICE_SERIES,
    ),
  };
}
