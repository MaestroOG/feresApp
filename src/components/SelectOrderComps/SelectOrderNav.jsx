import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SelectOrderNav = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4 py-5 flex items-center justify-between' onClick={() => navigate(-1)}>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h1 className='text-[#2F2F3F] text-xl font-bold'>Select order</h1>
            <h3 className='text-[#0AB247] text-lg font-medium'>Close</h3>
        </div>
    )
}

export default SelectOrderNav