import React from 'react'

export const FoodOptionCb = ({ text, price, onChange, name, checked }) => {
    return (
        <div className=' flex items-center justify-between pb-8'>
            <div className='flex items-center gap-2 relative'>
                <input type="checkbox" onChange={onChange} checked={checked} name={name} />
                <p className='text-[#2F2F3FCC]'>{text}</p>
            </div>
            <p className='text-[#CCCCCC] text-base'>+EBT {price}</p>
        </div>
    )
}
