import React from 'react'

const OtherTip = () => {
    return (
        <div className='px-4 pt-4 pb-6'>
            <h2 className='text-[#2F2F3F] font-medium text-lg'>Others</h2>
            <input type="number" placeholder='Enter amount' className='bg-[#F8F8F8] py-[20px] px-[10px] w-full rounded-[13px] mt-4 mb-8 placeholder:text-[#767578] focus:bg-white focus:outline-[#0AB247]' />
            <div className='flex items-center gap-3'>
                <button className='border border-[#0AB247] py-[10px] px-[20px] rounded-full text-[#0AB247] text-lg w-[50%]'>Cancel</button>
                <button className='border border-[#0AB247] bg-[#0AB247] py-[10px] px-[20px] rounded-full text-white text-lg w-[50%]'>Done</button>
            </div>
        </div>
    )
}

export default OtherTip