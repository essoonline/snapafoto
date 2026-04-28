# วิธีแปลงไฟล์ .jpg เป็น .webp ด้วย Node.js + ffmpeg

## ติดตั้ง dependencies

ในโฟลเดอร์โปรเจกต์ ให้รันคำสั่งนี้:

```
npm install fluent-ffmpeg ffmpeg-static
```

## สร้างสคริปต์แปลงไฟล์

สร้างไฟล์ชื่อ `convert-to-webp-ffmpeg.js` แล้วใส่โค้ดนี้:

```js
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
```

## วิธีใช้งาน

1. วางไฟล์ .jpg ที่ต้องการแปลงไว้ในโฟลเดอร์ `src/images/example`
2. รันคำสั่งนี้ในเทอร์มินัล:

```
node convert-to-webp-ffmpeg.js
```

3. ไฟล์ .webp จะถูกสร้างในโฟลเดอร์เดียวกัน

---

> หมายเหตุ: สามารถเปลี่ยน path โฟลเดอร์หรือปรับแต่งคุณภาพ/option ของ ffmpeg ได้ตามต้องการ
