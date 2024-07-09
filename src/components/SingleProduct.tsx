import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../constant/Store';
import { addToCart } from '../constant/CartSlice';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "", 10);
  const dispatch = useDispatch();

  // Select product from either products or bestSeller arrays
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === productId) ||
    state.products.bestSeller.find((p) => p.id === productId)
  );

  if (isNaN(productId)) return <div>Invalid product ID</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log('Added to cart');
  };

  return (
    <div className="p-4">
      <img src={product.imageUrl} alt={product.title} className="w-full h-auto" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
      <div>
        <button onClick={handleAddToCart} className="bg-blue text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
