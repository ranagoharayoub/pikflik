import React from 'react'
import './HomeBottom.css'
import '@material-ui/icons'
import { PlayArrowRounded, Star, Stars } from '@material-ui/icons'
import LastCards from './Cards/LastCards'

function HomeBottom() {
    return (
        <div className='home-bottom'>
            <div className='video-cont'>
                <div className='our-text'>Our Magical Acrylics can also be<br></br> used for Corporate orders!</div>
                <button className='video-btn'> <PlayArrowRounded></PlayArrowRounded> Watch the Video</button>
            </div>
            <div className='rating-cont'>
                <div className='bulk-rating-cont'>
                    <div>
                        <Star style={{ color: 'yellow' }}></Star>
                        <Star style={{ color: 'yellow' }}></Star>
                        <Star style={{ color: 'yellow' }}></Star>
                        <Star style={{ color: 'yellow' }}></Star>
                        <Star style={{ color: 'yellow' }}></Star>
                    </div>
                    <div className='bulk-text'>Bulk Orders Available</div>
                    <div className="bulk-includes">Includes Custom Graving</div>
                </div>
                <div className='three-image-cont'>
                    <div className='left-img'><img className="left-photo" src="/chicos logo (1).png" alt="popop"></img></div>
                    <div className='middle-img'><img className="middle-photo" src="/ellen logo.jpg" alt="popop"></img></div>
                    <div className='right-img' ><img className="right-photo" src="/live nation logo.jpg" alt="popop"></img></div>
                </div>
                <div className='white-label-cont'>
                    <div>
                        <Stars style={{color: 'green'}} ></Stars>
                        <Stars style={{color: 'green'}} ></Stars>
                        <Stars style={{color: 'green'}} ></Stars>
                        <Stars style={{color: 'green'}} ></Stars>
                        <Stars style={{color: 'green'}} ></Stars>
                    </div>
                    <div className='white-text'>White Label Options Available</div>
                    <div className='includes-text' >Includes Personalized Packaging</div>
                </div>
            </div>
            <div className='last-cards-cont'>
                <LastCards title='Interactive Tabletop Menus' disc='An ultra-modern Augmented Reality enhanced toucless experience' ></LastCards>
                <LastCards title='Interactive Corporate Gifts' disc='A unique way to show appreciation for clients or employees'></LastCards>
            </div>
        </div>
    )
}

export default HomeBottom
