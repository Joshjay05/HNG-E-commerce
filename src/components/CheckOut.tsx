// // import React from 'react';
// // src/components/CheckoutPage.tsx
// import React from 'react';
// import { useSelector,useDispatch } from 'react-redux';
// import { RootState } from '../constant/Store';
// import { removeFromCart } from '../constant/CartSlice';

// const CheckoutPage: React.FC = () => {
//   const cart = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();
//   const handleRemoveFromCart = (productId: number) => {
//     dispatch(removeFromCart(productId));
//   };
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Checkout</h1>
//       {cart.map(product => (
//         <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
//           <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
//           <div className="flex-grow ml-4">
//             <h3 className="font-semibold">{product.title}</h3>
//             {/* <p>Size: {product.size}</p> */}
//             {/* <p>Quantity: {product.quantity}</p> */}
//             {/* <p>Price: ${(product.price * product.quantity).toLocaleString()}</p> */}
//           </div>
//           <button onClick={() => handleRemoveFromCart(product.id)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
//         </div>
        
//       ))}
//       <div className="mt-4">
//         <button className="bg-blue text-white py-2 px-4 rounded">Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// // UPI ID :- quickintern15@gmail.com

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../constant/Store';
import { removeFromCart } from '../constant/CartSlice';

const CheckoutPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number, size: string) => {
    dispatch(removeFromCart({ id: productId, size }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {cart.map(product => (
        <div key={`${product.id}-${product.size}`} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
          <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
          <div className="flex-grow ml-4">
            <h3 className="font-semibold">{product.title}</h3>
            <p>Size: {product.size}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${(product.price * product.quantity).toLocaleString()}</p>
          </div>
          <button onClick={() => handleRemoveFromCart(product.id, product.size)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
        </div>
      ))}
      <div className="mt-4">
        <button className="bg-blue text-white py-2 px-4 rounded">Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
