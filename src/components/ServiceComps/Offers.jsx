import React from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const Offers = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full pt-6 px-4 mt-2 mb-20'>

            <div className='w-full flex items-center justify-between'>
                <h3 className='text-[18px] font-medium'>Special offers</h3>
                <h4 onClick={() => navigate('/allrestaurants')} className='text-base text-[#979797]'>See all</h4>
            </div>

            <div className='w-full mt-8 mb-5 relative'>
                <img src={assets.offer_bg} alt="" className='mx-auto' />
                {/* Top left */}
                <div className='absolute top-3 left-6 bg-[#F2FDF8] rounded-3xl'>
                    <p className='text-sm font-medium text-[#0AB247] p-3'>30% off selected items</p>
                </div>

                {/* Bottom Right */}
                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute right-32 bottom-2'>
                    <img src={assets.clock_img} alt="" />
                    <p className='text-sm'>31 mins</p>
                </div>
                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute right-6 bottom-2'>
                    <img src={assets.scooter_img} alt="" />
                    <p className='text-sm'>EBT 150</p>
                </div>
            </div>
        </div>
    )
}

export default Offers