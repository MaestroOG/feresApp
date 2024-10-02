import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const DiscountNav = () => {
    const navigate = useNavigate(-1)
    return (
        <div className='flex gap-24 items-center py-5'>
            <img src={assets.arrow_left} alt="" className='invert mt-[5px]' onClick={() => navigate(-1)} />
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>Get Discounts</h2>
        </div>
    )
}

export default DiscountNav