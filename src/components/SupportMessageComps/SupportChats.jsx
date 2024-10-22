import React from 'react'

const SupportChats = ({ img, from, highlight }) => {
    return (
        <div className='flex items-center justify-between px-3 py-4'>
            <div className='flex items-center gap-3'>
                <img src={img} alt="" />
                <div className='flex flex-col gap-1'>
                    <h3 className='text-[#2F2F3F] font-medium'>{from}</h3>
                    <p className='text-[#767578] text-sm'>{highlight}</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='bg-[#0AB247] rounded-full text-white text-center w-6 h-6'>1</div>
                <div className='text-[#767578] text-sm'>09:25</div>
            </div>
        </div>
    )
}

export default SupportChats