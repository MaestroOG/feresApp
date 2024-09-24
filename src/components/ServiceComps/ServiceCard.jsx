import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const ServiceCard = () => {

    const cardImgSrc = [assets.service_card_img, assets.service_card_img_2]
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    // setTimeout(() => {
    //     setIndex(index === 0 ? 1 : 0)
    //     // console.log(index);

    // }, 6000);

    return (
        <div className='my-8 px-4'>
            {/* Left */}
            <div className='bg-[#0AB247] w-[45%] clipped flex flex-col justify-center absolute left-[2%] px-3 pr-5 py-[18px] rounded-tl-3xl rounded-bl-3xl z-10'>
                <p className='text-[#FFE5A4] font-medium text-base'>Get the best food restaurant and fast delivery with Feres</p>
                <button className='bg-white text-[#0AB247] rounded-[30px] p-[10px] py-[7px] w-[77px] mt-3' onClick={() => navigate('/allrestaurants')}>View all</button>
            </div>

            {/* Right */}

            <div className='relative'>
                <img src={cardImgSrc[index]} alt="" className='absolute -right-2 rounded-tr-3xl rounded-br-3xl transition-all ease-in-out' />
                <img src={assets.feres_logo} className="absolute right-[6%] top-4" />
            </div>
        </div>
    )
}

export default ServiceCard
