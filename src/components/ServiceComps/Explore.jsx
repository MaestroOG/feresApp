import React from 'react'
import { assets } from '../../assets/assets'
import ExploreCard from './ExploreCard'

const Explore = () => {
    return (
        <div className='mt-12 w-full'>
            <h3 className='text-[18px] font-medium px-4'>Explore Feres</h3>

            <div className='flex flex-row gap-5 overflow-y-scroll explore-card'>
                {/* Card */}
                <ExploreCard name={"Ride"} img={assets.car} />
                <ExploreCard name={"Food"} img={assets.food_img} />
                <ExploreCard name={"Mart"} img={assets.mart_bucket} />
                <ExploreCard name={"Car"} img={assets.car} />
                <ExploreCard name={"Food"} img={assets.food_img} />
            </div>
        </div>
    )
}

export default Explore