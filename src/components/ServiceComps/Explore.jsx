import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import ExploreCard from './ExploreCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setBaseData } from '../../redux/slices/basePriceSlice'
import { useDispatch } from 'react-redux'

const Explore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handlePrice =async () => {
      const response = await axios.post('https://suuq.feres.co/service_details')
      dispatch(setBaseData(response.data))
    }

    useEffect(()=>{
        handlePrice()
    },[])

    return (
        <div className='mt-8 w-full'>
            <h3 className='text-[18px] font-medium px-4'>Explore Feres</h3>

            <div className='flex flex-row gap-3 overflow-y-scroll explore-card'>
                {/* Card */}
                <ExploreCard name={"Delivery"} img={assets.car} onClick={() => navigate('/deliveryservice')} />
                <ExploreCard name={"Food"} img={assets.food_img} onClick={() => navigate('/allrestaurants')} />
                <ExploreCard name={"Mart"} img={assets.mart_bucket} onClick={() => navigate('/ecommerce')} />
            </div>
        </div>
    )
}

export default Explore