import React from 'react'
import { assets } from '../../assets/assets'

const HelpSupportNav = () => {
    return (
        <div className='px-4 py-5 flex items-center gap-[27vw]'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h1 className='text-[#2F2F3F] text-lg font-bold'>Help & Support</h1>
        </div>
    )
}

export default HelpSupportNav