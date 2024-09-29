import React from 'react'

const AddNewBtn = ({ onClick }) => {
    return (
        <div className='fixed bottom-0 left-0 bg-white px-2 py-5 w-full'>
            <button className='bg-[#0AB247] rounded-[30px] p-[16px] text-white font-medium text-lg w-full mt-5' onClick={onClick}>Add new card</button>
        </div>
    )
}

export default AddNewBtn