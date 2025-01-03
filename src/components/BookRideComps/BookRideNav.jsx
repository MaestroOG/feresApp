import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const BookRideNav = ({ storeName }) => {
    const navigate = useNavigate();
    return (
        <div className='px-4 py-5 flex items-center gap-[30vw] bg-white z-30'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate('/bookride')} />
            <h2 className='text-[#2F2F3F] font-bold text-xl whitespace-nowrap'>{storeName.split(' ').slice(0, 2).join(' ')}</h2>
        </div>
    )
}

export default BookRideNav