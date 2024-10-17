import React from 'react'
import { assets } from '../../assets/assets'

const ProfileTop = () => {
    return (
        <div>
            <div className='bg-white rounded-br-2xl rounded-bl-2xl pb-4'>
                <h2 className='text-[#2F2F3F] text-center text-2xl font-bold w-full bg-white sticky top-0 z-10 py-6'>Profile</h2>
                <div className='mt-4 mx-auto flex items-center justify-center relative'>
                    <img src={assets.abraham_john} alt="" />
                    <img src={assets.edit_profile} alt="" className='absolute bottom-1 right-36' />
                </div>
                <div className='text-center mt-5'>
                    <h2 className='text-[#2B2A2F] font-bold text-2xl mb-1'>Abraham John</h2>
                    <h3 className='text-[#2B2A2F] text-lg'>abrahamjo333@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileTop