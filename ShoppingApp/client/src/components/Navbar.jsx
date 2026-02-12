import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MyStore</h1>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
