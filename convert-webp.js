import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public/images/example');
const sizes = [305, 320, 480, 800];

fs.readdirSync(dir)
  .filter(file => file.endsWith('.webp'))
  .forEach(file => {
    sizes.forEach(size => {
      const input = path.join(dir, file);
      const output = path.join(dir, `${path.parse(file).name}-${size}.webp`);
      sharp(input)
        .resize({ width: size })
        .toFile(output)
        .then(() => console.log(`Created ${output}`))
        .catch(err => console.error(`Error processing ${input}:`, err));
    });
  });
