import React from 'react';
import cart from '../images/cart.svg';
import $ from 'jquery';

const Navbar = () => {


  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 80) {
        $(".navbar").css("background" , "#00a3ff");
        $(".navbar .navbar_logo .button").css("color", "#00a3ff").css("background", "white");
      }
      
      else{
        $(".navbar").css("background" , "");  	
        $(".navbar .navbar_logo .button").css("color", "white").css("background", "#00a3ff");
      }
    })
  })

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