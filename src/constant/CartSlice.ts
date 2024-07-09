// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//   id: number;
//   imageUrl: string;
//   title: string;
//   price: number ;
// }

// export interface CartState {
//   items: Product[];
// }

// export const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<Product>) {
//       state.items.push(action.payload);
//     },
//     removeFromCart(state, action: PayloadAction<number>) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ProductCardProps } from './index';

// // Define the cart item interface
// export interface CartItem extends ProductCardProps {
//   size: string;
//   quantity: number;
// }

// // Define the state interface
// export interface CartState {
//   items: CartItem[];
// }

// // Set initial state values
// const initialState: CartState = {
//   items: [],
// };

// // Create the cart slice
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<CartItem>) {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart(state, action: PayloadAction<{ id: number, size: string }>) {
//       state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
//     },
//     updateQuantity(state, action: PayloadAction<{ id: number, size: string, quantity: number }>) {
//       const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },
//   },
// });

// // Export actions and reducer from the slice
// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


// src/constant/CartSlice.ts
// src/constant/CartSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // Define the CartItem interface
// interface CartItem {
//   id: number;
//   imageUrl: string;
//   title: string;
//   price: number;
//   size: string;
//   quantity: number;
// }

// // Define the CartState interface
// interface CartState {
//   items: CartItem[];
// }

// // Set initial state values
// const initialState: CartState = {
//   items: [],
// };

// // Create the cart slice
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<CartItem>) {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart(state, action: PayloadAction<{ id: number; size: string }>) {
//       state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
//     },
//     updateQuantity(state, action: PayloadAction<{ id: number; size: string; quantity: number }>) {
//       const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },
//   },
// });

// // Export actions and reducer from the slice
// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

// src/constant/CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the CartItem interface
interface CartItem {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  size: string;
  quantity: number;
}

// Export the CartState interface
export interface CartState {
  items: CartItem[];
}

// Set initial state values
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number; size: string }>) {
      state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
    },
    updateQuantity(state, action: PayloadAction<{ id: number; size: string; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// Export actions and reducer from the slice
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

