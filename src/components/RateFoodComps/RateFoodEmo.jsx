import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const RateFoodEmo = () => {
    const [rating, setRating] = useState('')
    return (
        <div className='my-8 flex items-center justify-center gap-3'>
            <div className='flex flex-col gap-2 items-center justify-center' onClick={() => setRating('terrible')}>
                <div className={`${rating === 'terrible' ? 'bg-[#0AB247]' : 'bg-[#F8F8F8]'} p-4 rounded-full`}>
                    <img src={assets.terrible} alt="" />
                </div>
                <p className='text-[#979797] text-sm'>Terrible</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center' onClick={() => setRating('bad')}>
                <div className={`${rating === 'bad' ? 'bg-[#0AB247]' : 'bg-[#F8F8F8]'} p-4 rounded-full`}>
                    <img src={assets.bad} alt="" />
                </div>
                <p className='text-[#979797] text-sm'>Bad</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center' onClick={() => setRating('meh')}>
                <div className={`${rating === 'meh' ? 'bg-[#0AB247]' : 'bg-[#F8F8F8]'} p-4 rounded-full`}>
                    <img src={assets.meh} alt="" />
                </div>
                <p className='text-[#979797] text-sm'>Meh</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center' onClick={() => setRating('good')}>
                <div className={`${rating === 'good' ? 'bg-[#0AB247]' : 'bg-[#F8F8F8]'} p-4 rounded-full`}>
                    <img src={assets.good} alt="" />
                </div>
                <p className='text-[#979797] text-sm'>Good</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center' onClick={() => setRating('superb')}>
                <div className={`${rating === 'superb' ? 'bg-[#0AB247]' : 'bg-[#F8F8F8]'} p-4 rounded-full`}>
                    <img src={assets.superb} alt="" />
                </div>
                <p className='text-[#979797] text-sm'>Superb</p>
            </div>
        </div>
    )
}

export default RateFoodEmo