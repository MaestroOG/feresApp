import React from 'react'
import { assets } from '../../assets/assets'

const PaymentMethods = ({ img, text }) => {
    return (
        <>
            <div className='px-3 mt-7 flex items-center justify-between pb-5'>
                <div className='flex items-center gap-2'>
                    <img src={img} alt="" />
                    <p className='font-medium text-[#2F2F3F#2F2F3F]'>{text}</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr className='mt-1' />
        </>
    )
}

export default PaymentMethods