import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const RecommendedRests = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full px-4 mt-7'>
            <h2 className='text-[#2F2F3F] text-lg font-medium'>Recommended restaurant</h2>


            <div className="flex items-center gap-4">
                <div className='mt-6 w-max' onClick={() => navigate('/restaurant')}>
                    {/* Top */}
                    <img src={assets.recommended_card_img} alt="" />
                    {/* Bottom */}
                    <div className='mt-3'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='font-bold text-base'>KFC Eastlight</h2>
                            <div className='flex items-center gap-1 justify-center'>
                                <img className='mb-1' src={assets.star} alt="" />
                                <h2 className='text-base'>4.5</h2>
                            </div>
                        </div>
                        <p className='text-xs text-[#979797]'>Burger, Fast Food, American...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedRests