const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeCircularIcon() {
  try {
    const inputPath = path.join(__dirname, '../public/icon.png');
    const tempPath = path.join(__dirname, '../public/icon-temp.png');
    const finalSize = 512;
    
    // Step 1: Get input image metadata
    const metadata = await sharp(inputPath).metadata();
    const originalSize = Math.min(metadata.width, metadata.height);
    
    // Step 2: Minimal crop - only 2% from each edge to preserve sun/content
    const cropAmount = Math.floor(originalSize * 0.02);
    const cropSize = originalSize - (cropAmount * 2);
    
    // Step 3: Crop image minimally
    const croppedBuffer = await sharp(inputPath)
      .extract({
        left: cropAmount,
        top: cropAmount,
        width: cropSize,
        height: cropSize
      })
      .toBuffer();
    
    // Step 4: Create perfect circle mask
    const circleMask = Buffer.from(
      `<svg width="${finalSize}" height="${finalSize}">
        <circle cx="${finalSize/2}" cy="${finalSize/2}" r="${finalSize/2}" fill="white"/>
      </svg>`
    );
    
    // Step 5: Resize and apply circle mask
    await sharp(croppedBuffer)
      .resize(finalSize, finalSize, { 
        fit: 'contain',
        position: 'center',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .composite([{
        input: circleMask,
        blend: 'dest-in'
      }])
      .png({ compressionLevel: 9 })
      .toFile(tempPath);
    
    // Step 6: Replace original
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log('✅ Perfect borderless circle created!');
    console.log('📏 Final size: 512x512px');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
  }
}

makeCircularIcon();
