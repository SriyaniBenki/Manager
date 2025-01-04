import React from 'react';
import Product from './components/Product';
import Supplier from './components/Supplier';
import Stock from './components/Stock';

function App() {
  return (
    <div className="App">
      <h1>Manager Dashboard</h1>
      <div className="components-container">
        <Product />
        <Supplier />
        <Stock />
      </div>
    </div>
  );
}

export default App;
