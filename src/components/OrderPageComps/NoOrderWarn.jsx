import React from 'react'
import { assets } from '../../assets/assets'

const NoOrderWarn = ({ orderCat }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-1 h-[60vh]'>
            <img src={assets.invoice_lg} alt="" />
            <h2 className='text-[#2F2F3FCC] font-medium text-xl'>{orderCat} order empty</h2>
            <p className='text-[#2F2F3FCC] text-base'>You don’t have an {orderCat && orderCat.toLowerCase()} order at this time</p>
        </div>
    )
}

export default NoOrderWarn