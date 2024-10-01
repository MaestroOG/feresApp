import React from 'react'
import BookRideNav from '../components/BookRideComps/BookRideNav'
import { assets } from '../assets/assets'

const BookRide = () => {
    return (
        <div className='relative h-[100vh] overflow-hidden'>
            <BookRideNav />
            <p className='text-[#2F2F3F] text-lg text-center py-3 pb-8'>Waiting for restaurant to confirm your order...</p>
            <img src={assets.book_ride_img} alt="" className='w-screen' />
            <img src={assets.store_loco} alt="" className='absolute top-[27.4rem] left-[14.1rem]' />
            <div className='w-full bg-white fixed bottom-0 left-0 px-3 py-2 rounded-tr-[13px] rounded-tl-[13px]'>
                <div className='mb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1>
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
                <p className='mt-5 text-[#2F2F3F] text-xl font-medium'>Order progress</p>
            </div>
        </div>
    )
}

export default BookRide