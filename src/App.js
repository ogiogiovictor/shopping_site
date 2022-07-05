import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';

import Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
       <Route exact path='/' element={<Homepage/>} />
       <Route path='/shop' element={<ShopPage/>} />
      </Routes>
  
    </div>
  );
}

export default App;
