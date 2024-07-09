import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number ;
}

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;