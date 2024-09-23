import React from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const ServiceCard = () => {

    const navigate = useNavigate();

    return (
        <div className='mt-7 px-4 flex items-center justify-center w-full mx-auto relative'>
            {/* Left */}

            {/* <div className='bg-[#0AB247] w-1/2 px-3 py-4 clipped'>
                <h2 className='text-base font-medium text-[#FFE5A4]'>Get the best food restaurant and fast delivery with Feres</h2>
                <button onClick={() => navigate('/allrestaurants')} className='bg-white text-[#0AB247] rounded-3xl py-3 px-5 mt-3'>View all</button>
            </div> */}

            <img onClick={() => navigate('/allrestaurants')} src={assets.hero_img} alt="" />

            {/* Right */}
            {/* <div className='w-1/2'>
                <img src={assets.service_card_img} alt="" className='rounded-md w-full m-auto' />
            </div> */}
        </div>
    )
}

export default ServiceCard
