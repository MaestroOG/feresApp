import React from 'react'
import { assets } from '../../assets/assets'

const PaymentCards = () => {
    return (
        <div className='mt-12'>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={assets.mastercard} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentCards