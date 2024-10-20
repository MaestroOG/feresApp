import React from 'react'
import { assets } from '../../assets/assets'

const FoodOrderPayment = () => {
    return (
        <div className='bg-white px-4 mt-3 py-4'>
            <h3 className='text-[#2F2F3F] text-base font-bold'>Payment method</h3>
            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-center gap-2'>
                    <img src={assets.mastercard} alt="" className='w-7' />
                    <p className='text-[#2F2F3F] text-base'>**** 2389</p>
                </div>
                <p className='text-[#2F2F3F] font-medium'>ETB600</p>
            </div>
        </div>
    )
}

export default FoodOrderPayment