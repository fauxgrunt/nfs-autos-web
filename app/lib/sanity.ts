import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ov5kyd7g', // Your Project ID
  dataset: 'production',
  apiVersion: '2024-01-25',
  useCdn: false, // Set to false for real-time updates
})

// This part was missing in your file! 👇
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}