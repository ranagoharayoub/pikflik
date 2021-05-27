import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar-cont'>
            <div className='logo'>
                <img src='/Logo-01.png' width='100px' alt='logo'></img>
            </div>
            <div className='nav-btn'>
                <div className='faq-text'>FAQ</div>
                <div className='gift-text'>Gift Card</div>
                <button className='get-btn' >Get Started</button>
            </div>
        </div>
    )
}

export default Navbar
