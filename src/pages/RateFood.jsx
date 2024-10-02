import React from 'react'
import RateFoodNav from '../components/RateFoodComps/RateFoodNav'
import RateFoodCard from '../components/RateFoodComps/RateFoodCard'
import RateFoodFb from '../components/RateFoodComps/RateFoodFb'
import RateFoodSubmitBtn from '../components/RateFoodComps/RateFoodSubmitBtn'

const RateFood = () => {
    return (
        <div className='px-4'>
            <RateFoodNav />
            <h2 className='text-[#2F2F3F] text-2xl font-bold text-center mt-8'>Rate your order</h2>
            <RateFoodCard />
            <RateFoodFb />
            <RateFoodSubmitBtn />
        </div>
    )
}

export default RateFood