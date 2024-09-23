import React from 'react'
import SupportNav from './SupportNav'
import { assets } from '../../assets/assets'

const RestaurantIssue = () => {
    return (
        <div className='p-6'>
            <SupportNav />
            <div className='mt-11'>
                <h1 className='text-[#2F2F3F] font-bold text-2xl mb-4'>KFC Eastlight</h1>
                <hr className='border border-[#EDEDED]' />
            </div>
            <div className='border-none outline-none mt-6 bg-[#F8F8F8] w-full h-[245px] rounded-3xl relative'>
                <textarea className='h-full w-full bg-[#F8F8F8] rounded-3xl p-5 placeholder:text-[#767578] font-normal ' placeholder='Describe your issue'></textarea>
                <img src={assets.document_attachment} alt="" className='absolute right-5 bottom-6' />
            </div>
            <button className='w-full border border-[#0AB247] bg-[#0AB247] p-[10px] py-[15px] text-white mt-5 rounded-[30px]'>Send message</button>
        </div>
    )
}

export default RestaurantIssue