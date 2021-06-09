import React from 'react'
import HomeBottom from '../Components/Home-Comp/HomeBottom'
import HomeMiddle from '../Components/Home-Comp/HomeMiddle'
import HomeUpper from '../Components/Home-Comp/HomeUpper'
import HomeMain from '../Components/Home-Comp/HomeMain'
import './HomePage.css'

function HomePage({width}) {
    return (
        <div className='home-cont'>
            <div className='main'>
                <HomeMain></HomeMain>
            </div>
            <div className='upper'>
                <HomeUpper></HomeUpper>
            </div>
            <div className='middle'>
                <HomeMiddle width={width}></HomeMiddle>
            </div>
            <div className='lower'>
                <HomeBottom></HomeBottom>
            </div>
        </div>
    )
}

export default HomePage
