import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import PhotoCard from './Cards/PhotoCard'
import './HomeMiddle.css'
function HomeMiddle({width}) {
    const [items, setitems] = useState(0)

    useEffect(() => {
        width >= '500' ? setitems(4): setitems(2)
    }, [width])
    
    const options = {
        // autoWidth:true,
        autoheight: true,
        items: items,
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
                <div className='love-text'>We love seeing the smiles on our customers faces!</div>
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
