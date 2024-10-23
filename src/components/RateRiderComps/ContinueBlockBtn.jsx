import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ContinueBlockBtn = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full fixed bottom-0 left-0 py-5 flex items-center justify-center'>
            <button className='bg-[#0AB247] rounded-full p-4 w-[95%] text-white' onClick={() => navigate('/ratefood')}>Continue</button>
        </div>
    )
}
