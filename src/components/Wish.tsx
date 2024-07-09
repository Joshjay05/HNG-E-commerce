import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { RootState as StoreRootState } from '../constant/Store';
import { removeFromWishlist } from '../constant/WishSlice';
import { Link } from 'react-router-dom';
interface Product {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
}
interface WishlistRootState {
    wishlist: {
        items: Product[];
    };
}
const WishlistPage: React.FC = () => {
    const wishlistItems = useSelector((state: WishlistRootState) => state.wishlist.items);
    const dispatch = useDispatch();

  return (
    <div className="p-4 mt-4 mb-[18rem]">
      <h1 className="text-2xl font-bold pt-10 pb-20">Wishlist</h1>
      {wishlistItems.map((product: Product) => (
        <div key={product.id} className="flex justify-between items-center p-4 border-b">
          <img src={product.imageUrl} alt={product.title} className="w-16 h-16" />
          <div className="flex flex-col">
            <span>{product.title}</span>
            <span>${product.price.toLocaleString()}</span>
          </div>
          <button onClick={() => dispatch(removeFromWishlist(product.id))} className="bg-red-500 text-white py-1 px-2 rounded">Remove</button>
        </div>
      ))}
      <div className="mt-4">
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default WishlistPage;
