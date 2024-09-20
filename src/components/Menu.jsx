import React from 'react'
import { assets } from '../assets/assets'

const Menu = () => {
    return (
        <div className='w-full fixed bottom-0 flex items-center justify-between px-4 py-2 bg-white'>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.home_icon} alt="" />
                <p className='text-sm text-[#0AB247] mt-1'>Home</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.invoice_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Orders</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.message_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Messages</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.user_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Profile</p>
            </div>
        </div>
    )
}

export default Menu