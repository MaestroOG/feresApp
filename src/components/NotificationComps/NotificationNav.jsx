import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const NotificationNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-[29vw] px-4 py-5'>
            <img src={assets.arrow_left} alt="" onClick={() => navigate(-1)} className='invert' />
            <h3 className='text-[#2F2F3F] text-xl font-bold'>Notifications</h3>
        </div>
    )
}

export default NotificationNav