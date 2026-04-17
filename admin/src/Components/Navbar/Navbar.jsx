import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/nav-profile.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} width='70' height='70'></img>
                <p>SRR GUITARS</p>
            </div>
            <img src={profile} className='nav-profile'></img>
        </div>
    )
}

export default Navbar