import React from 'react'

const RateFoodSubmitBtn = ({ onClick }) => {
    return (
        <div className='bg-white w-full fixed bottom-0 left-0 py-5 flex items-center justify-center'>
            <button className='bg-[#0AB247] rounded-full p-4 w-[95%] text-white' onClick={onClick}>Submit</button>
        </div>
    )
}

export default RateFoodSubmitBtn