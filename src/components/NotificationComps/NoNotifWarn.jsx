import React from 'react'
import { assets } from '../../assets/assets'

const NoNotifWarn = () => {
    return (
        <div className='flex flex-col gap-1 items-center justify-center h-[70vh]'>
            <img src={assets.notification_lg} alt="" />
            <h3 className='text-[#2F2F3FCC] text-xl font-medium'>No Notifications</h3>
            <p className='text-[#2F2F3FCC] text-base font-medium'>New notifications will show up here</p>
        </div>
    )
}

export default NoNotifWarn