import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Reviews = () => {

    const navigate = useNavigate();

    return (
        <div className='px-4 pt-6'>
            {/* Top Bar */}
            <div className='flex items-center gap-20'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate('/reviews')} />
                <h2 className='font-bold text-2xl text-center'>Rating & reviews</h2>
            </div>

            {/* Reviews */}
            <div className='px-1 mt-11'>
                <h2 className='text-[#2F2F3F] font-bold text-2xl'>KFC Eastlight</h2>

            </div>
        </div>
    )
}

export default Reviews