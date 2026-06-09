import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Shivam Mobile Shop',
  description: 'Browse our wide range of mobile phones and accessories',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  {['Smartphones', 'Chargers', 'Earphones', 'Covers', 'Tempered Glass'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Brand</h4>
                <div className="space-y-2">
                  {['Apple', 'Samsung', 'Realme', 'OnePlus', 'Xiaomi'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Price Range</h4>
                <input type="range" min="0" max="100000" className="w-full" />
                <div className="flex justify-between mt-2 text-sm">
                  <span>₹0</span>
                  <span>₹100,000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-48"></div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2">Premium Mobile Phone {i + 1}</h3>
                    <div className="flex items-center mb-3">
                      <div className="text-yellow-400">★★★★★</div>
                      <span className="text-sm text-gray-600 ml-2">(125)</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold text-secondary">₹{25000 + i * 500}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{30000 + i * 500}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-secondary text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold">
                        Add to Cart
                      </button>
                      <button className="px-3 py-2 border border-secondary text-secondary rounded hover:bg-gray-50">
                        ❤
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}