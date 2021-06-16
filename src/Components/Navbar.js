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
            <input type="checkbox" id="check"></input>
            <label for="check">
                <i class="fas fa-bars" id="m-btn"></i>
                {/* <i class="fas fa-times" id="cancel"></i> */}
            </label>
                {/* <div className="sidebar">
                    <div class="menu-icon">Menu</div>
                    <ul>
                        <li><a href="www.google.com" className="menu-btn">FAQ<i class="far fa-question-circle"></i></a></li>
                        <li><a href="www.google.com" className="menu-btn">Gift Card<i class="fas fa-gift"></i></a></li>
                    </ul>
                </div> */}
        </div>
    )
}

export default Navbar
