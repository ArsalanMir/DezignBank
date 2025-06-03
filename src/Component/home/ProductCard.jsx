import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={14} fill="#FBBF24" stroke="#FBBF24" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half\" className="relative w-3.5 h-3.5">
          <Star size={14} fill="#FBBF24" stroke="#FBBF24" className="absolute" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
          <Star size={14} fill="none" stroke="#FBBF24" className="absolute" />
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={14} fill="none" stroke="#FBBF24" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative pb-[66.67%] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.title}</h3>
        <p className="text-xs text-gray-500 mt-1">by {product.studio}</p>
        
        <div className="flex justify-between items-end mt-3">
          <div className="text-sm font-semibold">{product.price}</div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">CAD</span>
            <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">3D</span>
          </div>
        </div>
        
        <div className="flex items-center mt-2 text-xs">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="ml-1 text-gray-500">({product.sales})</span>
        </div>
        
        <div className="mt-3 flex justify-between items-center text-gray-400 text-xs">
          <button className="p-1 hover:text-gray-600 transition-colors">
            <span>💬</span>
          </button>
          <button className="p-1 hover:text-gray-600 transition-colors">
            <span>❤️</span>
          </button>
          <button className="ml-auto p-1 border border-gray-200 rounded hover:border-gray-300 transition-colors">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;