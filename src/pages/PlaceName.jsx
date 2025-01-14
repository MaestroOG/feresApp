import React from 'react'
import Container from '../components/Container'
import { assets } from '../assets/assets'

const PlaceName = () => {
    return (
        <div>
            <Container className={'flex items-center gap-[27vw] py-5 mb-[45px]'}>
                <img src={assets.arrow_left} alt="" className='invert' />
                <h1 className='text-[#2F2F3F] font-extrabold text-[23px]'>Place name</h1>
            </Container>
            <div className='max-w-[398px] border mx-auto px-4 py-5 rounded-[13px] flex items-center justify-between focus-within:border focus-within:border-[#0AB247] transition-all'>
                <input type="text" className='text-[#2F2F3F] w-full border-none outline-none bg-transparent placeholder:text-[#767578] placeholder:text-lg' placeholder='Enter place name' />
                <img src={assets.close} alt="" />
            </div>

            <div className='grid grid-cols-6 gap-[13.6px] mt-5 px-4'>
                {Array(30).fill().map((_, i) => (
                    <div key={i} className='p-[14.4px]'>
                        <img src={assets.home_11} alt="" />
                    </div>
                ))}
            </div>

            <div className='fixed bottom-0 left-0 w-full px-4 py-5 bg-white'>
                <button className='px-4 py-5 w-full mx-auto rounded-full bg-[#0AB247] text-white font-semibold'>Save</button>
            </div>
        </div>
    )
}

export default PlaceName