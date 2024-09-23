import React from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const AllRestCard = () => {

    const navigate = useNavigate();

    return (
        <div className='px-4 mt-6'>
            <h2 className='text-[#2F2F3F] text-lg font-medium'>All restaurants</h2>

            <div className='w-full mt-8 mb-5 relative' onClick={() => navigate('/restaurant')}>
                <img src={assets.offer_bg} alt="" />

                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-[4%] right-[37%]'>
                    <img src={assets.clock_img} alt="" />
                    <p className='text-sm'>31 mins</p>
                </div>
                <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-[4%] right-[9%]'>
                    <img src={assets.scooter_img} alt="" />
                    <p className='text-sm'>EBT 150</p>
                </div>
            </div>
            <div className='mb-8'>
                <div className='flex items-center justify-between gap-2'>
                    <h2 className='font-bold text-base'>KFC Eastlight</h2>
                    <div className='flex items-center gap-1 justify-center mr-6'>
                        <img className='mb-1' src={assets.star} alt="" />
                        <h2 className='text-base'>4.5</h2>
                    </div>
                </div>
                <p className='text-xs text-[#979797]'>Burger, Fast Food, American...</p>
            </div>
        </div>
    )
}

export default AllRestCard