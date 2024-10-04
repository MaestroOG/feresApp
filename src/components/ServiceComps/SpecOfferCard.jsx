import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SpecOfferCard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-full mt-8 mb-5 relative flex items-center' onClick={() => navigate('/allrestaurants')}>
                <img src={assets.offer_bg} alt="" className='' />
                {/* Top left */}
                <div className='absolute top-3 left-1 bg-[#F2FDF8] rounded-3xl'>
                    <p className='text-sm font-medium text-[#0AB247] p-3'>30% off selected items</p>
                </div>

                {/* Bottom Right */}
                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute right-[9.5rem] bottom-2'>
                    <img src={assets.clock_img} alt="" />
                    <p className='text-sm'>31 mins</p>
                </div>
                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute right-11 bottom-2'>
                    <img src={assets.scooter_img} alt="" />
                    <p className='text-sm'>EBT 150</p>
                </div>
            </div>
            <div className='mb-8'>
                <div className='flex items-center justify-between gap-2'>
                    <h2 className='font-bold text-base'>KFC Eastlight</h2>
                    <div className='flex items-center gap-1 justify-center mr-9'>
                        <img className='mb-1' src={assets.star} alt="" />
                        <h2 className='text-base'>4.5</h2>
                    </div>
                </div>
                <p className='text-xs text-[#979797]'>Burger, Fast Food, American...</p>
            </div>
        </>
    )
}

export default SpecOfferCard