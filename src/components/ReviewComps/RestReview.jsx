import React from 'react'
import { assets } from '../../assets/assets'

const RestReview = () => {
    return (
        <div className='px-1 mt-11'>
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>KFC Eastlight</h2>

            {/* Left */}
            <div className='flex items-center'>

                <div className='flex w-[36%] mx-4 flex-col items-start justify-center mt-6'>
                    <h1 className='text-3xl text-[#2F2F3F] font-bold text-center m-auto'>4.5</h1>
                    <div className='flex items-center justify-center m-auto gap-3 mt-1'>
                        <img src={assets.star} alt="" />
                        <img src={assets.star} alt="" />
                        <img src={assets.star} alt="" />
                        <img src={assets.star} alt="" />
                        <img src={assets.star} alt="" />
                    </div>
                    <p className='text-[#2F2F3F] text-base text-center m-auto mt-2'>(3 reviews)</p>
                </div>

                <hr className='rotate-90 w-[30%]' />

                {/* Right */}
                <div className='mr-8 mt-4'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>5</p>
                        <img src={assets.five_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>4</p>
                        <img src={assets.four_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>3</p>
                        <img src={assets.three_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>2</p>
                        <img src={assets.two_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>1</p>
                        <img src={assets.one_star} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestReview