import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const FoodOrderNav = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4 py-5 flex items-center gap-[23vw] bg-white sticky top-0 left-0 w-full z-50'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[#2F2F3F] text-xl font-bold'>Food order details</h1>
        </div>
    )
}

export default FoodOrderNav