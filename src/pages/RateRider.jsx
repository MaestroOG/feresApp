import React from 'react'
import RateRiderNav from '../components/RateRiderComps/RateRiderNav'
import RiderCard from '../components/RateRiderComps/RiderCard'
import RateRiderFb from '../components/RateRiderComps/RateRiderFb'
import { ContinueBlockBtn } from '../components/RateRiderComps/ContinueBlockBtn'

const RateRider = ({ to }) => {
    return (
        <div className='px-4'>
            <RateRiderNav />
            <h2 className='text-[#2F2F3F] text-2xl font-bold text-center mt-8'>Rate your rider</h2>
            <RiderCard />
            <RateRiderFb />
            <ContinueBlockBtn to={'/ratefood'} />
        </div>
    )
}

export default RateRider