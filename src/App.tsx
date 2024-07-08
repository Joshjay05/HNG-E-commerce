// src/App.tsx
import React from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products />
    </div>
  );
};

export default App;
