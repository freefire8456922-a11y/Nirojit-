import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Shivam Mobile Shop',
  description: 'Discover premium smartphones, accessories, and electronics at best prices',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Latest Smartphones & Accessories</h1>
          <p className="text-xl mb-8">Shop premium mobile devices at unbeatable prices</p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Shop Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                <div className="bg-gray-300 h-40 rounded mb-4"></div>
                <h3 className="font-bold mb-2">Product {i}</h3>
                <p className="text-gray-600 mb-4">Premium mobile phone</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-secondary">₹25,999</span>
                  <button className="text-primary hover:underline">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% genuine mobile devices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-bold mb-2">Phone</p>
              <p>+91 76370 14699</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">WhatsApp</p>
              <p>Available 24/7</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Location</p>
              <p>Dullabcherra Bazar, Assam</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}