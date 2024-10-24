import React from 'react'
import { assets } from '../../assets/assets'

const FavoriteCard = ({ img, name, food, price }) => {
    return (
        <div className='w-[398px] shadow rounded-2xl mx-auto mt-8 px-2 py-4 flex items-center gap-3'>
            <img src={img} alt="" />
            <div className='w-full'>
                <div className='flex items-center justify-between pr-2'>
                    <h1 className='text-[#2F2F3F] text-lg font-bold'>{name}</h1>
                    <button className='border border-[#EEEEEE] p-[10px] rounded-[13px]'>
                        <img src={assets.favourite_active} alt="" />
                    </button>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#979797] text-base'>{food}</p>
                    <p className='text-[#0AB247] font-medium text-base'>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard