import React from 'react'
import { assets } from '../../assets/assets'
import { supportBtns } from './supportBtns'

const HelpSupportMain = () => {
    return (
        <div className='px-4 mt-6'>
            <h3 className='text-[#2F2F3F] text-base font-medium'>Support cases</h3>
            {/* Upper Buttons */}
            <div className='flex items-center justify-between my-5'>
                <div className='flex items-center gap-2'>
                    <img src={assets.bubble_chat} alt="" className='bg-[#F8F8F8] p-3 rounded-full' />
                    <div>
                        <h3 className='text-[#2F2F3F]'>Live chat</h3>
                        <p className='text-[#ACACAC]'>Chat with us</p>
                    </div>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>

            {/* Get help with the last order */}
            <div>
                <h3 className='text-[#2F2F3F] font-medium'>Get help with the last order</h3>
                <button className='text-[#2F2F3F] text-lg font-medium bg-[#F8F8F8] p-4 w-full rounded-full my-4'>Select your order</button>
            </div>

            {/* How can we help you? */}
            <div>
                <h3 className='text-[#2F2F3F] font-medium mb-6'>How can we help you?</h3>
                {supportBtns.map(btn => (
                    <div className='flex items-center justify-between my-8'>
                        <p className='text-[#2F2F3F] text-base'>{btn.text}</p>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HelpSupportMain