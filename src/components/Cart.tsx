// src/components/CartPage.tsx
import React from 'react';
import { useCart } from '../constant/CartContext';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', product });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {state.cart.map(product => (
        <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
          <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
          <div className="flex-grow ml-4">
            <h3 className="font-semibold">{product.title}</h3>
            <p>${product.price.toLocaleString()}</p>
          </div>
          <button onClick={() => removeFromCart(product)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
        </div>
      ))}
      <Link to="/checkout" className="bg-green text-white py-2 px-4 rounded">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
