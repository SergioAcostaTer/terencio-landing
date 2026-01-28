import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process a single image
async function processImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const outputWebP = path.join(path.dirname(outputPath), `${baseName}.webp`);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    
    // Determine max width based on current size
    let maxWidth = width;
    if (width > 1920) maxWidth = 1920;
    
    // Quality based on file type and size
    let quality = 80;
    if (ext === '.jpeg' || ext === '.jpg') {
      quality = 75;
    } else if (ext === '.png') {
      quality = 85;
    }
    
    // Process to WebP
    await sharp(inputPath)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputWebP);
      
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputWebP);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputWebP)}`);
    console.log(`  ${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB (${reduction}% reduction)`);
    
    return { success: true, reduction };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Function to recursively process directory
async function processDirectory(inputPath, outputPath) {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  const items = fs.readdirSync(inputPath);
  const results = [];
  
  for (const item of items) {
    const inputItemPath = path.join(inputPath, item);
    const outputItemPath = path.join(outputPath, item);
    const stat = fs.statSync(inputItemPath);
    
    if (stat.isDirectory()) {
      const dirResults = await processDirectory(inputItemPath, outputItemPath);
      results.push(...dirResults);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const result = await processImage(inputItemPath, outputItemPath);
        results.push(result);
      } else if (ext === '.webp') {
        // Copy existing webp files
        fs.copyFileSync(inputItemPath, outputItemPath);
        console.log(`→ Copied ${item} (already WebP)`);
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🚀 Starting image optimization...\n');
console.log(`Input: ${inputDir}`);
console.log(`Output: ${outputDir}\n`);

const results = await processDirectory(inputDir, outputDir);
const successful = results.filter(r => r.success).length;
const failed = results.filter(r => !r.success).length;

console.log(`\n✅ Optimization complete!`);
console.log(`   Successful: ${successful}`);
console.log(`   Failed: ${failed}`);

