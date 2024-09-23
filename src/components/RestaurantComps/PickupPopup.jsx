import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const PickupPopup = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={`fixed bottom-0 left-0 rounded-tl-3xl rounded-tr-3xl z-50 bg-white w-full h-[20vh] py-4 border border-[#F7F7F7] ${visible ? 'hidden' : ''}`}>
            <div className='bg-[#EEEEEF] h-[6px] w-[52px] fixed left-[45%] rounded-[13px]'></div>
            <div className='flex items-center justify-between px-3 w-[58%] ml-auto mt-5'>
                <h3 className='text-center font-bold text-lg text-[#2B2A2F]'>Pickup</h3>
                <img src={assets.close} alt="" className='float-right' onClick={() => setVisible(true)} />
            </div>
            <p className='text-[#2F2F3F] font-normal px-4 mt-7 text-lg'>This is a pickup order, requiring you to collect it yourself from the restaurant</p>
        </div>
    )
}

export default PickupPopup