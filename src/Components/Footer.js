import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-cont'>
            <div className='footer-width'>
                <div className='footer-left'>
                    <div className='footer-about'>
                        <div className='about-heading'>ABOUT</div>
                        <div className='about-sections'>Frequent Questions<br></br></div>
                        <div className='about-sections'>Careers<br></br></div>
                        <div className='about-sections'>Accessibility Statement</div>
                    </div>
                    <div className='footer-follow-us'>
                        <div className='follow-us-heading'>Follow Us</div>
                        <div className='follow-us-sections'>Instagram<br></br></div>
                        <div className='follow-us-sections'>Facebook<br></br></div>
                        <div className='follow-us-sections'>Twitter</div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content1">
                        <a href="www.google.com" className="lnks">Contact Us</a ><br></br>
                        <a href="www.google.com" className="lnks">Careers</a ><br></br>
                        <a href="www.google.com" className="lnks">Frequent Questions</a ><br></br>
                        <a href="www.google.com" className="lnks">Gift Card</a ><br></br>
                        <a href="www.google.com" className="lnks">Accessibility Statement</a >
                    </div>
                    <div className="footer-content2">
                        <a href="www.google.com" className="lnks">PRIVACY POLICY</a ><br></br>
                        <a href="www.google.com" className="lnks">IMPRESSUM</a ><br></br>
                        <a href="www.google.com" className="lnks">TERMS OF USE</a >
                    </div>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-help-box'>
                        <div className='box-left'>
                            <img className='box-photo' src='Untitled-1-05.png' alt='no'></img>
                        </div>
                        <div className='box-right'>
                            <p className='box-txt-heading'>Need Some Help?</p>
                            <p className='box-txt'>Talk to someone from our real support team, live 24/7</p>
                            <button className='footer-btn'>Chat with us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-lower'>
                <div className='copyright'>&copy; Copyright 2015-2021 Pikflik, Ltd</div>
                <div className='footer-links'>
                    <a className='link' href='www.google.com'>Privacy Policy</a>
                    <a className='link' href='www.google.com'>Impressum</a>
                    <a className='link' href='www.google.com'>Terms of Use</a>
                </div>
                <div className='language'>
                    <select className='lan' value='lang'>
                        <option>English</option>
                        <option>German</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Footer
