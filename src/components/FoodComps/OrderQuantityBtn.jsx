import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const OrderQuantityBtn = () => {
    const [orderCount, setOrderCount] = useState(0)
    const navigate = useNavigate();

    const handleMinusClick = () => {
        if (orderCount > 0) {
            setOrderCount(orderCount - 1)
        }
    }

    const handlePlusClick = () => {
        setOrderCount(orderCount + 1)
    }
    return (
        <div className='flex items-center w-full gap-3 fixed bottom-0 bg-white py-6'>
            <button className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]'>
                <img src={assets.minus_sign} alt="" onClick={handleMinusClick} className='invert' />
                <p>{orderCount}</p>
                <img src={assets.plus_sign} alt="" onClick={handlePlusClick} />
            </button>
            <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]' onClick={() => navigate('/restaurant')}>Add EBT 140</button>
        </div>
    )
}

export default OrderQuantityBtn