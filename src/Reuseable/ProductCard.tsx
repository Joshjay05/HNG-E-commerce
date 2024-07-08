// import React from 'react';
// import { FaHeart, FaStar } from 'react-icons/fa';
import { ProductCardProps } from '../constant/index';

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* {label && <span className="text-xs font-semibold text-green-600">{label}</span>} */}
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center">
          {/* <span className="text-yellow-500">{rating.toFixed(1)}★</span> */}
          {/* <span className="text-gray-600 ml-2">({reviews} reviews)</span> */}
        </div>
        <p className="mt-2 text-xl font-bold text-gray-900">${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
