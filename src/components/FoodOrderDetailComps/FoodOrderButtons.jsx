import React from 'react'

const FoodOrderButtons = () => {
    return (
        <div className='bg-white w-full mt-4 px-3 py-3'>
            <button className='bg-[#0AB247] text-white rounded-full w-full font-medium text-lg py-4 mb-3'>Reorder</button>
            <button className='bg-[#F8F8F8] text-[#2F2F3F] rounded-full w-full font-medium text-lg py-4 mb-3'>View receipt</button>
            <button className='bg-[#F8F8F8] text-[#2F2F3F] rounded-full w-full font-medium text-lg py-4 mb-3'>Get help</button>
        </div>
    )
}

export default FoodOrderButtons