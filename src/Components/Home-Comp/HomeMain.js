import React from 'react'
import './HomeMain.css'

function HomeMain() {
    return (
        <div className='home-main'>
            <div className="home-mobile">
                <div className='mobile-transform'>Transform your photo (and video!) into magical decor</div>
                <div className="mobile-block"></div>
            </div>
            <div className='main-left'>
                <div className='left'>
                    <div className='left-img'>
                        <img className="left-image" src="/bottom left.jpeg" alt="popop"></img>
                    </div>
                </div>
                <div className='right'>
                    <div className='right-img-1'>
                        <img className="right-image-1" src="/top image.jpg" alt="popop"></img>
                    </div>
                    <div className='right-img-2'>
                        <img className="right-image-2" src="/bottom right.png" alt="popop"></img>
                    </div>
                </div>
            </div>
            <div className='main-right'>
                <div className='transform'>Transform your photo (and video!) into magical decor</div>
                <div className='create'>Create your 5x7 1" thick HD Acrylic Block using your favorite digital memories</div>
                <button className='start-btn'>Get Started</button>
                <div className='free'><img src='/Untitled-1-04.png' alt='shipping' height='30px'></img>Free nationwide shipping!</div>
            </div>
        </div>
    )
}

export default HomeMain
