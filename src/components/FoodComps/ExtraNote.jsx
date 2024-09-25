import React from 'react'

const ExtraNote = ({ onClick }) => {
    return (
        <div className='px-4 bg-white rounded-xl mt-3 pb-24' onClick={onClick}>
            <textarea name="" id="" placeholder='Add a note' className='text-base text-[#C4C4C4] w-full border-none outline-none'></textarea>
        </div>
    )
}

export default ExtraNote