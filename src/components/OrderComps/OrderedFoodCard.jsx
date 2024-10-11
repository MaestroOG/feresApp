import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const OrderedFoodCard = ({ title, desc, price, quantity, onPlusClick, onMinusClick }) => {
    const [orderCount, setOrderCount] = useState(quantity)
    const { cartItems } = useContext(FeresContext)


    return (
        <>
            <div className='mt-6 flex items-center gap-3 rounded-2xl px-6'>
                <img src={assets.item_placeholder} alt="" className='w-28 mb-auto py-[6px] rounded-2xl' />
                <div className='pr-1'>
                    <h2 className='text-[#2F2F3F] font-medium text-base'>{title}</h2>
                    <p className='text-[#2F2F3F66] text-xs'>{desc}</p>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-[#0AB247] text-base font-bold'>ETB {price}</p>
                        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-full gap-5 px-2 py-1 w-[88px] h-[33px]'>
                            <img src={assets.minus_sign} alt="" className='invert w-[11px]' onClick={onMinusClick} />
                            <p className='text-[9.6px] text-[#2F2F3F] font-bold'>{quantity}</p>
                            <img src={assets.plus_sign} alt="" className='w-[11px]' onClick={onPlusClick} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-[90%] mt-3 mx-auto' />
        </>
    )
}

export default OrderedFoodCard