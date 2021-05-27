import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import PhotoCard from './Cards/PhotoCard'
import './HomeMiddle.css'
function HomeMiddle() {
    const options = {
        // autoWidth:true,
        autoheight: true, 
        items: 4,
        loop:true,
        rewind: true,
        autoplay: true,
        margin: 10,
        center: true,

    };
    return (
        <div className='home-middle'>
            <div className='title-sect'>
                <div className='story-text'>A Story in Every Photo</div>
                <div className='love-text'>We love seeing the smiles on our customer faces!</div>
            </div>
            <div className='cards-sect' >
                <OwlCarousel options={options} >
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                    <div className='item'><PhotoCard></PhotoCard></div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default HomeMiddle
