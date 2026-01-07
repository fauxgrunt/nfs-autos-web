import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ov5kyd7g', // Your Project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // false = fresh data always
})