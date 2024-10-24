import React from 'react'
import { assets } from '../../../assets/assets'

const PopularStoreCard = () => {
    return (
        <div className='my-4 flex items-center gap-5'>
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
            </div>
        </div>
    )
}

export default PopularStoreCard