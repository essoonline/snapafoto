
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/images/example');
const outputDir = path.join(inputDir, 'optimized');
const width = 400;

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
    console.log(`Processing: ${file}`);
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    sharp(inputPath)
      .resize({ width })
      .toFormat('webp', { quality: 82 })
      .toFile(outputPath)
      .then(() => console.log(`Optimized: ${file}`))
      .catch(err => console.error(`Error processing ${file}:`, err));
  } else {
    console.log(`Skipped (not image): ${file}`);
  }
});
