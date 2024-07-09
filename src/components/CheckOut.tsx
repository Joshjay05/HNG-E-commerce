import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../constant/Store';
import { removeFromCart } from '../constant/CartSlice';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number, size: string) => {
    dispatch(removeFromCart({ id: productId, size }));
  };

  // Calculate subtotal
  const subtotal = cart.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  return (
    <div className="p-4 mt-[3rem] mb-[12rem]">
      <h1 className="text-2xl font-bold pt-2 pb-20">Checkout</h1>
      {cart.map(product => (
        <div key={`${product.id}-${product.size}`} className="flex justify-between items-center p-4 bg-gray-100 mb-20">
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

      <div className="flex justify-between items-center mb-4">
        <p>Items: {cart.length}</p>
        <p>Sub Total: ${subtotal.toLocaleString()}</p>
      </div>
      
      <div className="mx-auto mt-10 flex sm:flex-col md:flex-col justify-center items-center gap-6 lg:gap-[28rem]">
        <button className="bg-black text-white py-2 px-4 rounded">Proceed to payment</button> 
        <Link to='/cart' className="bg-[#F5FF32] text-black  font-bold py-[12px] px-12 rounded">Back to Cart</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
