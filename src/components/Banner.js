import React from 'react';
import info from '../images/information-sign.svg';
import cart from '../images/cart.svg';
import verified from '../images/verified-badge.svg';

const Banner = () => {
  return (
    <div className='main-banner'>
        <div className='left'>
            <div className='stat'>
                <img src={verified} alt="verified-mark" /> 4,082,512 VIGNETTES SOLD
            </div>
            <h1 className='heading'>
                EUROPEAN E-VIGNETTES
            </h1>
            <h4 className='tagline'>
                The easiest way to buy vignettes in Slovenia, Austria, Czech, Slovakia and Hungary
            </h4>
            <div className="buttons">
                <button className='buy'><img src={cart} />BUY VIGNETTE</button>
                <button className='status'><img src={info} />CHECK STATUS</button>
            </div>
        </div>
        <div className='right'>
            <div className='car'>
                <img src={require("../images/car.webp")} alt="Car" />
                <span>2A</span>
            </div>
            <div className='bike'>
                <img src={require("../images/motorbike.webp")} alt="Bike" />
                <span>1</span>
            </div>
            <div className='van'>
                <img src={require("../images/van.webp")} alt="Van" />
                <span>2B</span>
            </div>
        </div>
    </div>
  )
}

export default Banner