import React from 'react'
import { assets } from '../../assets/assets'

const PaymentNav = () => {
    return (
        <div className='flex items-center pt-5 gap-24'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h2 className='text-[#2F2F3F] font-bold text-xl'>Payment method</h2>
        </div>
    )
}

export default PaymentNav