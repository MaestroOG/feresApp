import React from 'react'
import { assets } from '../../assets/assets'

const BecomeRiderCard = () => {
    return (
        <div className='bg-[#0AB2470D] w-[92%] mx-auto rounded-[13px] flex items-center justify-between px-4 py-3'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-base text-[#2F2F3F] font-bold'>Become a rider</h3>
                <p className='text-[#2F2F3F] text-sm'>Earn money on your schedule</p>
            </div>
            <img src={assets.rider_character} alt="" />
        </div>
    )
}

export default BecomeRiderCard