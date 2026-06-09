import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Shivam Mobile Shop',
  description: 'Get in touch with Shivam Mobile Shop for inquiries and support',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-secondary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-secondary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-secondary"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+917637014699" className="text-secondary hover:underline text-lg">
                    +91 76370 14699
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/917637014699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline text-lg"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-700">
                    Dullabcherra Bazar,<br />
                    Dullabcherra, Assam 788736<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Sunday<br />
                    9:30 AM - 9:00 PM
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Rating</h3>
                  <p className="text-gray-700">
                    <span className="text-yellow-400">★★★★★</span> 4.6/5 (10+ Reviews)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Find Us on Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.234!2d93.5!3d26.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzAwLjAiTiA5M8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}