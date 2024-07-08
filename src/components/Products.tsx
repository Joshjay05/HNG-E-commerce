// src/components/Products.tsx
import React from 'react';
import ProductCard from '../Reuseable/ProductCard';
import { products } from '../constant/index';

const Products: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          // rating={product.rating}
          // reviews={product.reviews}
          // label={product.label}
        />
      ))}
    </div>
  );
};

export default Products;
