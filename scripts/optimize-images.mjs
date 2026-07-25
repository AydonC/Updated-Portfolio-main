import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const DIR = process.argv[2];
if (!DIR) { console.error("usage: node optimize-images.mjs <public-dir>"); process.exit(1); }

// Cap decorative/large images to a sensible max width. Profile/post images
// rarely need more than ~1200px on this layout.
const MAX_W = 1400;

const files = await readdir(DIR);
let before = 0, after = 0;
const report = [];

for (const f of files) {
    const ext = extname(f).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    const src = join(DIR, f);
    const st = await stat(src);
    const origBytes = st.size;

    const img = sharp(src, { failOn: "none" });
    const meta = await img.metadata();
    const resize = meta.width && meta.width > MAX_W
        ? { width: MAX_W, withoutEnlargement: true }
        : null;

    let pipeline = sharp(src, { failOn: "none" });
    if (resize) pipeline = pipeline.resize(resize);

    const tmp = src + ".opt";
    if (ext === ".png") {
        // Palette + max compression keeps PNGs (needed where transparency matters).
        await pipeline.png({ compressionLevel: 9, palette: true, quality: 80 }).toFile(tmp);
    } else {
        await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
    }

    const newBytes = (await stat(tmp)).size;
    // Only replace if we actually got smaller.
    if (newBytes < origBytes) {
        await unlink(src);
        await rename(tmp, src);
        before += origBytes; after += newBytes;
        report.push(`${f.padEnd(20)} ${(origBytes/1024).toFixed(0).padStart(6)}KB -> ${(newBytes/1024).toFixed(0).padStart(6)}KB  (${meta.width}x${meta.height})`);
    } else {
        await unlink(tmp);
        report.push(`${f.padEnd(20)} ${(origBytes/1024).toFixed(0).padStart(6)}KB  (kept original — already smaller)`);
    }
}

console.log(report.join("\n"));
console.log(`\nTOTAL: ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB  (saved ${((before-after)/1024).toFixed(0)}KB, ${before?(100*(before-after)/before).toFixed(0):0}%)`);
