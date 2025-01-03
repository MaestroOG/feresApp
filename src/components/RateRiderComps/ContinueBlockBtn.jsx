import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ContinueBlockBtn = ({ to, onClick }) => {
    const navigate = useNavigate();

    const onClickFunction = () => {
        onClick()
        navigate(`${to}`)
    }
    return (
        <div className='bg-white w-full fixed bottom-0 left-0 py-5 flex items-center justify-center'>
            <button className='bg-[#0AB247] rounded-full p-4 w-[95%] text-white' onClick={onClickFunction}>Continue</button>
        </div>
    )
}
