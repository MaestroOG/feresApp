import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PromotionCard = ({ promo }) => {
    return (
        <Link to={'/profile/promotions/promoform'} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                {promo?.store_info?.map(info => (
                    <img src={info?.image_url} alt="" className='object-cover rounded-xl' width={"87px"} height={"57px"} />
                ))}
                <div>
                    {promo?.store_info?.map(info => (
                        <h3 className='text-[#0AB247] font-medium text-sm'>{info?.name}</h3>
                    ))}
                    <p className='text-[#767578] text-xs w-[75%]'>Earn up to 10% discount on every {promo?.store_type} order with {promo?.store_info?.map(info => (
                        info?.name
                    ))}</p>
                </div>
            </div>
            <img src={assets.arrow_right} alt="" />
        </Link>
    )
}

export default PromotionCard