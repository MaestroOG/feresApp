import React from 'react'

const FoodIntroBox = ({ itemName, itemPrice, itemDesc }) => {
    return (
        <div className='bg-white px-4 py-4 rounded-br-[16px] rounded-bl-[16px]'>
            <h2 className='text-[#2F2F3F] text-xl font-bold mb-2'>{itemName}</h2>
            <p className='text-[#767578] text-base'>{itemDesc}</p>
            <div className='flex items-center gap-2 mt-3'>
                <p className='text-[#9E9E9E] line-through text-base'>ETB 170</p>
                <p className='text-[#0AB247] font-bold text-base'>{`ETB ${itemPrice}`}</p>
            </div>
        </div>
    )
}

export default FoodIntroBox