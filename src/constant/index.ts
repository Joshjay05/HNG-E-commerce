// // src/data/products.ts

// import unisex from '../assets/unisex.png';
// // import women from '../assets/women.png';
// import blender from '../assets/blender.png';
// // import bridal from '../assets/bridal.png';
// import dresses from '../assets/dresses.png';
// import earring from '../assets/earring.png';
// import Gown from '../assets/Gown.png';
// // import Lace from '../assets/Lace.png';
// import Menshoe from '../assets/Menshoe.png';
// import Japanese from '../assets/Japanese.png';
// import Nigeria from '../assets/Nigeria.png';
// import packedShirt from '../assets/packedShirt.png';
// // import peach from '../assets/peach.png';
// import Shirt from '../assets/Shirt.png';
// import soso from '../assets/soso.png';
// import turkey from '../assets/turkey.png';
// import trainersShoe from '../assets/trainersShoe.png';
// import vintage from '../assets/vintage.png';
// import VintageDress from '../assets/VintageDress.png';
// import Jeans from '../assets/Jeans.png';
// import watches from '../assets/watches.png';
// import ladiesShoe from '../assets/ladiesShoe.png';
// import peachSilk from '../assets/Peachdress.png';


// export interface ProductCardProps {
//     id: number;
//     imageUrl: string;
//     title?: string;
//     price: number;
//     rating: number;
//     reviews?: number;
//     label?: string;
//     Sizes?: string;
//   }

//   export interface CardProps {
//     id: number;
//     imageUrl: string;
//     title?: string;
   
//   }

//   export const productCategories: CardProps [] =[
//     {
//       id: 1,
//       imageUrl: ladiesShoe,
//       // title: 'CATEGORY 1',
//       },
//       {
//         id: 2,
//         imageUrl: watches,
//       },
//       {
//         id: 3,
//         imageUrl: dresses,
//       },
//       {
//         id: 4,
//         imageUrl: Shirt,
//       },
//       {
//         id: 5,
//         imageUrl: earring,
//       },
//       {
//         id: 6,
//         imageUrl: packedShirt,
//       },
//       {
//         id: 7,  
//         imageUrl: trainersShoe,
//       },
//       {
//         id: 8,
//         imageUrl: blender
//       }

//   ]
  
//   export const products: ProductCardProps[] = [
//     {
//       id: 1,
//       imageUrl: turkey,
//       title: 'HAND-MADE TURKEY CASUAL',
//       price: 350000,
//       rating: 4.4,
//       reviews: 198,
//       label: 'Bestseller',
//     },
//     {
//       id: 2,
//       imageUrl: peachSilk,
//       title: 'PEACH SILK BLOUSE',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//     },
//     {
//       id: 3,
//       imageUrl: vintage,
//       title: 'VINTAGE HANDMADE BLOUSE',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//     },
//     {
//       id: 4,
//       imageUrl: unisex,
//       title: 'unisex T-Shirt',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//     },


//     // Add more products as needed
//   ];

//   export const womenProducts: ProductCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Gown,
//       title: 'LACE DESIGNERS GOWN',
//       price: 350000,
//       rating: 4.4,
//       reviews: 198,
//       label: 'Bestseller',
//       Sizes:' XS S M L XL XXL',
//     },
//     {
//       id: 2,
//       imageUrl: VintageDress,
//       title: 'vintage designers (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL',
//     },
//     {
//       id: 3,
//       imageUrl: vintage,
//       title: 'SUNSHINE SERENADE (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },
//     {
//       id: 4,
//       imageUrl: Japanese,
//       title: 'japanese youtan (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },


//     // Add more products as needed
//   ];

  

//   export interface LaunchCardProps {
//     id: number;
//     imageUrl: string;
//     title: string;
//     price: number,
//     // rating: number;
//     // reviews?: number;
//     label?: string;
//     Sizes?: string;
//   }

    
//   export const launched: LaunchCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Nigeria,
//       title: 'CUSTOM MADE Nigerian Native Attire (men)',
//       price: 350000,
//       // rating: 4.4,
//       Sizes: 'All Sizes',
//       // reviews: 198,
//       // label: 'Bestseller',
//     },
//     {
//       id: 2,
//       imageUrl: Jeans,
//       title: 'CASUAL JEANS',
//       price: 250000,
   
//       Sizes: 'XS S M L XL XXL',
//       // rating: 4.9,
//       // reviews: 691,
//       label: 'Bestseller',
//     },
//     {
//       id: 3,
//       imageUrl: soso,
//       title: 'CUSTOM MADE SENATOR WEARS',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       // label: 'Bestseller',
//     },
//     {
//       id: 4,
//       imageUrl: Menshoe,
//       title: 'MENS SHOE',
//       price: 250000,
//       Sizes: '41 42 44 45',
//       // rating: 4.9,
//       // reviews: 691,
//       // label: 'Bestseller',
//     },


//     // Add more products as needed
//   ];
  // src/data/products.ts
import black from '../assets/black.png'
import right from '../assets/RightMen.png'
import Jean from "../assets/JeansShirt.png"
import round from '../assets/round.png'
import shade from "../assets/shade.png"
import vintage from '../assets/vintage.png'

// import { StaticImageData } from 'next/image';

export interface ProductCardProps {
  id: number;
  imageUrl: string ;
  title: string;
  price: string;
  // rating: number;
  // reviews?: number;
  // label?: string;
  // Sizes?: string;
}

export interface CardProps {
  id: number;
  imageUrl: string ;
  title: string;
  price: string;
}


  export const bestSeller: CardProps [] =[
    {
      id: 1,
      imageUrl: black,
      title: 'H&M T-shirt',
       price:'$150'
      },
      {
        id: 2,
        imageUrl: right,
        title: 'H&M T-shirt',
         price:'150'
      },
      {
        id: 3,
        imageUrl: Jean,
        title: 'H&M T-shirt',
        price:'150'
      },
    //   {
    //     id: 4,
    //     imageUrl: Shirt,
    //   },
    //   {
    //     id: 5,
    //     imageUrl: earring,
    //   },
    //   {
    //     id: 6,
    //     imageUrl: packedShirt,
    //   },
    //   {
    //     id: 7,  
    //     imageUrl: trainersShoe,
    //   },
    //   {
    //     id: 8,
    //     imageUrl: blender
    //   }

  ]
  
  export const products: ProductCardProps[] = [
    {
      id: 1,
      imageUrl: vintage,
      title: 'H&M T-shirt',
   price:'150'
  
    },
    {
      id: 2,
      imageUrl: round,
      title: 'H&M T-shirt',
     price:'150'
    },
    {
      id: 3,
      imageUrl: right,
      title: 'H&M T-shirt',
     price:'150'
    },
    {
      id: 4,
      imageUrl: shade,
      title: 'H&M T-shirt',
     price:'150'
    },


    // Add more products as needed
  ];

//   export const womenProducts: ProductCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Gown,
//       title: 'LACE DESIGNERS GOWN',
//       price: 350000,
//       rating: 4.4,
//       reviews: 198,
//       label: 'Bestseller',
//       Sizes:' XS S M L XL XXL',
//     },
//     {
//       id: 2,
//       imageUrl: VintageDress,
//       title: 'vintage designers (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL',
//     },
//     {
//       id: 3,
//       imageUrl: vintage,
//       title: 'SUNSHINE SERENADE (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },
//     {
//       id: 4,
//       imageUrl: Japanese,
//       title: 'japanese youtan (Dress)',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       label: 'Bestseller',
//       Sizes: 'XS S M L XL XXL'
//     },


//     // Add more products as needed
//   ];

  

//   export interface LaunchCardProps {
//     id: number;
//     imageUrl: string;
//     title: string;
//     price: number,
//     // rating: number;
//     // reviews?: number;
//     label?: string;
//     Sizes?: string;
//   }

    
//   export const launched: LaunchCardProps[] = [
//     {
//       id: 1,
//       imageUrl: Nigeria,
//       title: 'CUSTOM MADE Nigerian Native Attire (men)',
//       price: 350000,
//       // rating: 4.4,
//       Sizes: 'All Sizes',
//       // reviews: 198,
//       // label: 'Bestseller',
//     },
//     {
//       id: 2,
//       imageUrl: Jeans,
//       title: 'CASUAL JEANS',
//       price: 250000,
   
//       Sizes: 'XS S M L XL XXL',
//       // rating: 4.9,
//       // reviews: 691,
//       label: 'Bestseller',
//     },
//     {
//       id: 3,
//       imageUrl: soso,
//       title: 'CUSTOM MADE SENATOR WEARS',
//       price: 250000,
//       rating: 4.9,
//       reviews: 691,
//       // label: 'Bestseller',
//     },
//     {
//       id: 4,
//       imageUrl: Menshoe,
//       title: 'MENS SHOE',
//       price: 250000,
//       Sizes: '41 42 44 45',
//       // rating: 4.9,
//       // reviews: 691,
//       // label: 'Bestseller',
//     },


//     // Add more products as needed
//   ];
  