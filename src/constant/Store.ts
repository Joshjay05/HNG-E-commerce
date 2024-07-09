// src/constant/Store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from '../constant/ProductSlice';
// import cartReducer from '../constant/CartSlice';
// import wishlistReducer from './WishSlice';

// const reduxStore = configureStore({
//   reducer: {
//     products: productsReducer,
//     cart: cartReducer,
//     wishlist: wishlistReducer,
//   },
// });

// export type RootState = ReturnType<typeof reduxStore.getState>;
// export type AppDispatch = typeof reduxStore.dispatch;
// export default reduxStore;

// src/store/reduxStore.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../constant/ProductSlice';
import cartReducer from '../constant/CartSlice'; // Ensure CartState is imported
import wishlistReducer from './WishSlice';

const reduxStore = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export default reduxStore;
