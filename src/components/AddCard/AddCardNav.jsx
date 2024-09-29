import React from 'react'
import { assets } from '../../assets/assets'

const AddCardNav = () => {
    return (
        <div className='flex items-center gap-28 py-5'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h2 className='text-[#2F2F3F] text-xl font-bold'>Add new card</h2>
        </div>
    )
}

export default AddCardNav