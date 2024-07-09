// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../constant/Store';
// import { addToCart } from '../constant/CartSlice';

// const ProductDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const productId = parseInt(id ?? "", 10);
//   const dispatch = useDispatch();

//   // Select product from either products or bestSeller arrays
//   const product = useSelector((state: RootState) =>
//     state.products.products.find((p) => p.id === productId) ||
//     state.products.bestSeller.find((p) => p.id === productId)
//   );

//   if (isNaN(productId)) return <div>Invalid product ID</div>;
//   if (!product) return <div>Product not found</div>;

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     console.log('Added to cart');
//   };

//   return (
//     <div className="p-4">
//       <img src={product.imageUrl} alt={product.title} className="w-full h-auto" />
//       <h1 className="text-2xl font-bold">{product.title}</h1>
//       <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
//       <div>
//         <button onClick={handleAddToCart} className="bg-blue text-white py-2 px-4 rounded">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../constant/Store';
import { addToCart } from '../constant/CartSlice';
import { BiMinus, BiPlus } from 'react-icons/bi';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "", 10);
  const dispatch = useDispatch();
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  // Select product from either products or bestSeller arrays
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === productId) ||
    state.products.bestSeller.find((p) => p.id === productId)
  );

  if (isNaN(productId)) return <div>Invalid product ID</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size, quantity }));
    console.log('Added to cart');
  };

  return (
    <section className="p-4 flex items-center gap-[2rem] my-20">
             
      <article>
      <img src={product.imageUrl} alt={product.title} className="w-full h-auto   lg:h-auto" />
      <div className='bg-[#F5FF32] py-3 px-1'>
      <h1 className="text-2xl font-bold py-2">{product.title}</h1>
      <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
      </div>
      
      </article>
        <article>
      <div className='flex gap-[37px] py-2'>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div className='flex  items-center gap-3'>
        <label>Quantity:</label>
        <button className='text-[22px] bg-black  text-white font-light ' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}> <BiMinus/></button>
        <span>{quantity}</span>
        <div className='flex items-start gap-2'>
        <button onClick={() => setQuantity(quantity + 1)} className='text-[22px] bg-black  text-white font-light bg'><BiPlus/></button>
        </div>
      </div>
      <div>
        <button onClick={handleAddToCart} className="my-5 bg-black text-white py-[3px] px-3 rounded-xl cursor-pointer">Add to Cart</button>
      </div>
        </article>

      
    </section>
  );
};

export default ProductDetails;
