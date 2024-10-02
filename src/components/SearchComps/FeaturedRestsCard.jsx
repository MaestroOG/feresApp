import React from 'react'
import { assets } from '../../assets/assets'

const FeaturedRestsCard = ({ onClick }) => {
    return (
        <div className='border border-[#F4F4F4] py-3 mt-5 flex rounded-xl' onClick={onClick}>
            {/* Card Left */}
            <div className='px-2'>
                <img src={assets.featured_rest_img} alt="" />
            </div>
            {/* Card Right */}
            <div>
                <h3 className='text-[14px] font-medium'>KFC Eastlight</h3>
                <p className='text-[10px] text-[#979797]'>Burger, Fast Food, American...</p>
                <div className='flex items-center gap-1 mt-1'>
                    <img src={assets.star} alt="" />
                    <div>
                        <p className='text-[10px]'>4.50 <span className='text-[#979797]'>(50+)</span></p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center mt-[6px] gap-1 text-[#2F2F3FCC]'>
                        <img src={assets.clock_img} alt="" />
                        <p className='text-[11px]'>Within 40 mins</p>
                    </div>
                    <div className='flex items-center mt-[6px] gap-1 text-[#2F2F3FCC]'>
                        <img src={assets.scooter_img} alt="" />
                        <p className='text-[11px]'>EBT 150.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedRestsCard