import React from 'react'
import { assets } from '../../assets/assets'

const DeliveryDetailsCard = ({ isPriority, img, name, desc, isLast }) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='p-3 rounded-full bg-[#EBF9EE]'>
                        <img src={img} alt="" className='w-[32.73px] h-[28.99px]' />
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-medium text-[#2F2F3F]'>{name}</h4>
                            {isPriority && <p className='text-[#0AB247]'>Priority</p>}
                        </div>
                        <p className='text-[#979797] text-sm'>{desc}</p>
                    </div>
                </div>
                <img src={assets.arrow_right} alt="" />
            </div>
            {!isLast && <hr className='my-5' />}
        </>
    )
}

export default DeliveryDetailsCard