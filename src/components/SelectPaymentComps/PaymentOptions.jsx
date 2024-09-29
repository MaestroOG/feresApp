import React from 'react'
import { assets } from '../../assets/assets'

const PaymentOptions = () => {
    return (
        <div className='mt-20'>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.mastercard} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                </div>
                <input type="radio" name="payment" />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.visa} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                </div>
                <input type="radio" name="payment" />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.wavy_money_bill} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>Cash</p>
                </div>
                <input type="radio" name="payment" />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.E_birr} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                </div>
                <input type="radio" name="payment" />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.kaafi} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>Kaafi micro finance</p>
                </div>
                <input type="radio" name="payment" />
            </div>
        </div>
    )
}

export default PaymentOptions