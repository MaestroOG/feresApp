import React from 'react'

const DeleteCardBtn = ({ onClick }) => {
    return (
        <div className='fixed bottom-0 left-0 bg-white px-2 py-5 w-full'>
            <button className='bg-[#E92D53] rounded-[30px] p-[16px] text-white font-medium text-lg w-full mt-5' onClick={onClick}>Delete card</button>
        </div>
    )
}

export default DeleteCardBtn