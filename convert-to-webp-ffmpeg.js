import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'src/images/example');
ffmpeg.setFfmpegPath(ffmpegPath);

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jpg')) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.jpg', '.webp'));
    ffmpeg(inputPath)
      .output(outputPath)
      .on('end', () => console.log(`Converted: ${file} -> ${outputPath}`))
      .on('error', err => console.error(`Error converting ${file}:`, err))
      .run();
  }
});
