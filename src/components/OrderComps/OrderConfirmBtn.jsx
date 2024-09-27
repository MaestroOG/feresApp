import React from 'react'
import { assets } from '../../assets/assets'

const OrderConfirmBtn = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='fixed bottom-4 w-[95%] mx-auto bg-[#0AB247] rounded-full p-[12px] py-[8px] flex items-center gap-24'>
                <div className='bg-white rounded-full w-12 h-12 flex item-center justify-center'>
                    <img src={assets.arrow_right_02} alt="" className='mx-auto w-6' />
                </div>
                <div>
                    <h4 className='text-lg font-medium text-white text-center'>Place order</h4>
                    <h4 className='text-sm font-medium text-white text-center'>Slide to confirm</h4>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmBtn