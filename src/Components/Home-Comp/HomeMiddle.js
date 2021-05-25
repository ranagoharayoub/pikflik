import React from 'react'
import PhotoCard from './Cards/PhotoCard'
import './HomeMiddle.css'
function HomeMiddle() {
    return (
        <div className='home-middle'>
            <div className='title-sect'>
                <div className='story-text'>A Story in Every Photo</div>
                <div className='love-text'>We love seeing the smiles on our customer faces!</div>
            </div>
            <div className='cards-sect'>
                <PhotoCard></PhotoCard>
                <PhotoCard></PhotoCard>
                <PhotoCard></PhotoCard>
                
            </div>
        </div>
    )
}

export default HomeMiddle
