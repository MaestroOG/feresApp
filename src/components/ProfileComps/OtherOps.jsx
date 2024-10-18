import React from 'react'
import { assets } from '../../assets/assets'
import BecomeRiderCard from './BecomeRiderCard'
import { Link } from 'react-router-dom'

const OtherOps = () => {
    return (
        <div className='mt-4 bg-white w-full rounded-tr-2xl rounded-tl-2xl pt-6 pb-3'>
            <Link to={'/profile/favorite'} className='flex items-center justify-between px-4 mb-10'>
                <div className='flex items-center gap-3'>
                    <img src={assets.favourite} alt="" />
                    <p className='text-lg text-[#2F2F3F]'>Favorite</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </Link>
            <Link to={'/profile/paymentmethods'} className='flex items-center justify-between px-4 mb-10'>
                <div className='flex items-center gap-3'>
                    <img src={assets.money_04} alt="" />
                    <p className='text-lg text-[#2F2F3F]'>Payment method</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </Link>
            <Link to={'/profile/promotions'} className='flex items-center justify-between px-4 mb-10'>
                <div className='flex items-center gap-3'>
                    <img src={assets.discount_02} alt="" />
                    <p className='text-lg text-[#2F2F3F]'>Promo codes</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </Link>
            <Link className='flex items-center justify-between px-4 mb-10'>
                <div className='flex items-center gap-3'>
                    <img src={assets.notification_03} alt="" />
                    <p className='text-lg text-[#2F2F3F]'>Notifications</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </Link>
            <Link className='flex items-center justify-between px-4 mb-10'>
                <div className='flex items-center gap-3'>
                    <img src={assets.alert_circle} alt="" />
                    <p className='text-lg text-[#2F2F3F]'>Support</p>
                </div>
                <img src={assets.arrow_right} alt="" />
            </Link>
            <BecomeRiderCard />
        </div>
    )
}

export default OtherOps