export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-600">
              <p>📍 Showroom Address Coming Soon</p>
              <p>📞 +880 1XXX-XXXXXX</p>
              <p>✉️ info@nfsautos.com</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-xl min-h-[300px] flex items-center justify-center text-gray-500">
            Map Integration Coming Soon
          </div>
        </div>
      </div>
    </div>
  )
}