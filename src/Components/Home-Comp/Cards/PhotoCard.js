import React from 'react'
import './PhotoCard.css'

function PhotoCard({img}) {
    return (
        <div className='photo-card'>
            <div className='img-sect'>
                <img src={img} height='auto' alt='img'></img>
            </div>
            <div className="card-txt1" >I'm in love with magic photo! <br></br> Coolest gift ever</div>
            <div className="card-txt2">@raising.a.girl.gang</div>
        </div>
    )
}

export default PhotoCard
