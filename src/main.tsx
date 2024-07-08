import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './constant/Store';
import App from './App';
import ProductDetails from './components/SingleProduct';
import CartPage from './components/CartPage';
import WishlistPage from './components/Wish';
import { CartProvider } from './constant/CartContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/"  element={<App />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);






