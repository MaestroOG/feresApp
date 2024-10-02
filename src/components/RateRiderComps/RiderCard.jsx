import React from 'react'
import { assets } from '../../assets/assets'

const RiderCard = () => {
    return (
        <div className='border border-[#EEEEEE] rounded-[16px] flex items-center justify-between p-5 mt-5'>
            <div className='flex items-center gap-2'>
                <img src={assets.rider_img} alt="" />
                <div>
                    <h4 className='text-[#2F2F3F] font-medium text-base mb-1'>Jacob Jones</h4>
                    <p className='text-[#767578] text-sm'>Yamaha MX King</p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 justify-end mb-1'>
                    <img src={assets.star} alt="" />
                    <p>4.5</p>
                </div>
                <p className='text-[#2F2F3F] text-sm font-medium'>HSW 4736 XK</p>
            </div>
        </div>
    )
}

export default RiderCard