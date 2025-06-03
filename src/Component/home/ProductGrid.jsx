import React, { useState } from 'react';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import product1 from "../../assets/products/image1.jpg"
import product2 from "../../assets/products/image2.jpg"
import product3 from "../../assets/products/image3.jpg"
import product4 from "../../assets/products/image4.jpg"
import product5 from "../../assets/products/image5.jpg"
import product6 from "../../assets/products/image6.jpg"
import product7 from "../../assets/products/image7.jpg"
import product8 from "../../assets/products/image8.jpg"
import product9 from "../../assets/products/image9.jpg"
import product10 from "../../assets/products/image10.jpg"
import product11 from "../../assets/products/image11.jpg"
import product12 from "../../assets/products/image12.jpg"


const products = [
  {
    id: 1,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.5,
    sales: 273,
    category: "Graphic Design",
    image: product1 ,
  },
  {
    id: 2,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.8,
    sales: 189,
    category: "3D Art",
    image: product2,
  },
  {
    id: 3,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.3,
    sales: 157,
    category: "Graphic Design",
    image: product3,
  },
  {
    id: 4,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.7,
    sales: 321,
    category: "Illustration",
    image: product4,
  },
  {
    id: 5,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.2,
    sales: 97,
    category: "3D Art",
    image: product5,
  },
  {
    id: 6,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.9,
    sales: 284,
    category: "Illustration",
    image: product6,
  },
  {
    id: 7,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.4,
    sales: 128,
    category: "Graphic Design",
    image: product7,
  },
  {
    id: 8,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.6,
    sales: 211,
    category: "3D Art",
    image: product8,
  },
  {
    id: 9,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.1,
    sales: 76,
    category: "Illustration",
    image: product9,
  },
  {
    id: 10,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.1,
    sales: 76,
    category: "Illustration",
    image: product10,
  },
  {
    id: 11,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.1,
    sales: 76,
    category: "Illustration",
    image: product11,
  },
  {
    id: 12,
    title: "Modern Dome Pavilion CAD Set",
    studio: "Studio Name",
    price: "$114",
    rating: 4.1,
    sales: 76,
    category: "Illustration",
    image: product12,
  },
];

const categories = ["All", "Graphic Design", "3D Art", "Illustration", "UI/UX", "Motion"];

const ProductGrid = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 py-6">
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found. Try another search term or category.</p>
        </div>
      )}
      
      <div className="mt-16 mb-8">
        <h2 className="text-xl font-medium text-center mb-6">Looking for more something specific?</h2>
        <div className="max-w-md mx-auto relative">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search on designbank"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                🔍
              </button>
            </div>
            <div className="ml-2">
              <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium flex items-center">
                All
                <span className="ml-1">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;