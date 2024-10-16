import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='w-screen fixed bottom-0 left-0 flex items-center justify-between px-2 py-2 bg-white'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} px-3 flex flex-col items-center justify-center`}>
                {({ isActive }) => (
                    <>
                        <img
                            src={isActive ? assets.home_icon : assets.home_01}
                            alt="Nav Icon"
                        />
                        <p className={`text-sm mt-1`}>Home</p>
                    </>
                )}
            </NavLink>
            <NavLink to={'/order'} className={({ isActive }) => `${isActive ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} px-3 flex flex-col items-center justify-center`}>
                {({ isActive }) => (
                    <>
                        <img
                            src={isActive ? assets.invoice_01 : assets.invoice_icon}
                            alt="Nav Icon"
                        />
                        <p className={`text-sm mt-1`}>Orders</p>
                    </>
                )}
            </NavLink>
            <NavLink to={'/messages'} className={({ isActive }) => `${isActive ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} px-3 flex flex-col items-center justify-center`}>
                {({ isActive }) => (
                    <>
                        <img
                            src={isActive ? assets.message_active : assets.message_icon}
                            alt="Nav Icon"
                        />
                        <p className={`text-sm mt-1`}>Messages</p>
                    </>
                )}
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'text-[#0AB247]' : 'text-[#CCCCCC]'} px-3 flex flex-col items-center justify-center`}>
                <img src={assets.user_icon} alt="" />
                <p className='text-sm text-[#CCCCCC] mt-1'>Profile</p>
            </NavLink>
        </div>
    )
}

export default Menu