import React from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'
import SpecOfferCard from './SpecOfferCard';

const Offers = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full pt-6 px-4 mt-2 mb-10'>

            <div className='w-full flex items-center justify-between'>
                <h3 className='text-[18px] font-medium'>Special offers</h3>
                <h4 onClick={() => navigate('/allrestaurants')} className='text-base text-[#979797]'>See all</h4>
            </div>
            <div className='grid'>
                <SpecOfferCard />
                <SpecOfferCard />
            </div>
        </div>
    )
}

export default Offers