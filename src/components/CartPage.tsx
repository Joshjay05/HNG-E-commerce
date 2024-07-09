// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { RootState } from '../constant/Store';
// import { removeFromCart } from '../constant/CartSlice';

// const CartPage: React.FC = () => {
//   const cart = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (productId: number) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       {cart.map(product => (
//         <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
//           <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
//           <div className="flex-grow ml-4">
//             <h3 className="font-semibold">{product.title}</h3>
//             <p>${product.price.toLocaleString()}</p>
//           </div>
//           <button onClick={() => handleRemoveFromCart(product.id)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
//         </div>
//       ))}
//       <Link to="/checkout" className="bg-green text-white py-2 px-4 rounded">Proceed to Checkout</Link>
//     </div>
//   );
// };

// export default CartPage;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../constant/Store';
import {  updateQuantity } from '../constant/CartSlice';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [size, setSize] = useState('S');
//   const [quantity, setQuantity] = useState(1);
//   const handleRemoveFromCart = (productId: number, size: string) => {
//     dispatch(removeFromCart({ id: productId, size }));
//   };
 
  const handleUpdateQuantity = (productId: number, size: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, size, quantity }));
  };

  if (cart.length === 0) {
    return <div className="p-4">Cart is empty</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold my-[50px] ml-7 m">Cart</h1>
    <section className="lg:p-4 p-2 lg:grid lg:grid-cols-2 gap-4">
      {cart.map(product => (
        <article key={`${product.id}-${product.size}`} className="flex md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-2 items-center md: lg:p-4 md:p-[34px] p-2 border border-gray mb-2 gap-1">
         
         <article className='ls '>
      <img src={product.imageUrl} alt={product.title} className="w-full  sm:max-h-[150px] sm:w-[300px] md:max-h-[350px]   lg:h-[400px]" />
      <div className='bg-[#F5FF32] lg:py-3 md:p-3 px-1'>
      <h1 className="lg:text-2xl font-bold py-2">{product.title}</h1>
      <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
      </div>
      
      </article>
          <div className="flex flex-col gap-8 sm:gap-3">
            <div>
            <div className='flex lg:gap-[37px] md:gap-6 py-2'>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      
      
      <div className='flex items-center lg:gap-3 gap-[3px] md:gap-2 my-4 sm:my-1'>
      <label>Quantity:</label>
              <button  className='lg:text-[22px] bg-black  text-white font-light' onClick={() => handleUpdateQuantity(product.id, product.size, product.quantity > 1 ? product.quantity - 1 : 1)}><BiMinus/></button>
              <span>{product.quantity}</span>
              <button  className='lg:text-[22px] bg-black  text-white font-light' onClick={() => handleUpdateQuantity(product.id, product.size, product.quantity + 1)}><BiPlus/></button>
            </div>
      </div>
              
            <p>${(product.price * product.quantity).toLocaleString()}</p>
          </div>
         
        </article>
      ))}
      
    </section>
      <div className="flex md:flex-col sm:flex-col justify-center items-center my-6 lg:gap-20 gap-6">
      <Link to="/checkout" className="bg-black text-white py-2 px-4 rounded">Proceed to Checkout</Link>

      <Link to="/" className="bg-black text-white py-2 px-4 rounded ml-4">Continue Shopping</Link>
      </div>
    </>
  );
};

export default CartPage;
