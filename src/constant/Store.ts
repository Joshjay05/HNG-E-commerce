import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from '../constant/CartSlice'
import wishlistReducer from '../constant/WishSlice';
// import CartState 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = {
  wishlist: [];
  cart: CartState; // Use the CartState type directly here
  // Add other types as needed
};
export type AppDispatch = typeof store.dispatch;

export default store;