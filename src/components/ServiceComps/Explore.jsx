import React from 'react'
import { assets } from '../../assets/assets'
import ExploreCard from './ExploreCard'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-8 w-full'>
            <h3 className='text-[18px] font-medium px-4'>Explore Feres</h3>

            <div className='flex flex-row gap-5 overflow-y-scroll explore-card'>
                {/* Card */}
                <ExploreCard name={"Delivery"} img={assets.car} onClick={() => navigate('/deliveryservice')} />
                <ExploreCard name={"Food"} img={assets.food_img} onClick={() => navigate('/allrestaurants')} />
                <ExploreCard name={"Mart"} img={assets.mart_bucket} onClick={() => navigate('/ecommerce')} />
            </div>
        </div>
    )
}

export default Explore