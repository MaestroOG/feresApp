import React, { useContext, useEffect, useState } from 'react'
import { FeresContext } from '../../context/FeresContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import DeliveryTimeLabel from '../Labels/deliveryTime'
import FoodDeliveryLabel from '../Labels/foodDeliveryLabel'

const FilterResCard = () => {
    const { restFilter, setRestFilter } = useContext(FeresContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(restFilter);

    }, [restFilter])
    return (
        <div className='px-4 mt-6 relative'>
            <h2 className='text-[#2F2F3F] text-lg font-medium'>Filter Results</h2>
            {restFilter && restFilter?.success === false && <h1>No Such Stores</h1>}
            {restFilter && restFilter?.stores?.map((store) => (
                store?.stores.map((store, index) => (
                    <>
                        <div key={index} className='w-full mt-8 mb-5 relative' onClick={() => navigate(`/restaurant/${store._id}`)}>
                            <img src={store.image_url} alt="" className='rounded-tr-2xl rounded-tl-2xl object-cover h-[154px] w-full' />
                            <FoodDeliveryLabel restaurantCordinates={store?.location} delivery_time={store?.delivery_time + store.kitchen_time} wallet_currency_code={"ETB"} />
                        </div>
                        <div className='mb-8'>
                            <div className='flex items-center justify-between gap-2'>
                                <h2 className='font-bold text-base'>{store.name}</h2>
                                <div className='flex items-center gap-1 justify-center mr-1'>
                                    <img className='mb-1' src={assets.star} alt="" />
                                    <h2 className='text-base'>{store.user_rate}</h2>
                                </div>
                            </div>
                            <p className='text-xs text-[#979797]'>{store.Description}</p>
                        </div>
                    </>
                ))
            ))}
        </div>
    )
}

export default FilterResCard