import React from 'react'
import { assets } from '../../assets/assets'

const MessageArea = () => {
    return (
        <div className='flex items-center justify-center gap-[10px] fixed bottom-[2%] left-[0%] w-full px-4'>
            <div className='flex items-center lg:justify-between gap-2 bg-[#F8F8F8] rounded-[13px] px-4 py-[20px] w-[318px] lg:w-full lg:px-8'>
                <div className='flex items-center gap-2'>
                    <img src={assets.neutral_emoji} alt="" />
                    <input type="text" placeholder='Type a message ...' className='border-none outline-none bg-[#F8F8F8]' />
                </div>
                <div className='flex items-center gap-1'>
                    <img src={assets.attachment_02} alt="" />
                    <img src={assets.camera_02} alt="" />
                </div>
            </div>
            <button className='bg-[#0AB247] rounded-full p-3'>
                <img src={assets.sent_icon} alt="" />
            </button>
        </div>
    )
}

export default MessageArea