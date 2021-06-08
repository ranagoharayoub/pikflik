import React from 'react'
import './PhotoCard.css'

function PhotoCard() {
    return (
        <div className='photo-card'>
            <div><img src='/logo512.png' alt='lpgp'></img></div>
            <div className="card-txt1" >I'm in love with magic photo! <br></br> Coolest gift ever</div>
            <div className="card-txt2">@raising.a.girl.gang</div>
        </div>
    )
}

export default PhotoCard
