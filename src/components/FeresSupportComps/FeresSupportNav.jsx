import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const FeresSupportNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex gap-24 items-center px-4 py-5 bg-white'>
            <img src={assets.arrow_left} alt="" className='invert mt-[5px]' onClick={() => navigate(-1)} />
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>Feres Support</h2>
        </div>
    )
}

export default FeresSupportNav