import React from 'react'

const CustomerReviewSortBtn = ({ image, text }) => {
    return (
        <button className='border border-[#0AB247] rounded-3xl px-4 py-2 flex items-center gap-1 w-max'>
            <img src={image} alt="" />
            <p className='text-sm font-normal text-[#0AB247]'>{text}</p>
        </button>
    )
}

export default CustomerReviewSortBtn