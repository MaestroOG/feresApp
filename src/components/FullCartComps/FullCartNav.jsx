import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const FullCartNav = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4 py-6 flex items-center gap-[35vw] sticky top-0 left-0 bg-white'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[23px] font-bold text-[#2F2F3F]'>Carts</h1>
        </div>
    )
}

export default FullCartNav