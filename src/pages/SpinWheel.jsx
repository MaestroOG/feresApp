import React from 'react'
import { assets } from '../assets/assets'
import NavigationBtn from '../components/NavigationBtn'

const SpinWheel = () => {
    return (
        <div className='w-full h-screen bg-[#12461F] pt-4 px-4 relative'>

            {/* Top Section */}
            <NavigationBtn />

            {/* Middle Text */}
            <div className='flex flex-col items-center justify-center my-7 mx-auto w-4/5'>
                <h2 className='text-[#34C759] text-[36px] leading-[48px] font-bold uppercase text-center '>Spin the wheel</h2>
                <p className='text-[16px] text-white text-center mt-2'>Get a chance to earn free Feres Miles</p>
                <button className='mt-4 bg-gradient-to-r from-[#F4B83E] to-[#E39D0E] px-6 py-3 font-semibold rounded-lg'>3 Lucky Spin Available</button>
            </div>

            {/* Wheel */}
            <div className='flex items-center justify-center'>
                <img src={assets.wheel} alt="" />
            </div>

            {/* Bottom */}
            <div>
                <img src={assets.treasure_img} className="w-full" />
            </div>

            <button className='mt-4 bg-gradient-to-r from-[#F4B83E] to-[#E39D0E] px-6 py-3 font-semibold rounded-lg uppercase absolute bottom-4 left-1/4'>free spins everyday</button>

            {/* Dots */}
            <img src={assets.dot} className="absolute left-[66px] top-[222px]" />
            <img src={assets.dot} className="absolute left-[368px] top-[288px]" />
            <img src={assets.dot} className="absolute left-[52px] top-[596px]" />
            <img src={assets.dot} className="absolute left-[210px] top-[630px]" />
        </div>
    )
}

export default SpinWheel