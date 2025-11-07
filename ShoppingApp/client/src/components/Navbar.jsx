import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <h1>Navbar</h1>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/profile" style={{ margin: '0 1rem' }}>Profile</Link>
      <Link to="/cart" style={{ margin: '0 1rem' }}>Cart</Link>
      <Link to="/order" style={{ margin: '0 1rem' }}>Order</Link>
    </nav>
  );
}

export default Navbar;
