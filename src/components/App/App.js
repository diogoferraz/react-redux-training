import React from 'react';
import Header from '../Header/Header';
import Display from '../Display/Display';
import Cart from '../Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Cart/>
      <Display />
      <footer className="footer">
        Shop Project
      </footer>
    </div>
  );
}

export default App;
