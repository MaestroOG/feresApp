import React from 'react'
import { assets } from '../../assets/assets'

const FoodTopBar = () => {
    return (
        <div className='relative'>
            <img src={assets.burger_featured} alt="" className='w-screen' />
            <button className='absolute top-[10%] left-[4%] bg-[#FFFFFF33] p-3 rounded-xl'>
                <img onClick={() => navigate(-1)} src={assets.arrow_left_02} alt="" className='invert' />
            </button>
            <div className='absolute top-[10%] right-[4%]'>
                <button className='bg-[#FFFFFF33] p-3 rounded-xl ml-4'>
                    <img src={assets.share} alt="" />
                </button>
                <button className='bg-[#FFFFFF33] p-3 rounded-xl ml-4'>
                    <img src={assets.heart_icon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default FoodTopBar