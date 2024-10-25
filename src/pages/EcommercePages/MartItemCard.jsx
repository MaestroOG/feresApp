import React from 'react'
import { assets } from '../../assets/assets'

const MartItemCard = ({ img, name, price }) => {
    return (
        <div>
            <div className='bg-[#F1F1F1] rounded-2xl w-[135px] h-[149px] relative flex items-center justify-center'>
                <img src={img} alt="" />
                <div className='bg-white p-3 rounded-full w-max absolute bottom-3 right-1'>
                    <img src={assets.add_green} alt="" />
                </div>
            </div>
            <div className='my-2'>
                <p className='text-sm font-medium text-[#2F2F3F] w-[135px]'>{name}</p>
                <p className='text-[#0AB247] font-bold text-sm'>EBT {price}</p>
            </div>
        </div>
    )
}

export default MartItemCard