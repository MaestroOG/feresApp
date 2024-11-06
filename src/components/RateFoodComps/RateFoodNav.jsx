import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const RateFoodNav = () => {
    const navigate = useNavigate();
    return (
        <div className='py-6 flex items-center gap-6'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <img src={assets.rateFoodBar} alt="" />
        </div>
    )
}

export default RateFoodNav