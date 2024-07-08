import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../constant/Store';
import { removeFromCart } from '../constant/CartSlice';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.map(product => (
        <div key={product.id} className="flex justify-between items-center p-4 border-b">
          <img src={product.imageUrl} alt={product.title} className="w-16 h-16" />
          <div className="flex flex-col">
            <span>{product.title}</span>
            <span>${product.price.toLocaleString()}</span>
          </div>
          <button onClick={() => dispatch(removeFromCart(product.id))} className="bg-red-500 text-white py-1 px-2 rounded">Remove</button>
        </div>
      ))}
      <div className="mt-4">
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;
