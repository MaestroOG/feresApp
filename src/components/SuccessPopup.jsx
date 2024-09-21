import React from 'react'
import { assets } from '../assets/assets'

const SuccessPopup = () => {
    return (
        <div className='h-screen w-full bg-[#0606064D] fixed top-0 left-0 z-30 flex items-center justify-center'>

            <div className='bg-white rounded-3xl flex items-center justify-center flex-col w-4/5 py-6 px-4'>
                <img src={assets.success_img} alt="" />
                <h3 className='font-bold text-xl text-center text-[#0AB247] mt-5'>Thanks for your review</h3>
                <p className='text-sm text-[#2F2F3F] text-center mt-2'>Your review has been submitted. We’ll check your review and email you with a status update.</p>
                <button className='bg-[#0AB247] px-8 py-4 text-white rounded-full w-3/4 mt-4 font-medium text-xl'>Got it</button>
            </div>

        </div>
    )
}

export default SuccessPopup