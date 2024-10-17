import React from 'react'
import { assets } from '../../assets/assets'

const EmptyCartWarn = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[0.6rem] h-[70vh]'>
            <img src={assets.shopping_basket_lg} alt="" />
            <h2 className='text-xl text-[#2F2F3F] font-medium'>Cart empty</h2>
            <p className='text-[#B3B3B3] text-base'>You don’t have any item in cart at this time</p>
            <button className='bg-[#0AB247] rounded-[13px] p-[10px] text-white text-base font-medium'>Start shopping now</button>
        </div>
    )
}

export default EmptyCartWarn