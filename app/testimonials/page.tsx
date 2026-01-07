export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Real feedback from verified buyers. We value transparency above all else.
        </p>
        
        {/* Placeholder for future reviews */}
        <div className="max-w-2xl mx-auto rounded-xl bg-gray-50 p-12 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">No Reviews Yet</h3>
          <p className="mt-2 text-gray-500">
            We are currently gathering feedback from our happy clients.
          </p>
        </div>
      </div>
    </div>
  )
}