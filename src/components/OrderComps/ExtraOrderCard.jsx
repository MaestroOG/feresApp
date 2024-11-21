import React from 'react'
import { assets } from '../../assets/assets'

const ExtraOrderCard = ({ img, name, price, details }) => {
    return (
        <div className='flex-none max-w-[300px] pb-4'>
            <div className='relative'>
                <img src={img} alt="" className='w-[157px] h-[149px] object-cover rounded-[13px]' />
                <img src={assets.plus_green} alt="" className='absolute top-3 right-3' />
            </div>
            <div className='flex flex-col gap-[2px]'>
                <h4 className='text-[#2F2F3F] font-medium text-sm mt-2'>{name}</h4>
                <p className='text-[#2F2F3F66] text-xs'>{details?.split(' ').slice(0, 4).join(' ')}</p>
                <p className='text-[#0AB247] font-bold text-sm'>{`EBT ${price}`}</p>
            </div>
        </div>
    )
}

export default ExtraOrderCard