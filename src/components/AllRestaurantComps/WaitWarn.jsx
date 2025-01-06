import React from 'react'
import { assets } from '../../assets/assets'

const WaitWarn = ({ name, onClick }) => {
    return (
        <div onClick={onClick} className='p-3 rounded-2xl mt-[104px] flex items-center justify-between bg-[#EBF9EE] w-[95%] mx-auto'>
            <div className='flex items-center gap-2'>
                <img src={assets.notification_bell} alt="" />
                <p className='text-[14px] text-[#0AB247]'>{name}</p>
            </div>
            <div>
                <img src={assets.arrow_right} alt="" />
            </div>
        </div>
    )
}

export default WaitWarn