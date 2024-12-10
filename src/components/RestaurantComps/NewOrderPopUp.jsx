import React, { useState } from 'react'
import { assets } from '../../assets/assets'


const NewOrderPopUpModel = () => {
    const [visible, setVisible] = useState(true)
    return (
        <div className={`rounded-2xl w-full fixed bottom-0 z-20 bg-white pt-4 ${visible ? '' : 'hidden'}`}>
            <div className='bg-[#ECFFF3] w-11/12 mx-auto rounded-lg'>
                <img src={assets.newOrder_img} alt="" />
            </div>
            <div className='w-11/12 mx-auto mb-5'>
                <h2 className='text-xl font-bold mt-5'>Make a new order</h2>
                <p className='font-medium text-sm text-[#72737B] my-3'>A new order will remove the “burger” from your cart.</p>
                <div className='mt-4 w-full flex items-center justify-between'>
                    <button className='bg-[#F6F6F6] rounded-[30px] px-[16px] py-[16px] text-[#2F2F3F] font-medium text-lg w-[49%]' onClick={() => setVisible(false)}>Cancel</button>
                    <button className='bg-[#0AB247] rounded-[30px] px-[16px] py-[16px] text-white font-medium text-lg w-[49%]'>OK</button>
                </div>
            </div>
        </div>
    )
}

export default NewOrderPopUpModel