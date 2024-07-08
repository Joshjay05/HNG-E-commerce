import React from 'react';
type Product = {
    id: number;
    imageUrl: string;
    title: string;
    price: number ;
  };
interface ProductCardProps {
  product: Product;
  removeFromWishlist: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, removeFromWishlist }) => {
  return (
    <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 mb-2">
      <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover" />
      <div className="flex-grow ml-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p>${product.price.toLocaleString()}</p>
      </div>
      <button onClick={() => removeFromWishlist(product)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
    </div>
  );
};

export default ProductCard;