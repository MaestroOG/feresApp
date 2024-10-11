import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'

const DelOrderPopUp = () => {
    const { delOrderVisible, setDelOrderVisible, clearCart } = useContext(FeresContext)
    const navigate = useNavigate();
    return (
        <div className={`${!delOrderVisible ? 'hidden' : ''} fixed bg-white pt-4 w-full bottom-0 rounded-tl-3xl rounded-tr-3xl shadow-md shadow-[#96969640] z-30`}>
            <div className='w-full'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <img src={assets.close} alt="" className='ml-auto mr-4' onClick={() => setDelOrderVisible(false)} />
            </div>
            <div className='flex flex-col justify-center items-center pb-6'>
                <h2 className='text-[#2F2F3F] font-black text-2xl'>Delete orders</h2>
                <h4 className='text-[#72737B] text-lg pb-3'>Are you sure, you want to delete these orders</h4>
                <button className='bg-[#E92D53] text-white rounded-full w-[90%] p-[16px] mb-4' onClick={() => {
                    clearCart();
                    navigate('/allrestaurants')
                    setDelOrderVisible(false)
                }}>Delete</button>
                <button className='bg-[#F8F8F8] text-[#2F2F3F] rounded-full w-[90%] p-[16px]' onClick={() => setDelOrderVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default DelOrderPopUp