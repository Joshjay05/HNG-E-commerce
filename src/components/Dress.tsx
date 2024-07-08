// src/components/Products.tsx
import React from 'react';
// import ProductCard from './ProductCard';
import DressCard from '../Reuseable/File';

const Products: React.FC = () => {
  const handleViewProductsClick = () => {
    console.log('View Products button clicked');
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <DressCard 
        imageUrl="path-to-your-image.jpg" 
        title="Wedding Wear" 
        buttonText="VIEW PRODUCTS" 
        onButtonClick={handleViewProductsClick} 
      />
      {/* Add more ProductCard components as needed */}
    </div>
  );
};

export default Products;
