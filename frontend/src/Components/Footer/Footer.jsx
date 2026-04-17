import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import insta from '../Assets/instagram_icon.png'
import pinte from '../Assets/pintester_icon.png'
import wap from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo}></img>
            <p>SRR GUITARS</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta}></img>
            </div>
             <div className="footer-icons-container">
                <img src={pinte}></img>
            </div>
             <div className="footer-icons-container">
                <img src={wap}></img>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer