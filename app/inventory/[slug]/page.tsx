import Link from 'next/link'

export default function CarDetailsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb / Back Button */}
        <Link href="/inventory" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Back to Inventory
        </Link>

        {/* Empty State / Loading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          
          {/* Image Placeholder */}
          <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            Car Image Gallery
          </div>

          {/* Details Placeholder */}
          <div className="space-y-6">
            <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-24 w-full bg-gray-100 rounded border border-gray-200 p-4">
              <p className="text-gray-400 text-sm">Detailed specifications will appear here once data is connected.</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold opacity-50 cursor-not-allowed">
              Contact Seller (Disabled)
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}