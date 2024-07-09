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
