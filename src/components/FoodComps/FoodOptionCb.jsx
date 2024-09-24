import React from 'react'

export const FoodOptionCb = () => {
    return (
        <div className='px-4 flex items-center justify-between pb-8'>
            <div className='flex items-center gap-2'>
                <input type="checkbox" />
                <p className='text-[#2F2F3FCC]'>Consectetur</p>
            </div>
            <p className='text-[#CCCCCC] text-base'>+EBT 0</p>
        </div>
    )
}
