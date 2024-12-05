import React from 'react'
import SupportNav from './SupportNav'
import IsHelpful from './IsHelpful'
import { useSelector } from 'react-redux'



const AboutRestaurant = () => {
const faqData = useSelector((state) => state.faq.faqData);

    return (
        <div className='p-6 w-full h-screen'>
            <SupportNav />
            <div className='mt-11'>
                <h1 className='text-[#2F2F3F] font-bold text-2xl mb-4'>{faqData?.question}</h1>
                <p className='text-[#646464] font-normal text-base'>{faqData?.answer}</p>
            </div>
            <IsHelpful />
        </div>
    )
}

export default AboutRestaurant