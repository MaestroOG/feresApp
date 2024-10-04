import React from 'react'
import { assets } from '../../assets/assets'

const OrderSchedule = () => {
    return (
        <div className='px-4 mt-5 bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.calendar_03} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Schedule order</p>
                    <input type="date" name="" id="" />
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.clock_light_green} alt="" />
                    <p className='text-base text-[#2F2F3F]'>30 min</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.location_light_green} alt="" />
                    <p className='text-base text-[#2F2F3F]'>Elgin St. Celina, Delaware 10299</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr />
        </div>
    )
}

export default OrderSchedule