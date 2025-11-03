import React from 'react'

function Header() {
  return (
    <div className='header'>
      <h1 className='logo'>Shopping App</h1>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
