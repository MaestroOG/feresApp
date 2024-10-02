import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddCardBtn = ({ onClick }) => {
    const navigate = useNavigate()
    return (
        <>
            <button className='bg-[#EBF9EE] rounded-[30px] p-[16px] text-[#0AB247] font-medium text-lg w-full mt-5' onClick={onClick}>Add new card</button>
            <button className='bg-[#E92D53] rounded-[30px] p-[16px] text-white font-medium text-lg w-full mt-5' onClick={() => navigate('/selectpayment/deletecard')}>Delete Card</button>
        </>
    )
}

export default AddCardBtn