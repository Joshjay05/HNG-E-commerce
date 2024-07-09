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
}

export interface CardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  addToCart?: (id: number) => void;
  addToWishlist?: (id: number) => void;
}

export const bestSeller: CardProps[] = [
  {
    id: 1,
    imageUrl: black,
    title: 'H&M T-shirt',
    price: 150,
  },
  {
    id: 2,
    imageUrl: right,
    title: 'H&M T-shirt',
    price: 150,
  },
  {
    id: 3,
    imageUrl: Jean,
    title: 'H&M T-shirt',
    price: 150,
  },
];

export const products: ProductCardProps[] = [
  {
    id: 1,
    imageUrl: vintage,
    title: 'H&M T-shirt',
    price: 150,
  },
  {
    id: 2,
    imageUrl: round,
    title: 'H&M T-shirt',
    price: 150,
  },
  {
    id: 3,
    imageUrl: shade,
    title: 'H&M T-shirt',
    price: 150,
  },
];
