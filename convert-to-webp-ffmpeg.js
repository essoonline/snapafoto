import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, 'src/images/present');

ffmpeg.setFfmpegPath(ffmpegPath);

const files = fs.readdirSync(dir).filter((file) => /\.jpe?g$/i.test(file));

if (files.length === 0) {
  console.log(`No .jpg files found in ${dir}`);
  process.exit(0);
}

const convert = (file) =>
  new Promise((resolve, reject) => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.jpe?g$/i, '.webp'));

    ffmpeg(inputPath)
      .output(outputPath)
      .on('end', () => {
        console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
        resolve();
      })
      .on('error', (err) => reject(new Error(`Error converting ${file}: ${err.message}`)))
      .run();
  });

for (const file of files) {
  await convert(file);
  fs.unlinkSync(path.join(dir, file));
  console.log(`Removed: ${file}`);
}

console.log(`Done. ${files.length} file(s) converted in ${dir}`);
