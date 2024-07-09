import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../constant/Store';
import { removeFromCart } from '../constant/CartSlice';

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.map(product => (
        <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
          <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
          <div className="flex-grow ml-4">
            <h3 className="font-semibold">{product.title}</h3>
            <p>${product.price.toLocaleString()}</p>
          </div>
          <button onClick={() => handleRemoveFromCart(product.id)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
        </div>
      ))}
      <Link to="/checkout" className="bg-green-500 text-white py-2 px-4 rounded">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
