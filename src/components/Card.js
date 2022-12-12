import React from 'react';
import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';

const Card = ({ image, heading, text, underline }) => {

  let img;

  switch (image) {
    case '1':
      img = img1;
      break;
    case '2':
      img = img2;
      break;
    case '3':
      img = img3;
      break;
  }

  return (
    <div>
      <img src={img} alt={image} />
      <h1>{heading}</h1>
      <span>{text}</span>
      {underline && <span className='underline'>{underline}</span>}
    </div>
  )
}

export default Card