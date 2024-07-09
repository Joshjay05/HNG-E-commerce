// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import App from './App';
import ProductDetails from './components/SingleProduct';
import CartPage from './components/CartPage';
import WishlistPage from './components/Wish';
import './index.css';
import Layout from './Layout';
import Products from './components/Products';
import Home from './components/Home';
import CheckoutPage from './components/CheckOut';


const App: React.FC = () => {
  return (
    <div  className='overflow-x-hidden'>
      {/* <Provider store={store}> */}
      {/* <CartProvider> */}
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
<Route index  element={<Home/>} />
<Route path='product' element={<Products/>} />

            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
             </Route>
          </Routes>
        </Router>
      {/* </CartProvider> */}
    {/* </Provider> */}
    </div>
  );
};

export default App;
