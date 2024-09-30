import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SupportNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-20'>
            <img src={assets.arrow_left} alt="" className='invert mt-[5px]' onClick={() => navigate(-1)} />
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>Restaurant support</h2>
        </div>
    )
}

export default SupportNav