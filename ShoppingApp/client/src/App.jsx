import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import Order from './pages/Order.jsx';



function App() {
  return (
    <>
      <Navbar/>
      <div>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      </div>
    </>


  );
}

export default App
