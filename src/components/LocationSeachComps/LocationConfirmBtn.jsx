import React from 'react'
import { useNavigate } from 'react-router-dom'

const LocationConfirmBtn = () => {
    const navigate = useNavigate()
    return (
        <div className='fixed bottom-0 bg-white w-full flex items-center justify-center py-5'>
            <button className='text-white font-medium text-xl bg-[#0AB247] w-[90%] mx-auto p-[16px] rounded-full' onClick={() => navigate('/selectlocation')}>Confirm location</button>
        </div>
    )
}

export default LocationConfirmBtn