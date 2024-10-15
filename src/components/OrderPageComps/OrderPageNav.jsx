import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const OrderPageNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between p-4'>
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>Orders</h2>
            <img src={assets.search} alt="" onClick={() => navigate('/ordersearch')} />
        </div>
    )
}

export default OrderPageNav