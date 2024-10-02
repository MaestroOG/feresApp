import React from 'react'
import { assets } from '../../assets/assets'

const RateFoodCard = () => {
    return (
        <div className='border border-[#EEEEEE] rounded-[16px] flex items-center justify-between p-5 mt-5'>
            <div className='flex items-center gap-2'>
                <img src={assets.rateFood_rest} alt="" />
                <div>
                    <p className='text-[#767578] text-sm mb-1'>22 Feb, 2024 15:50 PM</p>
                    <h4 className='text-[#2F2F3F] font-medium text-base'>KFC Eastlight</h4>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 justify-end mb-1'>
                    <p className='text-[#767578] text-sm font-medium'>Delivered</p>
                </div>
                <p>ETB 1,600</p>
            </div>
        </div>
    )
}

export default RateFoodCard