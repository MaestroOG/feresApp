import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryBottom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div className='fixed bottom-0 w-full flex justify-center py-5'>
            <button className='w-[95%] bg-[#0AB247] text-white rounded-[30px] p-[16px] font-medium text-lg' onClick={() => navigate(`/restaurant/${id}`)}>Apply</button>
        </div>
    )
}

export default CategoryBottom