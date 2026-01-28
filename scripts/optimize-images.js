import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION
const CONFIG = {
  inputDir: path.join(__dirname, '../src/assets/images-unoptimized'),
  outputDir: path.join(__dirname, '../src/assets/images'),
  maxWidth: 1600,
  jpegQuality: 60,  // Aggressive compression
  pngQuality: 80,
  webpOptions: {
    effort: 6,      // Max compression effort (slower but better)
    smartSubsample: true
  },
  overrides: {
    'hero-bg': { jpegQuality: 50, maxWidth: 1280 }
  }
};

// Create output directory
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Function to process a single image
async function processImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const outputWebP = path.join(path.dirname(outputPath), `${baseName}.webp`);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    
    // Check for overrides
    const override = CONFIG.overrides[baseName];
    
    // Determine max width
    let resizeWidth = width;
    if (override && override.maxWidth) {
      if (width > override.maxWidth) resizeWidth = override.maxWidth;
    } else if (width > CONFIG.maxWidth) {
      resizeWidth = CONFIG.maxWidth;
    }
    
    // Determine quality
    let quality = override && override.jpegQuality ? override.jpegQuality : CONFIG.jpegQuality;
    if (ext === '.png') {
      quality = override && override.pngQuality ? override.pngQuality : CONFIG.pngQuality;
    }
    
    // Process to WebP
    await sharp(inputPath)
      .resize(resizeWidth, null, { withoutEnlargement: true })
      .webp({ 
        quality,
        effort: CONFIG.webpOptions.effort,
        smartSubsample: CONFIG.webpOptions.smartSubsample
      })
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
  
  // Identify source files to prevent duplicate processing of WebPs
  const sources = items.filter(i => /\.(jpg|jpeg|png)$/i.test(i));
  const sourceBasenames = new Set(sources.map(s => path.parse(s).name));
  
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
        const baseName = path.parse(item).name;
        
        // Only copy WebP if no source file exists (prevent overwriting optimized version with unoptimized backup)
        if (!sourceBasenames.has(baseName)) {
           fs.copyFileSync(inputItemPath, outputItemPath);
           console.log(`→ Copied ${item} (standalone WebP)`);
        } else {
           console.log(`  Skipping ${item} (re-optimizing from source)`);
        }
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🚀 Starting Aggressive Image Optimization...\n');
console.log(`Input: ${CONFIG.inputDir}`);
console.log(`Output: ${CONFIG.outputDir}`);
console.log(`Settings: Quality ${CONFIG.jpegQuality}, Effort ${CONFIG.webpOptions.effort}, MaxWidth ${CONFIG.maxWidth}\n`);

const results = await processDirectory(CONFIG.inputDir, CONFIG.outputDir);
const successful = results.filter(r => r.success).length;
const failed = results.filter(r => !r.success).length;

console.log(`\n✅ Optimization complete!`);
console.log(`   Successful: ${successful}`);
console.log(`   Failed: ${failed}`);
