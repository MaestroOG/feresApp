import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const WaitWarn = () => {

    const { setVisible } = useContext(FeresContext)

    return (
        <div className='p-3 rounded-2xl mt-9 flex items-center justify-between bg-[#EBF9EE] w-[90%] mx-auto'>
            <div onClick={() => setVisible(true)} className='flex items-center gap-2'>
                <img src={assets.notification_bell} alt="" />
                <p className='text-[14px] text-[#0AB247]'>Extended waiting times should be anticipated</p>
            </div>
            <div>
                <img src={assets.arrow_right} alt="" />
            </div>
        </div>
    )
}

export default WaitWarn