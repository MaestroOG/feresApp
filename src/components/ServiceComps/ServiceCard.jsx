import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const ServiceCard = () => {

    const cardImgSrc = [assets.service_card_img, assets.service_card_img_2]
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    setTimeout(() => {
        setIndex(index === 0 ? 1 : 0)
        // console.log(index);

    }, 6000);

    return (
        <div className='my-8'>
            {/* Left */}
            <div className='bg-[#0AB247] clipped w-[179px] h-[158px] flex flex-col justify-center absolute left-4 px-3 rounded-tl-3xl rounded-bl-3xl'>
                <p className='text-[#FFE5A4] font-medium text-base'>Get the best food restaurant and fast delivery with Feres</p>
                <button className='bg-white text-[#0AB247] rounded-[30px] p-[10px] w-[77px] mt-3' onClick={() => navigate('/allrestaurants')}>View all</button>
            </div>

            {/* Right */}

            <img src={cardImgSrc[index]} alt="" className='absolute right-4 rounded-tr-3xl rounded-br-3xl' />
            <img src={assets.feres_logo} className="absolute right-[7%] top-[21%]" />

        </div>
    )
}

export default ServiceCard
