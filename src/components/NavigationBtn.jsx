import React from 'react'
import { assets } from '../assets/assets'

const NavigationBtn = () => {
    return (
        <div className='flex items-center justify-between'>
            <img src={assets.arrow_left} className="cursor-pointer" />
            <img src={assets.volume_icon} className="cursor-pointer" />
        </div>
    )
}

export default NavigationBtn