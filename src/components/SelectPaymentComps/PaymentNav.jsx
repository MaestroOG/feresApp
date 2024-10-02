import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PaymentNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center pt-5 gap-24'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h2 className='text-[#2F2F3F] font-bold text-xl'>Payment method</h2>
        </div>
    )
}

export default PaymentNav