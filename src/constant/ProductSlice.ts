import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardProps, bestSeller, products } from '../constant/index';

// Define the state interface
export interface ProductsState {
  products: ProductCardProps[];
  bestSeller: ProductCardProps[];
}

// Set initial state values
const initialState: ProductsState = {
  products: products,
  bestSeller: bestSeller,
};

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductCardProps>) {
      state.products.push(action.payload);
    },
    addBestSeller(state, action: PayloadAction<ProductCardProps>) {
      state.bestSeller.push(action.payload);
    },
    // Define other reducers as needed
  },
});

// Export actions and reducer from the slice
export const { addProduct, addBestSeller } = productsSlice.actions;
export default productsSlice.reducer;
// src/constant/ProductSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ProductCardProps, BestCardProps } from '../constant/index';

// interface ProductsState {
//   products: ProductCardProps[];
//   bestSeller: BestCardProps[];
// }

// const initialState: ProductsState = {
//   products: [
//     {
//       id: 1,
//       imageUrl: 'path/to/vintage.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     {
//       id: 2,
//       imageUrl: 'path/to/round.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     {
//       id: 3,
//       imageUrl: 'path/to/shade.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     // Add other products as needed
//   ],
//   bestSeller: [
//     {
//       id: 1,
//       imageUrl: 'path/to/black.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     {
//       id: 2,
//       imageUrl: 'path/to/RightMen.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     {
//       id: 3,
//       imageUrl: 'path/to/JeansShirt.png',
//       title: 'H&M T-shirt',
//       price: 150,
//     },
//     // Add other best seller items as needed
//   ],
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct(state, action: PayloadAction<ProductCardProps>) {
//       state.products.push(action.payload);
//     },
//     addBestSeller(state, action: PayloadAction<BestCardProps>) {
//       state.bestSeller.push(action.payload);
//     },
//     // Define other reducers as needed
//   },
// });

// export const { addProduct, addBestSeller } = productsSlice.actions;
// export default productsSlice.reducer;
// src/constant/ProductSlice.ts
// // src/constant/ProductSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ProductCardProps, BestCardProps } from '../constant/index';

// export interface ProductsState {
//   products: ProductCardProps[];
//   bestSeller: BestCardProps[];
// }

// const initialState: ProductsState = {
//   products: [],
//   bestSeller: [],
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct(state, action: PayloadAction<ProductCardProps>) {
//       state.products.push(action.payload);
//     },
//     addBestSeller(state, action: PayloadAction<BestCardProps>) {
//       state.bestSeller.push(action.payload);
//     },
//     // Add other reducers as needed
//   },
// });

// export const { addProduct, addBestSeller } = productsSlice.actions;
// export default productsSlice.reducer;
