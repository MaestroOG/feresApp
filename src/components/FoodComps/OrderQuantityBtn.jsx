import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const OrderQuantityBtn = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center w-full gap-3 fixed bottom-0 bg-white py-6'>
            <button className='border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]'>
                <img src={assets.minus_sign} alt="" />
                <p>1</p>
                <img src={assets.plus_sign} alt="" />
            </button>
            <button className='bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]' onClick={() => navigate('/restaurant')}>Add EBT 140</button>
        </div>
    )
}

export default OrderQuantityBtn