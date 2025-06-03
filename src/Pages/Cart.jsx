import { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import Header from "../Component/home/Header.jsx";
import FooterHome from "../Component/home/FooterHome.jsx"

function Cart() {
  const productData = {
    title: 'Fantasy Greenwarden (Full) - Character Reference Image Pack',
    seller: 'Maoyo Character',
    version: '2BHK | V.1',
    price: '4.99',
    currency: 'INR',
    mainImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    thumbnails: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=120',
      'https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&w=120',
      'https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=120',
      'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&w=120',
      'https://images.pexels.com/photos/3316926/pexels-photo-3316926.jpeg?auto=compress&cs=tinysrgb&w=120',
    ]
  };

  const [currentImage, setCurrentImage] = useState(productData.mainImage);

  const similarResults = new Array(8).fill({
    title: 'Modern Dome Pavilion CAD Set',
    subtitle: 'Ex. Durable 8MB',
    price: '999 INR',
    score: '4.3/5',
    image: 'https://images.pexels.com/photos/1587096/pexels-photo-1587096.jpeg', // Replace with actual
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-8xl mx-auto px-4 py-6 sm:py-10">

        {/* Report Button */}
        <div className="flex justify-end mb-2">
          <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
            Report this product
          </button>
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {productData.title} {productData.version && `| ${productData.version}`}
          </h1>
          <div className="flex items-center text-sm text-gray-600">
            <span>by </span>
            <span className="text-orange-500 font-medium ml-1">{productData.seller}</span>
            <span className="mx-2">•</span>
            <button className="text-gray-600 underline hover:text-gray-900">
              Seller Information
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={currentImage} alt="Product Preview" className="w-full h-auto rounded shadow" />
            </div>

            <div className="flex mt-4 space-x-3 overflow-x-auto">
              {productData.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    currentImage === thumbnail ? 'border-orange-500' : 'border-gray-200'
                  }`}
                  onClick={() => setCurrentImage(thumbnail)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">License Fee</p>
                <p className="text-xl font-semibold text-gray-900">{productData.currency} {productData.price}</p>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-500">License</p>
              </div>

              <div className="flex items-center gap-2 text-sm mb-6">
                <input type="checkbox" checked readOnly className="accent-green-600 h-4 w-4" />
                <p>Personal and one commercial project <span className="text-green-600 font-medium">✓</span></p>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mb-3 transition duration-200">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button className="w-full border border-black py-2 rounded hover:bg-black hover:text-white transition duration-200">
                Preview
              </button>

              <div className="flex justify-between mt-6 mb-4">
                {['Share', 'Pin', 'Share', 'Link'].map((label, index) => (
                  <button key={index} className="flex items-center justify-center w-12 h-8 text-gray-600 hover:bg-gray-100 rounded transition duration-200">
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-2 text-xs text-gray-500 flex items-center">
                <span className="truncate">https://dezignbank.com/r/yOqR</span>
                <button className="ml-2">Copy</button>
              </div>
            </div>
          </div>
        </div>

        {/* More Similar Results Section */}
        <section className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">More Similar Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {similarResults.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                  <div className="flex justify-between items-center text-sm font-medium mt-2">
                    <span>{item.price}</span>
                    <ArrowRight size={16} />
                  </div>
                  <p className="text-xs text-yellow-600">Score: {item.score}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search Footer */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
            <p className="text-lg font-semibold mb-4">Looking for more something specific?</p>
            <div className="flex justify-center gap-2 flex-wrap">
              <select className="px-3 py-2 rounded-md border border-gray-300 text-sm">
                <option>All</option>
                <option>2D CAD</option>
                <option>3D Model</option>
              </select>
              <input
                type="text"
                placeholder="Search on designbank"
                className="px-4 py-2 border border-gray-300 rounded-md w-72 text-sm"
              />
            </div>
          </div>
        </section>
       <FooterHome />
      </div>
    </div>
  );
}

export default Cart;
