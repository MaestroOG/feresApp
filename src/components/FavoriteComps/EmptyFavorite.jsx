import React from 'react'
import { assets } from '../../assets/assets'

const EmptyFavorite = () => {
    return (
        <div className='flex flex-col gap-1 items-center justify-center h-[70vh]'>
            <img src={assets.favorite_lg} alt="" className='w-[100px] h-[100px]' />
            <h2 className='text-[#2F2F3F] text-xl font-medium'>Favorite empty</h2>
            <p className='text-[#2F2F3FCC] text-base'>You don’t have any favorite items at this time</p>
        </div>
    )
}

export default EmptyFavorite