// // src/constant/CartContext.tsx
// import React, { createContext, useReducer, useContext } from 'react';

// interface Product {
//   id: number;
//   imageUrl: string;
//   title: string;
//   price: number;
// }

// interface CartState {
//   cart: Product[];
//   wishlist: Product[];
// }

// type CartAction =
//   | { type: 'ADD_TO_CART'; product: Product }
//   | { type: 'ADD_TO_WISHLIST'; product: Product };

// const initialState: CartState = {
//   cart: [],
//   wishlist: [],
// };

// const cartReducer = (state: CartState, action: CartAction): CartState => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return { ...state, cart: [...state.cart, action.product] };
//     case 'ADD_TO_WISHLIST':
//       return { ...state, wishlist: [...state.wishlist, action.product] };
//     default:
//       return state;
//   }
// };

// const CartContext = createContext<{
//   state: CartState;
//   dispatch: React.Dispatch<CartAction>;
// }>({ state: initialState, dispatch: () => null });

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
// src/constant/CartContext.tsx
// import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// const CartContext = createContext<any>(null);

// const initialState = {
//   cart: [],
//   wishlist: [],
// };

// const cartReducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return { ...state, cart: [...state.cart, action.product] };
//     case 'REMOVE_FROM_CART':
//       return { ...state, cart: state.cart.filter((item: any) => item.id !== action.product.id) };
//     case 'ADD_TO_WISHLIST':
//       return { ...state, wishlist: [...state.wishlist, action.product] };
//     case 'REMOVE_FROM_WISHLIST':
//       return { ...state, wishlist: state.wishlist.filter((item: any) => item.id !== action.product.id) };
//     default:
//       return state;
//   }
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useReducer } from 'react';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number ;
}

interface CartState {
  cart: Product[];
  wishlist: Product[];
}

interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'ADD_TO_WISHLIST' | 'REMOVE_FROM_WISHLIST';
  product: Product;
}

const initialState: CartState = {
  cart: [],
  wishlist: [],
};

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> }>({
  state: initialState,
  dispatch: () => undefined,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.product] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.product.id) };
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlist: [...state.wishlist, action.product] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.product.id) };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
  };
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
