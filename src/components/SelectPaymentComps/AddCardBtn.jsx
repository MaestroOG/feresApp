import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddCardBtn = ({ onClick }) => {
    const navigate = useNavigate()
    return (
        <>
            <button className='bg-[#F8F8F8] rounded-[30px] p-[16px] text-[#2F2F3F] font-medium text-lg w-full mt-5' onClick={onClick}>Add new card</button>
        </>
    )
}

export default AddCardBtn