import React from 'react'
import { assets } from '../../assets/assets'

const RecentSearch = () => {
    return (
        <div>
            <h2 className='text-base text-[#2F2F3F] font-medium'>Recent Search</h2>

            <div className='border border-[#EEEEEE] p-3 rounded-3xl flex items-center gap-2 text-[#A3A3A3] w-max mt-3'>
                <img src={assets.clock_img} alt="" />
                <p>Burgers</p>
            </div>
        </div>
    )
}

export default RecentSearch