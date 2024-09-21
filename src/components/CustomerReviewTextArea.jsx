import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { FeresContext } from '../context/FeresContext'

const CustomerReviewTextArea = () => {

    const { customerReview, setCustomerReview } = useContext(FeresContext);

    return (
        <div className='mt-10'>
            <h2 className='text-[#2F2F3F] text-xl font-bold'>Write review</h2>

            <div onClick={() => setCustomerReview(true)} className='mt-4 flex flex-col items-center justify-center bg-[#F8F8F8] py-6 rounded-lg my-24'>
                <div className='flex items-center gap-2'>
                    <img src={assets.star_hollow} alt="" />
                    <img src={assets.star_hollow} alt="" />
                    <img src={assets.star_hollow} alt="" />
                    <img src={assets.star_hollow} alt="" />
                    <img src={assets.star_hollow} alt="" />
                </div>
                <textarea name="" id="" placeholder='Write your review here' className='placeholder:text-[#C4C4C4] placeholder:text-base mt-5 w-full px-6 min-h-32 bg-[#F8F8F8]'></textarea>
            </div>
        </div>
    )
}

export default CustomerReviewTextArea