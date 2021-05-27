import React from 'react'
import './PhotoCard.css'

function PhotoCard() {
    return (
        <div className='photo-card'>
            <div><img src='/logo512.png' alt='lpgp'></img></div>
            <div style={{fontSize:'large', fontWeight:'bold'}}>I'm in love with magic photo! <br></br> Coolest gift ever</div>
            <div>@raising.a.girl.gang</div>
        </div>
    )
}

export default PhotoCard
