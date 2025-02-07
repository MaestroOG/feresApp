import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const AddItemBtn = ({ isHr }) => {
    const navigate = useNavigate();
    const { id } = useParams(); // Extract 'id' from the URL
    
    return (
        <div className='bg-white pt-6'>
            <div className='font-medium text-base text-[#0AB247] border border-[#0AB247] w-max px-[16px] py-[8px] rounded-full mx-3' onClick={() => navigate(`/restaurant/${id}`)}>Add items</div>
            {isHr && <hr className='w-[90%] mt-3 mx-auto' />}
        </div>
    )
}

export default AddItemBtn