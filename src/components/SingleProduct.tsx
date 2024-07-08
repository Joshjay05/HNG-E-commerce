import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../constant/CartContext';

const ProductDetails: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>();
  const { state, dispatch } = useCart();

  // Type guard to ensure id is a valid integer
  const productId = parseInt(id);
  if (isNaN(productId)) return <div>Invalid product ID</div>;

  const product = state.cart.find(p => p.id === productId);

  if (!product) return <div>Product not found</div>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="p-4">
      <img src={product.imageUrl} alt={product.title} className="w-full h-auto" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
      <div>
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;