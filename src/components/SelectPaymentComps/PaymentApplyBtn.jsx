import React, { useContext } from 'react'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'

const PaymentApplyBtn = () => {
    const navigate = useNavigate();
    const { selectedOption, setPaymentMethod } = useContext(FeresContext)

    const handleApplyClick = () => {
        setPaymentMethod(selectedOption)
        navigate(-1)
    }
    return (
        <div className='fixed bottom-0 left-0 bg-white px-2 py-5 w-full'>
            <button className='bg-[#0AB247] rounded-[30px] p-[16px] text-white text-lg font-medium w-full' onClick={handleApplyClick}>Apply</button>
        </div>
    )
}

export default PaymentApplyBtn