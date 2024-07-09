
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../constant/ProductSlice';
import cartReducer from '../constant/CartSlice';
import wishlistReducer from './WishSlice';

const reduxStore = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export default reduxStore;

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
// src/constant/Store.ts
// // src/constan// src/constant/Store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from '../constant/ProductSlice'; // Ensure ProductsState is imported
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
