import vintage from '../assets/vintage.png';
import round from '../assets/round.png';
import shade from '../assets/shade.png';
import black from '../assets/black.png';
import right from '../assets/RightMen.png';
import Jean from '../assets/JeansShirt.png';

export interface ProductCardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  addToCart?: (id: number) => void;
  addToWishlist?: (id: number) => void;
  size?: string;
  quantity?: number;
}

export interface BestCardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  size?: string;
  quantity?: number;
  addToCart?: (id: number) => void;
  addToWishlist?: (id: number) => void;
}

export const bestSeller: BestCardProps[] = [
  {
    id: 1,
    imageUrl: black,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
  {
    id: 2,
    imageUrl: right,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
  {
    id: 3,
    imageUrl: Jean,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
];
export interface CartItem extends ProductCardProps {
  size: string;
  quantity: number;
}
export const products: ProductCardProps[] = [
  {
    id: 1,
    imageUrl: vintage,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
  {
    id: 2,
    imageUrl: round,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
  {
    id: 3,
    imageUrl: right,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
  {
    id: 4,
    imageUrl: shade,
    title: 'H&M T-shirt',
    price: 150,
    size: 'M', // default value
    quantity: 1, // default value
  },
];
