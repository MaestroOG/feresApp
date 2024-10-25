import React from 'react'
import { assets } from '../../assets/assets'

const MartTrendingCard = ({ img, name, oldPrice, price }) => {
    return (
        <div>
            <div className='relative'>
                <img src={img} alt="" className='w-[135px] h-[149px]' />
                <div className='bg-white p-3 rounded-full w-max absolute bottom-2 right-1'>
                    <img src={assets.add_green} alt="" />
                </div>
            </div>
            <div className='my-2'>
                <p className='text-sm font-medium text-[#2F2F3F] w-[135px]'>{name}</p>
                <div className='flex items-center gap-2'>
                    <p className='text-[#C2C2C2] text-sm line-through'>EBT {oldPrice}</p>
                    <p className='text-[#0AB247] font-bold text-sm'>EBT {price}</p>
                </div>
            </div>
        </div>
    )
}

export default MartTrendingCard