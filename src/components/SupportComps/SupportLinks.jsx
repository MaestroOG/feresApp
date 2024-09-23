import React from 'react'
import { assets } from '../../assets/assets'

const SupportLinks = ({ text }) => {
    return (
        <>
            <div className='mt-8 w-full flex items-center justify-between'>
                <p className='text-[#2F2F3F] font-normal text-base'>{text}</p>
                <img src={assets.arrow_right} alt="" />
            </div>
            <hr className='mt-4 border border-[#F7F7F7]' />
        </>
    )
}

export default SupportLinks