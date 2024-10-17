import React from 'react'
import { assets } from '../../assets/assets'

const FullCartCheckout = () => {
    return (
        <div className='fixed bottom-0 left-0 bg-white flex items-center p-4 w-full'>
            <div className='w-1/2'>
                <p className='text-[#B3B3B3] text-base'>Total price</p>
                <h3 className='text-xl font-bold text-[#2F2F3F]'>ETB 1500.00</h3>
            </div>
            <button className='bg-[#0AB247] rounded-full p-4 text-white font-medium text-lg flex items-center gap-2 justify-center w-full'>
                Checkout
                <img src={assets.arrow_right_03} alt="" />
            </button>
        </div>
    )
}

export default FullCartCheckout