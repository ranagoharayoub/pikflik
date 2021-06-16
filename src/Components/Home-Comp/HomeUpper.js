import React from 'react'
import './HomeUpper.css'
function HomeUpper() {
    return (
        <div className='home-upper'>
            <div className='three-tiles'>
                <div className='photo-tile'>
                    <div className='nail-pic'><img src='/Untitled-1-01.png' alt='pic' height='100px'></img></div>
                    <div className='photo-text'>Photos come Alive!</div>
                    <div className='work-texts' >Works with both iOS & Android</div>
                </div>
                <div className='free-tile'>
                    <div className='nail-pic'><img src='/Untitled-1-02.png' alt='pic' height='100px'></img></div>
                    <div className='photo-text'>Free shipping within the USA</div>
                    <div className='work-texts'>Created for you in about a week</div>
                </div>
                <div className='guarantee-tile'>
                    <div className='nail-pic'><img src='/Untitled-1-03.png' alt='pic' height='100px'></img></div>
                    <div className='photo-text'>Exuberance guaranteed</div>
                    <div className='work-texts'>Don't love it? Get a full refund</div>
                </div>
            </div>
            <div className='magic-cont'>
                <div className='text-box'>
                    <div className='magic-text'>The magic acrylic that<br></br>comes alive with your video</div>
                    <div className='phone-text'>Use your phone camera to scan the code and unlock your<br></br>video in Augmented Reality within seconds.<br></br>No app download required!*</div>
                </div>
                <div className='photo-box'>
                    <img className="photo-box-gif" src="/looping gif .gif" alt="gif here"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeUpper
