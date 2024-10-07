import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets';

const Offers = () => {

    const navigate = useNavigate();

    return (
        <div className='px-4 mt-10'>
            {/* Top line */}

            <div className='flex items-center justify-between mb-6'>
                <h3 className='text-[#2F2F3F] text-lg font-medium'>Special offers</h3>
                <p className='text-base font-medium text-[#979797]'>See all</p>
            </div>
            <div className='flex items-center gap-2 overflow-x-auto offers mb-8 w-screen'>
                {/* Card */}
                {/* Card Top */}
                <div className='relative flex-shrink-0'>
                    <img src={assets.offer_bg} alt="" />
                    {/* Card Top Stickers */}
                    <div className='bg-[#F2FDF8] w-[154px] h-[34px] rounded-[30px] p-[10px] text-[#0AB247] font-medium text-xs text-center absolute top-2 left-2'>30% off selected items</div>
                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-28'>
                        <img src={assets.clock_01} alt="" className='w-5' />
                        <p className='text-xs font-medium text-[#1E1E1E]'>31 mins</p>
                    </div>
                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-4'>
                        <img src={assets.scooter_02} alt="" className='w-5' />
                        <p className='text-xs font-medium text-[#1E1E1E]'>EBT 150</p>
                    </div>
                    {/* Card Info */}
                    <div className='px-2'>
                        <div className='flex items-center justify-between mt-2'>
                            <h2 className='text-base font-bold text-[#2F2F3F]'>KFC Eastlight</h2>
                            <div className='flex items-center gap-2'>
                                <img src={assets.star} alt="" className='w-[18px]' />
                                <p className='text-[#1E1E1E] text-sm'>4.5</p>
                            </div>
                        </div>
                        <p className='text-xs text-[#979797] mt-1'>Burger, Fast Food, American...</p>
                    </div>
                </div>

                <div className='relative flex-shrink-0'>
                    <img src={assets.offer_bg} alt="" />
                    {/* Card Top Stickers */}
                    <div className='bg-[#F2FDF8] w-[154px] h-[34px] rounded-[30px] p-[10px] text-[#0AB247] font-medium text-xs text-center absolute top-2 left-2'>30% off selected items</div>
                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-28'>
                        <img src={assets.clock_01} alt="" className='w-5' />
                        <p className='text-xs font-medium text-[#1E1E1E]'>31 mins</p>
                    </div>
                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-4'>
                        <img src={assets.scooter_02} alt="" className='w-5' />
                        <p className='text-xs font-medium text-[#1E1E1E]'>EBT 150</p>
                    </div>
                    {/* Card Info */}
                    <div className='px-2'>
                        <div className='flex items-center justify-between mt-2'>
                            <h2 className='text-base font-bold text-[#2F2F3F]'>KFC Eastlight</h2>
                            <div className='flex items-center gap-2'>
                                <img src={assets.star} alt="" className='w-[18px]' />
                                <p className='text-[#1E1E1E] text-sm'>4.5</p>
                            </div>
                        </div>
                        <p className='text-xs text-[#979797] mt-1'>Burger, Fast Food, American...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offers