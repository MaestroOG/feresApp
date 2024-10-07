import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const OtherReasonPop = () => {
    const { cancelReason, setCancelReason } = useContext(FeresContext)
    return (
        <div className={`${cancelReason ? 'fixed' : 'hidden'} bottom-0 left-0 h-[95vh] rounded-tr-[13px] rounded-tl-[13px] bg-white w-full z-30 px-3 py-6`}>
            <div className='flex items-center gap-24'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => setCancelReason(false)} />
                <h1 className='text-[#1E1E1E] text-lg font-bold'>Cancellation reason</h1>
            </div>
            <hr className='my-8' />
            <textarea name="" id="" className='w-full placeholder:text-[#767578] placeholder:text-lg outline-none border-none h-full' placeholder='Please describe the reason'></textarea>
        </div>
    )
}

export default OtherReasonPop