// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, buttonText, onButtonClick }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-96 object-cover" 
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
        <button 
          className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
