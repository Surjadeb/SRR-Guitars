import React from 'react'
import './Hero.css'
import glogo from'../Assets/glogo.png'
import arrow_icon from '../Assets/arrow.png'
import slash_img from '../Assets/slash.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>
                    FRESH ARRIVALS
                    <div>
                        <div className="logo-icon">
                            <p>new</p>
                            <img src={glogo}></img>
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>latest collections</div>
                        <img src={arrow_icon}></img>

                    </div>
                </h2>
            </div>
            <div className="hero-right">
                <img src={slash_img}></img>

            </div>
        </div>
    )
}

export default Hero