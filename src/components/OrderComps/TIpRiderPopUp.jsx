import React from 'react'
import { assets } from '../../assets/assets'

const TIpRiderPopUp = () => {
    return (
        <div className='fixed bottom-0 w-full z-30 pt-4 pb-2 bg-white rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640]'>
            <img src={assets.tip_rider_popup_img} alt="" className='mx-auto' />
            <div className='px-3 my-4'>
                <h3 className='font-bold text-xl text-[#2F2F3F] mb-1'>Tip your rider in appreciation</h3>
                <p className='text-[#2F2F3F] text-sm'>Our riders are available and prepared to deliver your items.</p>
                <div className='mt-5 flex items-center gap-3'>
                    <img src={assets.gift} alt="" />
                    <p className='text-[#2F2F3F] text-sm font-medium'>Riders retain 100% of your tips.</p>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                    <img src={assets.link_forward} alt="" />
                    <p className='text-[#2F2F3F] text-sm font-medium w-[90%]'>If an order be cancelled, your tip will be refunded using the initial form of payment method</p>
                </div>
            </div>
        </div>
    )
}

export default TIpRiderPopUp