import { createClient } from '@sanity/client'
import Papa from 'papaparse'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Load environment variables if you have them (optional, but good practice)
dotenv.config()

// 1. CONFIGURATION
const client = createClient({
  projectId: 'ov5kyd7g', // <--- Your real Project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  // ⚠️ IMPORTANT: Paste your token starting with "sk..." inside the quotes below
  token: 'PASTE_YOUR_SANITY_TOKEN_HERE', 
  useCdn: false, // We need fresh data for writing
})

// Fix for __dirname in .mjs files
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function importData() {
  try {
    console.log('🚀 Starting Car Import...')

    // 2. LOCATE THE CSV
    // This looks for "data.csv" inside the "public" folder
    const csvPath = path.join(__dirname, '../public/data.csv')
    
    if (!fs.existsSync(csvPath)) {
      throw new Error(`❌ File not found at: ${csvPath}\n   Make sure you downloaded the Google Sheet as .csv and put it in the public folder.`)
    }

    // 3. READ & PARSE
    const csvFile = fs.readFileSync(csvPath, 'utf8')
    const { data } = Papa.parse(csvFile, {
      header: true,       // Uses the first row as keys (Make, Model, etc.)
      skipEmptyLines: true,
      dynamicTyping: true // Automatically converts numbers like "2018" into actual numbers
    })

    console.log(`📋 Found ${data.length} cars to process.`)

    // 4. UPLOAD LOOP
    for (const row of data) {
      // Create a unique ID so we don't make duplicates if you run this twice
      // e.g. "toyota-premio-2018"
      const docId = `imported-${row['Make']}-${row['Model']}-${row['Year']}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Clean up special characters

      const carDoc = {
        _type: 'car',
        _id: docId, 
        
        // Map CSV columns to Sanity Schema fields
        make: row['Make'] ? String(row['Make']) : 'Unknown',
        model: row['Model'] ? String(row['Model']) : 'Unknown',
        year: Number(row['Year']) || 0,
        price: Number(row['Price']) || 0,
        
        // Dropdowns (Sanity is case-sensitive, so we ensure standard capitalization)
        condition: row['Condition'] || 'Used', 
        mileage: Number(row['Mileage (km)']) || 0,
        fuel: row['Fuel'] || 'Petrol',
        transmission: row['Transmission'] || 'Automatic',
        color: row['Color'] || 'White',
        
        // We put the image link in a text field so you can find it easily
        // (We can't upload the image file automatically from a Google Drive link)
        slug: {
            _type: 'slug',
            current: docId
        }
      }

      // "createOrReplace" updates the car if it exists, or creates it if new
      await client.createOrReplace(carDoc)
      console.log(` Imported: ${row['Make']} ${row['Model']}`)
    }

    console.log('\n SUCCESS! All cars imported.')
    console.log('👉 Go to http://localhost:3000/studio to verify and publish them.')

  } catch (error) {
    console.error('\n❌ Import Failed:', error.message)
  }
}

importData()