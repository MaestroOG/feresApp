import React from 'react'
import { assets } from '../../assets/assets'

const RateRiderNav = () => {
    return (
        <div className='py-6 flex items-center gap-6'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <img src={assets.rateRiderBar} alt="" />
        </div>
    )
}

export default RateRiderNav