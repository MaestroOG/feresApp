import React from 'react'
import { assets } from '../../assets/assets'
import OrderCardBtn from './OrderCardBtn'
import { useNavigate } from 'react-router-dom'

const OrderCards = ({ paidStatus, btnText }) => {
    const navigate = useNavigate();
    return (
        <div className='px-4 shadow py-3 rounded-2xl mb-6'>
            {/* Card Top */}
            <div className='flex items-center gap-3'>
                <div>
                    <img src={assets.order_rest_img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-[#2F2F3F] font-medium text-lg'>KFC Eastlight</h2>
                    <div className='flex items-center gap-3'>
                        <p className='text-sm text-[#979797] whitespace-nowrap'>3 items</p>
                        <img src={assets.line} alt="" />
                        <p className='text-sm text-[#979797] whitespace-nowrap'>2.4 km</p>
                    </div>
                    <div className='text-[#0AB247] flex items-center gap-2'>
                        <p className='font-medium text-base'>ETB 280.00</p>
                        <div className={`${paidStatus === 'Paid' || paidStatus === 'Completed' ? 'bg-[#0AB247]' : paidStatus === 'Not yet' ? 'bg-[#FAB11D]' : paidStatus === 'Cancelled' ? 'bg-[#E92D53]' : ''} text-white p-[10px] rounded-[5px] text-[9px] font-medium h-[19px] flex items-center justify-center`}>{paidStatus}</div>
                    </div>
                </div>
            </div>
            <hr className='my-5 w-[95%] mx-auto' />
            <OrderCardBtn text={btnText} onClick={() => navigate('/bookride')} />
        </div>
    )
}

export default OrderCards