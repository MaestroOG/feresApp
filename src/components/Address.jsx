import React from 'react'
import { assets } from '../assets/assets'

const Address = () => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-xl text-[#2F2F3F]'>Address</h2>
            <div className='mt-5 flex items-center gap-3'>
                <img src={assets.location_green} alt="" />
                <p className='text-base text-[#767578]'>Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <img src={assets.map} alt="" className='mt-5' />


        </div>
    )
}

export default Address