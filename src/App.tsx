// src/App.tsx
import React from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar/>
      <Hero/>
      <Products />
      <Footer/>
    </div>
  );
};

export default App;
