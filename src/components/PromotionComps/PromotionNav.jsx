import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'

const PromotionNav = ({ header }) => {
    const { setSelectView } = useContext(FeresContext)
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between p-4'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h3 className='text-[#2F2F3F] text-xl font-bold'>{header}</h3>
            <img src={assets.more_horizontal} alt="" onClick={() => setSelectView(true)} />
        </div>
    )
}

export default PromotionNav