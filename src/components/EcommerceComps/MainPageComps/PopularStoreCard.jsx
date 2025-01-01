import React from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import MartDeliveryLabel from '../../Labels/martDeliveryTime'

const PopularStoreCard = ({ isDiscount = false, store, onClick }) => {
    return (
        <>
            <Link to={`/ecommerce/mart/${store?.category_id}`} className='my-4 flex items-center gap-5' onClick={onClick}>
                <img src={store?.image_url} alt="" width={"85px"} height={"85px"} className='rounded-lg' />
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-4'>
                        <h3 className='text-[#2F2F3F] font-medium'>{store?.name}</h3>
                        <div className='flex items-center gap-1'>
                            <img src={assets.star} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>{store?.user_rate}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm text-[#979797]'>{store?.Description}</p>
                    </div>
                    
                    <MartDeliveryLabel  restaurantCordinates={store?.location} delivery_time={store?.delivery_time + store?.kitchen_time} wallet_currency_code={"ETB"}/>
                    {isDiscount && <div className='text-[#0AB247] text-[9px] font-medium bg-[#0AB2471A] p-1 rounded w-[88px]'>
                        Up to ETB 120 OFF
                    </div>}
                </div>
            </Link>
            <hr className='my-5' />
        </>
    )
}

export default PopularStoreCard