import React from 'react'
import { assets } from '../../assets/assets'

const RecentSearch = ({ text }) => {
    return (
        <div>

            <div className='border border-[#EEEEEE] p-3 rounded-3xl flex items-center gap-2 text-[#A3A3A3] w-max mt-3'>
                <img src={assets.clock_img} alt="" />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default RecentSearch