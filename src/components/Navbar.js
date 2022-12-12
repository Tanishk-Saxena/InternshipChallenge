import React from 'react';
import cart from '../images/cart.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_logo">
            <span className='logo'>vignette</span>
            <button className='button'>ID</button>
        </div>
        <div className='buttons'>
            <button className='get-price'>GET PRICE</button>
            <button className='buy'><img src={cart} /> BUY VIGNETTE</button>
        </div>
    </div>
  )
}

export default Navbar