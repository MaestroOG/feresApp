import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const OrderCategoryBtn = () => {
    const { orderCat, setOrderCat } = useContext(FeresContext)
    return (
        <div className='bg-[#F8F8F8] rounded-3xl flex items-center w-full justify-between'>
            <div className={`${orderCat === 'Active' ? 'bg-white text-[#0AB247] shadow' : 'text-[#979797]'} rounded-3xl px-4 py-2 font-medium text-sm`} onClick={()=>setOrderCat("Active")}>Active</div>
            <div className={`${orderCat === 'Upcoming' ? 'bg-white text-[#0AB247] shadow' : 'text-[#979797]'} rounded-3xl px-4 py-2 font-medium text-sm`} onClick={()=>setOrderCat("Upcoming")}>Upcoming</div>
            <div className={`${orderCat === 'Completed' ? 'bg-white text-[#0AB247] shadow' : 'text-[#979797]'} rounded-3xl px-4 py-2 font-medium text-sm`} onClick={()=>setOrderCat("Completed")}>Completed</div>
            <div className={`${orderCat === 'Cancelled' ? 'bg-white text-[#0AB247] shadow' : 'text-[#979797]'} rounded-3xl px-4 py-2 font-medium text-sm`} onClick={()=>setOrderCat("Cancelled")}>Cancelled</div>
        </div>
    )
}

export default OrderCategoryBtn