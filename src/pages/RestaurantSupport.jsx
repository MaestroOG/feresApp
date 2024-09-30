import React from 'react'
import SupportNav from '../components/SupportComps/SupportNav'
import BlockBtn from '../components/SupportComps/BlockBtn'
import SupportLinks from '../components/SupportComps/SupportLinks'
import { useNavigate } from 'react-router-dom'

const RestaurantSupport = () => {
    const navigate = useNavigate();
    return (
        <div className='p-6 w-full'>
            <SupportNav />
            <div className='mt-10'>
                <h2 className='text-[#2F2F3F] font-medium text-xl mb-4'>Get help with the restaurant menu</h2>
                <BlockBtn />
            </div>
            <div className='mt-6'>
                <h4 className='text-[#2F2F3F] text-base font-medium'>How can we help you?</h4>
                <SupportLinks text={"About KFC Eastlight"} onClick={() => navigate('/restaurantsupport/aboutrestaurant')} />
                <SupportLinks text={"Restaurant location"} />
                <SupportLinks text={"About food ingredients"} />
                <SupportLinks text={"Restaurant cooking methods"} onClick={() => navigate('/restaurantsupport/aboutrestaurant')} />
                <SupportLinks text={"Restaurant opening and closing time"} />
            </div>
        </div>
    )
}

export default RestaurantSupport