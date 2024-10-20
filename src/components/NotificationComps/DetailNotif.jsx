import React from 'react'
import NotificationNav from './NotificationNav'
import { assets } from '../../assets/assets'

const DetailNotif = () => {
    return (
        <div>
            <NotificationNav />
            <div className='px-4 mt-7'>
                <h3 className='text-[#2F2F3F] text-lg font-medium'>Get 25% discount on your next Feres trip</h3>
                <p className='text-[#ACACAC] text-base'>24 January 2024, 2:24 PM</p>
                <img src={assets.detail_notif_img} alt="" className='my-5' />
                <p className='text-[#2F2F3F] text-base'>Lorem ipsum dolor sit amet consectetur. Id amet suspendisse etiam suscipit dui. Feugiat diam ut urna amet feugiat sem ultricies. A etiam ut lobortis tincidunt quis aliquet molestie sed lectus etiam suscipit dui. Feugiat diam ut urna amet feugiat </p>
            </div>
        </div>
    )
}

export default DetailNotif