import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Restaurant = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-gray-400'>
            {/* Feature */}
            <div className='relative'>
                <img src={assets.restaurant_featured} alt="" />
                <button className='absolute top-[10%] left-[4%] bg-[#06060666] p-3 rounded-xl'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left_02} alt="" className='invert' />
                </button>
                <div className='absolute top-[10%] right-[4%]'>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img src={assets.add_team} alt="" />
                    </button>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img src={assets.share} alt="" />
                    </button>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img className='invert' src={assets.search} alt="" />
                    </button>
                </div>
            </div>

            {/* Restaurant Title */}
            <div className='bg-white'>
                <div className="flex items-center justify-between pt-5 px-4">
                    <div className='flex items-center gap-2'>
                        <img src={assets.kfc_logo} alt="" />
                        <h2 className='text-xl font-bold text-[#2F2F3F]'>KFC Eastlight</h2>
                    </div>
                    <div className='flex items-center gap-1' onClick={() => navigate('/review')}>
                        <img src={assets.star} alt="" />
                        <p className='text-base font-normal'>4.5 (50 reviews)</p>
                    </div>
                </div>
                <div className='px-4 mt-5 flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.scooter_img} alt="" />
                        <p className='text-base text-[#646464]'>Delivery</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_user} alt="" />
                        <p className='text-base text-[#646464]'>Pickup</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar} alt="" />
                        <p className='text-base text-[#646464]'>Schedule</p>
                    </div>
                </div>

                {/* Delivery Details */}
                <div className='mt-7 px-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={assets.clock_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>31 Minutes</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                </div>

                {/* Help Cirlce */}
                <div className='mt-7 px-4 flex items-center justify-between gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.scooter_green} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>EBT 150</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.help_circle} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>Allergies and contact details</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.discount_tag} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>30% off on their entire menu</p>
                        </div>
                    </div>
                    <div>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                </div>

                {/* Categories */}
                <div className='px-4 mt-7'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[#2F2F3F] text-lg'>Categories</h2>
                        <p className='text-[#979797] text-base'>View all</p>
                    </div>


                    {/* Category Buttons */}

                    <div className='mt-6 flex gap-3'>
                        <button className='bg-[#0AB247] text-white rounded-xl p-3 px-6'>All</button>
                        <button className='border border-[#EEEEEE] text-[#AEAEAE] rounded-xl p-3 px-6'>Trending meals</button>
                        <button className='border border-[#EEEEEE] text-[#AEAEAE] rounded-xl p-3 px-6'>Sandwiches</button>
                    </div>

                </div>

                {/* Add To Basket Button */}

                <div className='bg-white px-2 py-4 fixed bottom-0 w-full'>
                    <button className='bg-[#0AB247] text-white flex items-center gap-2 w-full justify-center rounded-3xl p-4'>
                        <img src={assets.shopping_basket} alt="" className='invert' />
                        Add To Basket
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Restaurant