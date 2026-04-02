import sharp from "sharp";
import fs from "fs";
import path from "path";

const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

if (fs.existsSync(galleryDir)) {
  const files = fs.readdirSync(galleryDir);
  for (const file of files) {
    if (
      file.endsWith(".jpeg") ||
      file.endsWith(".jpg") ||
      file.endsWith(".png")
    ) {
      const parsedPath = path.parse(file);
      const outputName = `${parsedPath.name}.webp`;
      const outputPath = path.join(galleryDir, outputName);

      sharp(path.join(galleryDir, file))
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Converted ${file} to ${outputName}`))
        .catch((err) => console.error(`Error converting ${file}:`, err));
    }
  }
} else {
  console.log("Gallery directory not found.");
}
