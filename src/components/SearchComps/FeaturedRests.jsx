import React from 'react'
import FeaturedRestsCard from './FeaturedRestsCard'
import { useNavigate } from 'react-router-dom'

const FeaturedRests = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-12 px-4'>
            <h2 className='text-base text-[#2F2F3F] font-medium'>Featured restaurants</h2>

            <FeaturedRestsCard onClick={() => navigate('/restaurant')} />
            <FeaturedRestsCard onClick={() => navigate('/restaurant')} />

        </div>
    )
}

export default FeaturedRests