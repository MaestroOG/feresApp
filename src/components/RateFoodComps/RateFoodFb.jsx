import React from 'react'
import RateFoodEmo from './RateFoodEmo'

const RateFoodFb = ({ ratingText, setRatingText }) => {
    return (
        <div className='mt-5'>
            <h1 className='text-[#2F2F3F] font-medium text-[32px] text-center'>How was the food?</h1>
            <p className='text-[#767578] text-center text-base font-normal mt-3 w-[70%] mx-auto'>Please rate the restaurant</p>
            <RateFoodEmo />
            <div className='h-[135px] bg-[#F8F8F8] rounded-[13px] mt-4 focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all ease-linear'>
                <input type="text" placeholder='Write your feedback here' className='placeholder:text-[#767578] bg-transparent w-full rounded-[13px] py-[14px] px-4 border-none outline-none' value={ratingText} onChange={(e) => { setRatingText(e.target.value) }} />
            </div>
            <div className='flex items-center justify-center gap-5 mt-6'>

            </div>
        </div>
    )
}

export default RateFoodFb