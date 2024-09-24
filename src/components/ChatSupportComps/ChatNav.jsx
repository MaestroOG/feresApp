import React from 'react'
import { assets } from '../../assets/assets'

const ChatNav = () => {
    return (
        <div className='flex items-center justify-between px-4 py-6'>
            <img src={assets.arrow_left} alt="" className='invert mt-[5px]' />
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>Restaurant support</h2>
            <a href="tel:1234567890"><img src={assets.telephone} alt="" /></a>
        </div>
    )
}

export default ChatNav