import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const CategoryTop = ({ name = "Categories" }) => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center gap-[24vw] px-4 py-5'>
            {/* Top Bar */}
            <button className='p-[10px] border border-[#EEEEEE] rounded-[10px]'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            </button>

            <h2 className='text-[#2F2F3F] text-[23px] font-bold text-center'>{name}</h2>
        </div>
    )
}

export default CategoryTop