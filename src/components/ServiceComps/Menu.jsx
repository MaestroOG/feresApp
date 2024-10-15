import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext';

const Menu = () => {
    const navigate = useNavigate();
    const { tab, setTab } = useContext(FeresContext)
    return (
        <div className='w-screen fixed bottom-0 left-0 flex items-center justify-between px-2 py-2 bg-white'>
            <div className='px-3 flex flex-col items-center justify-center' onClick={() => {
                setTab('home')
                navigate('/')
            }}>
                <img src={tab === 'home' ? assets.home_icon : assets.home_01} alt="" />
                <p className={`text-sm ${tab === 'home' ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} mt-1`}>Home</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center' onClick={() => {
                setTab('order')
                navigate('/order')
            }}>
                <img src={tab === 'order' ? assets.invoice_01 : assets.invoice_icon} alt="" />
                <p className={`text-sm ${tab === 'order' ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} mt-1`}>Orders</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.message_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Messages</p>
            </div>
            <div className='px-3 flex flex-col items-center justify-center'>
                <img src={assets.user_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Profile</p>
            </div>
        </div>
    )
}

export default Menu