import React from 'react'
import '@material-ui/core'
import { Button } from '@material-ui/core'
import './StickyButton.css'

function StickyButton({width}) {
    return (
        <div style={ width<= '426' ? {display:'flex'}: {display:'none'}} className='sticky-btn'>
            <Button style={{width:'95%'}} variant="contained" color="secondary" className="stky-btn" >Get Started</Button>
        </div>
    )
}

export default StickyButton
