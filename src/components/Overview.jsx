import React from 'react'

const Overview = () => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-xl text-[#2F2F3F]'>Overview</h2>
            <p className='mt-3 text-base text-[#767578] font-normal'>Lorem ipsum dolor sit amet consectetur. Amet placerat nulla ornare a vulputate aliquam. Eget eget in augue vulputate nec nunc.. <span className='text-[#0AB247]'>Read More</span></p>

            <div className='flex items-center mt-11 gap-7'>
                <p className='text-base font-semibold'>Monday - Friday</p>
                :
                <p className='text-[#0AB247]'>10:00 - 22:00</p>
            </div>
            <div className='flex items-center mt-5 gap-5'>
                <p className='text-base font-semibold'>Saturday - Sunday</p>
                :
                <p className='text-[#0AB247]'>12:00 - 20:00</p>
            </div>
        </div>
    )
}

export default Overview