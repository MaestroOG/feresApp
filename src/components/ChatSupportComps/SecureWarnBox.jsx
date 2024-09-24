import React from 'react'
import { assets } from '../../assets/assets'

const SecureWarnBox = () => {
    return (
        <div className='bg-[#FFEFD3] w-max mx-auto my-3 rounded-lg py-[10px] px-[10px] flex items-start gap-[2px]'>
            <img src={assets.lock_icon} alt="" />
            <p className='font-medium text-center text-[#3A3B41] text-[13px]'>Keep your account safe-never share personal<br /> or account information in this chat</p>
        </div>
    )
}

export default SecureWarnBox