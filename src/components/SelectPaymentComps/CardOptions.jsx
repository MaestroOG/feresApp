import React from 'react'
import { assets } from '../../assets/assets'

const CardOptions = () => {
    return (
        <div className='mt-12'>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.mastercard} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                </div>
                <input type="radio" name="card" value={"master"} />
            </div>
            <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.visa} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                </div>
                <input type="radio" name="card" value={"visa"} />
            </div>
        </div>
    )
}

export default CardOptions