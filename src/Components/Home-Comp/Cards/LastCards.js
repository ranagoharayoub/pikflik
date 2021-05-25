import React from 'react'
import './LastCards.css'

function LastCards({title, disc}) {
    return (
        <div className='last-cards'>
            <div>
                <div className='cards-title-text'>{title}</div>
                <div className='disc-text'>{disc}</div>
            </div>
            <button className='learn-btn'>Learn More</button>
        </div>
    )
}

export default LastCards
