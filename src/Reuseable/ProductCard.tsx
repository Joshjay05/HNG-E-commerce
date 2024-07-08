import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { ProductCardProps } from '../constant/index';

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 w-full sm:w-[88%] md:w-[80%] lg:w-[82%] m-2">
      <div className="h-[40vh] w-full overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 bg-[#F5FF32] flex flex-col justify-between h-44">
        <div>
          <div className="flex justify-between  items-center md:items-start">
            <h3 className="text-base font-semibold">{title}</h3>
            <FaHeart size={20} className="text-black" />
          </div>
          <p className="mt-2 text-xl font-bold text-gray-900">${price.toLocaleString()}</p>
        </div>
        <a href='/' className="mt-4 bg-yellow-500 text-white font-semibold border  text-center p-[4px]  rounded-xl bg-black  ml-[70%] md:ml-[53%] lg:w-[6vw] sm:ml-[55%] sm:w-[50%]">Add to Cart</a>
      </div>
    </div>
  );
};

export default ProductCard;
