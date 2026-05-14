import { readdir, stat } from "node:fs/promises";
import { extname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS_DIR = join(ROOT, "public", "loader-assets");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function findImages(dir) {
  const entries = await readdir(dir);
  const images = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const fileStat = await stat(fullPath);

    if (fileStat.isDirectory()) {
      images.push(...(await findImages(fullPath)));
    } else if (IMAGE_EXTENSIONS.has(extname(entry).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

async function convertToWebp(inputPath) {
  const ext = extname(inputPath);
  const name = basename(inputPath, ext);
  const outputPath = join(join(inputPath, ".."), `${name}.webp`);

  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    const inputStat = await stat(inputPath);
    const outputStat = await stat(outputPath);
    const savings = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(1);

    console.log(`  ✓ ${basename(inputPath)} → ${basename(outputPath)} (${(inputStat.size / 1024).toFixed(1)}KB → ${(outputStat.size / 1024).toFixed(1)}KB, -${savings}%)`);
  } catch (err) {
    console.error(`  ✗ Error converting ${inputPath}:`, err.message);
  }
}

async function main() {
  console.log("\n🔍 Finding images in public/loader-assets/...\n");
  const images = await findImages(ASSETS_DIR);

  if (images.length === 0) {
    console.log("  No images found to convert.");
    return;
  }

  console.log(`  Found ${images.length} image(s). Converting to WebP...\n`);
  await Promise.all(images.map(convertToWebp));

  console.log(`\n✅ Done — ${images.length} image(s) converted to WebP.\n`);
}

main();
