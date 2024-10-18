import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PromotionCard = () => {
    return (
        <Link to={'/profile/promotions/promoform'} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img src={assets.promotion_img} alt="" />
                <div>
                    <h3 className='text-[#0AB247] font-medium text-sm'>Feres</h3>
                    <p className='text-[#767578] text-xs w-[75%]'>Earn up to 10% cash back on every ride with Feres</p>
                </div>
            </div>
            <img src={assets.arrow_right} alt="" />
        </Link>
    )
}

export default PromotionCard