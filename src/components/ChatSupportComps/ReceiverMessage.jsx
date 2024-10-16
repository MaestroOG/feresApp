import React from 'react'
import { assets } from '../../assets/assets'

const ReceiverMessage = () => {
    return (
        <div className='bg-white text-white p-3 my-6 mx-3 w-[70%] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[6px]'>
            <div className='text-[#2F2F3F] text-base font-normal'>Lorem ipsum dolor sit amet  Adipisi purus netus dignissim nulla lectus. Cras sed ullamcorper netus nunc integer viverra est et enim.</div>
            <div className='flex items-center gap-2 justify-end'>
                <p className='text-[#8E8E93] text-xs'>09:24</p>
                <img src={assets.tick_double} alt="" />
            </div>
        </div>
    )
}

export default ReceiverMessage