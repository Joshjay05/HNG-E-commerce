import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductCardProps, BestCardProps, CartItem, } from '../constant/index'; 
import ProductCard from '../Reuseable/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../constant/Store';
import { addToCart } from '../constant/CartSlice';
import { addToWishlist } from '../constant/WishSlice';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const bestSeller = useSelector((state: RootState) => state.products.bestSeller);

  const handleAddToCart = (product: ProductCardProps | BestCardProps) => {
    const cartItem: CartItem = {
      id: product.id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      size: '', // Add appropriate size based on your application logic
      quantity: 1, // Example default quantity
    };
    dispatch(addToCart(cartItem));
  };

  const handleAddToWishlist = (product: ProductCardProps | BestCardProps) => {
    const cartItem: CartItem = {
      id: product.id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      size: '', // Add appropriate size based on your application logic
      quantity: 1, // Example default quantity
    };
    dispatch(addToWishlist(cartItem));
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4 mx-auto bg-[#282828] text-white text-center text-[40px] p-4">Best Sellers</h1>
      <div className="my-10 lg:px-[16%] px-[6%] lg:flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col sm:gap-4 lg:gap-3 items-center">
        {bestSeller.map((b: BestCardProps) => (
          <ProductCard
            key={b.id}
            id={b.id}
            imageUrl={b.imageUrl}
            title={b.title}
            price={b.price}
            addToCart={() => handleAddToCart(b)}
            addToWishlist={() => handleAddToWishlist(b)}
          />
        ))}
      </div>
      <h1 className="bg-[#282828] text-white text-center text-[40px] p-4">Shop Now</h1>
      <div className="my-10 px-[4%] lg:flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col sm:gap-4 lg:gap-3 items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            addToCart={() => handleAddToCart(product)}
            addToWishlist={() => handleAddToWishlist(product)}
          />
        ))}
      </div>
      <div className="my-10 px-[4%] lg:flex justify-center md:grid md:grid-cols-2 sm:flex sm:flex-col sm:gap-4 lg:gap-3 items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            addToCart={() => handleAddToCart(product)}
            addToWishlist={() => handleAddToWishlist(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
