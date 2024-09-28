import React from 'react'
import { assets } from '../../assets/assets'

const TotalBill = () => {
    return (
        <div className='px-4 mt-7 pb-4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[#767578]'>Subtotal</h3>
                <p className='text-[#2F2F3F] font-medium text-base'>ETB280</p>
            </div>
            <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#767578]'>Delivery Fee</h3>
                    <img src={assets.information_circle} alt="" />
                </div>
                <p className='text-[#2F2F3F] font-medium text-base'>ETB20</p>
            </div>
            <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#767578]'>Service Fee</h3>
                    <img src={assets.information_circle} alt="" />
                </div>
                <p className='text-[#2F2F3F] font-medium text-base'>ETB10</p>
            </div>
            <div className='flex items-center justify-between mt-2'>
                <h3 className='text-[#767578]'>Subtotal</h3>
                <p className='text-[#2F2F3F] font-medium text-base'>ETB310</p>
            </div>
        </div>
    )
}

export default TotalBill