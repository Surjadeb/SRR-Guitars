import React from 'react'
import './Offers.css'
import joe_img from '../Assets/joe.png'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>The Best Selling Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={joe_img} ></img>

        </div>
    </div>
  )
}

export default Offers