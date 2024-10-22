import React from 'react'
import { assets } from '../../assets/assets'

const NoSupportMessage = () => {
    return (
        <div className='flex items-center justify-center gap-2 flex-col h-[68vh]'>
            <img src={assets.message_multiple_01} alt="" />
            <h3 className='text-[#2F2F3FCC] text-xl font-bold'>No messages</h3>
            <p className='text-sm text-[#2F2F3FCC]'>Messages from the team will be shown here.</p>
        </div>
    )
}

export default NoSupportMessage