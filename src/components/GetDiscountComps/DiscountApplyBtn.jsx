import React, { useContext } from 'react'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'

const DiscountApplyBtn = () => {
    const navigate = useNavigate();
    const { discountOpt, setDiscount } = useContext(FeresContext)
    const handleApplyClick = () => {
        setDiscount(discountOpt)
        navigate('/order')
    }
    return (
        <div className='bg-white fixed bottom-0 left-0 w-full flex items-center justify-center py-5'>
            <button className='bg-[#0AB247] rounded-full p-4 text-white font-medium text-lg w-[95%]' onClick={handleApplyClick}>Apply</button>
        </div>
    )
}

export default DiscountApplyBtn