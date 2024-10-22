import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SupportMessageNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-[29vw] px-4 py-5'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[#2F2F3F] text-2xl font-bold'>Messages</h1>
        </div>
    )
}

export default SupportMessageNav