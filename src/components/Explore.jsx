import React from 'react'
import { assets } from '../assets/assets'
import ExploreCard from './ExploreCard'

const Explore = () => {
    return (
        <div className='mt-9 px-4 w-full'>
            <h3 className='text-[18px] font-medium'>Explore Feres</h3>

            <div className='grid grid-cols-3'>
                {/* Card */}
                <ExploreCard name={"Ride"} img={assets.car} />
                <ExploreCard name={"Food"} img={assets.food_img} />
                <ExploreCard name={"Mart"} img={assets.mart_bucket} />
            </div>
        </div>
    )
}

export default Explore