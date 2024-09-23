import React from 'react'
import FeaturedRestsCard from './FeaturedRestsCard'

const FeaturedRests = () => {
    return (
        <div className='mt-12 px-4'>
            <h2 className='text-base text-[#2F2F3F] font-medium'>Featured restaurants</h2>

            <FeaturedRestsCard />
            <FeaturedRestsCard />

        </div>
    )
}

export default FeaturedRests