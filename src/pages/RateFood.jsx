import React, { useState } from 'react'
import RateFoodNav from '../components/RateFoodComps/RateFoodNav'
import RateFoodCard from '../components/RateFoodComps/RateFoodCard'
import RateFoodFb from '../components/RateFoodComps/RateFoodFb'
import RateFoodSubmitBtn from '../components/RateFoodComps/RateFoodSubmitBtn'
import SuccessPopup from '../components/SuccessPopup'
import { assets } from '../assets/assets'

const RateFood = () => {
    const [successPop, setSuccessPop] = useState(false)
    return (
        <div className='px-4'>
            <RateFoodNav />
            <h2 className='text-[#2F2F3F] text-2xl font-bold text-center mt-8'>Rate your order</h2>
            <RateFoodCard />
            <RateFoodFb />
            <RateFoodSubmitBtn onClick={() => setSuccessPop(true)} />
            {successPop ? <SuccessPopup image={assets.success_img} title={"Thanks for your review"} desc={"Your review has been submitted. We’ll check your review and email you with a status update."} /> : null}
        </div>
    )
}

export default RateFood