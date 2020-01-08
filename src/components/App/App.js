import React from 'react';
import Header from '../Header/Header';
import Listing from '../Listing/Listing';
import Cart from '../Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Cart/>
      <Listing />
      <footer className="footer">
        Shop Project
      </footer>
    </div>
  );
}

export default App;
