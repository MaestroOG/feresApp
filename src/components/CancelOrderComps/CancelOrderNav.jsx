import React from 'react'
import { assets } from '../../assets/assets'

const CancelOrderNav = () => {
    return (
        <div className='px-4 py-6 flex items-center gap-28'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Cancel order</h1>
        </div>
    )
}

export default CancelOrderNav