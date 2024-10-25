import React from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const PopularStoreCard = ({ isDiscount = false }) => {
    return (
        <>
            <Link to={'/ecommerce/mart'} className='my-4 flex items-center gap-5'>
                <img src={assets.apple_store} alt="" />
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-4'>
                        <h3 className='text-[#2F2F3F] font-medium'>Apple store</h3>
                        <div className='flex items-center gap-1'>
                            <img src={assets.star} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>4.5</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm text-[#979797]'>Convenience store, supermarket</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <img src={assets.clock_01} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>20 mins</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={assets.scooter_02} alt="" />
                            <p className='text-[#2F2F3F] text-sm'>ETB 120</p>
                        </div>
                    </div>
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