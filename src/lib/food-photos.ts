import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export type FoodPhoto = { src: string; width: number; height: number; alt: string; number: string };

export async function getFoodPhotos(): Promise<FoodPhoto[]> {
  return getGalleryPhotos("food", "ผลงานการทำอาหาร จานที่");
}

export async function getGalleryPhotos(folder: "food" | "web-projects", label: string): Promise<FoodPhoto[]> {
  const directory = path.join(process.cwd(), "public", "images", folder);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(entry.name))
    .map((entry) => entry.name).sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  return Promise.all(files.map(async (name, index) => {
    const metadata = await sharp(path.join(directory, name)).metadata();
    const rotated = (metadata.orientation ?? 1) >= 5;
    return {
      src: `/images/${folder}/${encodeURIComponent(name)}`,
      width: (rotated ? metadata.height : metadata.width) ?? 1200,
      height: (rotated ? metadata.width : metadata.height) ?? 900,
      alt: `${label} ${index + 1}`,
      number: String(index + 1).padStart(2, "0"),
    };
  }));
}
