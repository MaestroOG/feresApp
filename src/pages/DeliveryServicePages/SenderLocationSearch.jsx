import React from 'react'
import { assets } from '../../assets/assets'
import { RecentLocations } from '../../components/LocationSeachComps/RecentLocations'
import { useNavigate } from 'react-router-dom'

const SenderLocationSearch = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* Top */}
            <div className='shadow pb-6'>
                <div className='flex items-center justify-between px-3 py-5'>
                    <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] font-bold text-xl'>Sender address</h1>
                    <img src={assets.maps_location_02} alt="" />
                </div>

                {/* Bottom */}
                <div className='bg-[#F8F8F8] w-[398px] h-[62px] mx-auto flex items-center gap-3 py-2 px-5 rounded-[13px] transition-all focus-within:bg-white focus-within:border focus-within:border-[#0AB247]'>
                    <img src={assets.search} alt="" />
                    <input type="text" placeholder='Search your delivery location' className='bg-transparent w-full border-none outline-none' />
                </div>
            </div>

            {Array(3).fill().map((_, index) => (
                <RecentLocations key={index} />
            ))}

            <div className='fixed bottom-0 left-0 w-full bg-white py-5 px-4' onClick={() => navigate('/deliveryservice/deliverydetails/recepientdetails')}>
                <button className='p-4 rounded-full w-full bg-[#0AB247] text-white text-xl font-medium mt-5'>Confirm location</button>
            </div>
        </div>
    )
}

export default SenderLocationSearch