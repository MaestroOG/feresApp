import React from 'react'
import { assets } from '../../assets/assets';
import Spinner from '../Spinner';

const ServiceCard = ({ to, loading, error, img, desc }) => {


    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>Something went wrong</h1>
    }
    return (
        <div className='my-8 mb-5 px-4 flex items-center gap-[-15px]'>

            {/* Left */}
            <div className='bg-[#0AB247] w-[50%] min-h-[158px] clipped flex flex-col justify-center left-[2%] px-3 pr-5 py-[18px] rounded-tl-3xl rounded-bl-3xl z-10 clipped'>
                <p className='text-[#FFE5A4] font-medium text-base'>{desc ? desc : 'No Description Available'}</p>
                <button className='bg-white text-[#0AB247] rounded-[30px] p-[10px] py-[7px] w-[77px] mt-3' onClick={to}>View all</button>
            </div>

            {/* Right */}
            <div className='relative w-[50%] ml-auto clipped_2'>
                <div className='overflow-hidden relative'>
                    <div className={`flex gap-0 transition ease-out duration-300`}>
                        <img loading='lazy' src={img} className="h-[158px] w-[250px] rounded-tr-3xl rounded-br-3xl object-cover" />
                    </div>
                </div>
                <img src={assets.feres_logo} className="absolute right-[6%] top-4" />
            </div>
        </div>
    )
}

export default ServiceCard
