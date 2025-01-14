import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const AddressSaveBtns = () => {
    return (
        <Container className={'flex items-center gap-4 mb-5'}>
            <button className='rounded-[30px] bg-[#0AB247] py-[15px] px-[14.5px] text-white flex items-center gap-[6px]'>
                <img src={assets.home_11} alt="" className='invert' />
                <p className='text-white'>Home</p>
            </button>
            <button className='rounded-[30px] bg-white border border-[#F4F4F4] py-[15px] px-[14.5px] text-[#2F2F3F] flex items-center gap-[6px]'>
                <img src={assets.home_11} alt="" className='invert' />
                <p className='text-[#2F2F3F]'>Home</p>
            </button>
            <button className='rounded-[30px] bg-white border border-[#F4F4F4] py-[15px] px-[14.5px] text-[#2F2F3F] flex items-center gap-[6px]'>
                <img src={assets.home_11} alt="" className='invert' />
                <p className='text-[#2F2F3F]'>Home</p>
                <img src={assets.arrow_right} alt="" />
            </button>
        </Container>
    )
}

export default AddressSaveBtns