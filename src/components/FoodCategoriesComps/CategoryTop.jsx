import React from 'react'
import { assets } from '../../assets/assets'

const CategoryTop = () => {
    return (
        <div className='flex items-center gap-28 px-4 py-5'>
            {/* Top Bar */}
            <button className='p-[10px] border border-[#EEEEEE] rounded-[10px]'>
                <img src={assets.arrow_left} alt="" className='invert' />
            </button>

            <h2 className='text-[#2F2F3F] text-[23px] font-bold text-center'>Categories</h2>
        </div>
    )
}

export default CategoryTop