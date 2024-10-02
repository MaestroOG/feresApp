import React from 'react'
import { assets } from '../../assets/assets'

const BookRideNav = () => {
    return (
        <div className='px-4 py-5 flex items-center gap-28 bg-white z-30'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h2 className='text-[#2F2F3F] font-bold text-xl'>KFC Eastlight</h2>
        </div>
    )
}

export default BookRideNav