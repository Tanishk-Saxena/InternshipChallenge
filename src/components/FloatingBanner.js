import React from 'react';
import Card from './Card';

const details = [
    {
        image: '1',
        heading: 'SECURE PAYMENT',
        text: 'Pay for vignettes in one click for several cars and countries at once'
    },
    {
        image: '2',
        heading: 'TIME TRACKING',
        text: 'Keep track of your vignette or receive our notifications'
    },
    {
        image: '3',
        heading: 'LANGUAGES',
        text: 'You will understand us in ',
        underline: '14 languages'
    }
]

const FloatingBanner = () => {
  return (
    <>
    <div className="section">
        <div className='floating-banner'>
            {details.map((detail)=>{
                return <Card key={detail.heading} image={detail.image} heading={detail.heading} text={detail.text} underline={detail.underline} />
            })}
        </div>
    </div>
    <div className="section2">
            <h1>hii</h1>
    </div>
    </>
  )
}

export default FloatingBanner