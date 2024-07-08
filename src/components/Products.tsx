// src/components/Products.tsx
import React from 'react';
import ProductCard from '../Reuseable/ProductCard';
import { bestSeller, products } from '../constant/index';

const Products: React.FC = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4 mx-auto bg-[#282828] text-white text-center text-[40px] p-4">Best Sellers</h1>
      <div className="my-10 lg:px-[16%] px-[6%] lg:flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col  sm:gap-4 lg:gap-3 items-center">
      {bestSeller.map((b) => (
        <ProductCard
          key={b.id}
          id={b.id}
          imageUrl={b.imageUrl}
          title={b.title}
          price={b.price}
         
        />
      ))}
    </div>
<h1 className='bg-[#282828] text-white text-center text-[40px] p-4'>Shop Now</h1>
  
    <div className="my-10 px-[4%] flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col  sm:gap-4 sm:justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
         
        />
      ))}
    </div>
    <div className="my-10 px-[4%] flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col  sm:gap-4 sm:justify-center">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        imageUrl={product.imageUrl}
        title={product.title}
        price={product.price}
        
        
      />
    ))}
  </div>
   </section>
  );
};

export default Products;
