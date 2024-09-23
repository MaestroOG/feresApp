import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlockBtn = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/restaurantsupport/selectmenu')} className='text-[#2F2F3F] font-medium text-lg w-full bg-[#F8F8F8] rounded-[50px] px-[55px] py-[14px]'>
            Select your menu
        </button>
    )
}

export default BlockBtn