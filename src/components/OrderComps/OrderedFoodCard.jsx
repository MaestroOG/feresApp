import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const OrderedFoodCard = () => {
    const [orderCount, setOrderCount] = useState(0)
    return (
        <>
            <div className='mt-6 flex items-center gap-3 rounded-2xl px-6'>
                <img src={assets.burger_img} alt="" className='w-28 mb-auto py-[6px]' />
                <div className='pr-1'>
                    <h2 className='text-[#2F2F3F] font-medium text-base'>Beef Burger</h2>
                    <p className='text-[#2F2F3F66] text-xs'>beef patties, comb the ground beef, salt, pepper, Worcestershire..</p>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-[#0AB247] text-base font-bold'>ETB 140</p>
                        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-full gap-2 px-2 py-1'>
                            <img src={assets.minus_sign} alt="" className='invert w-[11px]' onClick={() => {
                                orderCount > 0 ? setOrderCount(orderCount - 1) : null
                            }} />
                            <p className='text-[9.6px] text-[#2F2F3F] font-bold'>{orderCount}</p>
                            <img src={assets.plus_sign} alt="" className='w-[11px]' onClick={() => {
                                setOrderCount(orderCount + 1)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-[90%] mt-3 mx-auto' />
        </>
    )
}

export default OrderedFoodCard