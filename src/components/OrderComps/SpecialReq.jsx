import React from 'react'
import { assets } from '../../assets/assets'

const SpecialReq = () => {
    return (
        <div className='mt-4 px-4'>
            <h2 className='text-[#2F2F3F] font-bold text-lg'>Special request</h2>
            <div className='flex items-center justify-between mt-4'>
                <div className='flex gap-2'>
                    <img src={assets.spoon} alt="" />
                    <div>
                        <p className='text-[#2F2F3F] text-base font-medium'>No cutlery</p>
                        <small className='text-xs text-[#767578] leading-[14.4px]'>Less plastic is the best plastic</small>
                    </div>
                </div>
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default SpecialReq