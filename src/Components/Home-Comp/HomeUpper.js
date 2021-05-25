import React from 'react'
import './HomeUpper.css'
function HomeUpper() {
    return (
        <div className='home-upper'>
            <div className='three-tiles'>
                <div className='photo-tile'>
                    <div className='photo-text'>Photo Comes Alive!</div>
                    <div className='work-texts' >Work with both iOS % android </div>
                </div>
                <div className='free-tile'>
                    <div className='photo-text'>Free Shipping within the USA</div>
                    <div className='work-texts'>Created for you in about a week</div>
                </div>
                <div className='guarantee-tile'>
                    <div className='photo-text'>Exuberance Guaranteed</div>
                    <div className='work-texts'>Don't love it? Get a full refund</div>
                </div>
            </div>
            <div className='magic-cont'>
                <div className='text-box'>
                    <div className='magic-text'>The Magic Acrylic that <br></br> comes along with your video </div>
                    <div className='phone-text'>Use your phone camera to scan the code and unlock your <br></br>video in Augmented Reality within seconds. <br></br>No app download required</div>
                </div>
                <div className='photo-box'>

                </div>
            </div>
        </div>
    )
}

export default HomeUpper
