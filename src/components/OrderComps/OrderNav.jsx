import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const OrderNav = () => {
    const { setDelOrderVisible } = useContext(FeresContext)
    return (
        <div className='flex items-center justify-between px-4 py-7'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h2 className='text-[#2F2F3F] text-2xl font-bold'>KFC Eastlight</h2>
            <img src={assets.delete_02} alt="" onClick={() => setDelOrderVisible(true)} />
        </div>
    )
}

export default OrderNav