import React from 'react'
import SupportNav from './SupportNav'
import IsHelpful from './IsHelpful'

const AboutRestaurant = () => {
    return (
        <div className='p-6 w-full h-screen'>
            <SupportNav />
            <div className='mt-11'>
                <h1 className='text-[#2F2F3F] font-bold text-2xl mb-4'>KFC Eastlight</h1>
                <p className='text-[#646464] font-normal text-base'>Lorem ipsum dolor sit amet consectetur. Id amet suspendisse etiam suscipit dui. Feugiat diam ut urna amet feugiat sem ultricies. A eti ut lobortis tincidunt quis aliquet molestie sed lectus etiam suscipit dui. Feugiat diam ut urna amet feugiat </p>
            </div>
            <IsHelpful />
        </div>
    )
}

export default AboutRestaurant