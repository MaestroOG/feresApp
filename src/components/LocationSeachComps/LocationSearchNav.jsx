import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const LocationSearchNav = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* Top */}
            <div className='shadow pb-6'>
                <div className='flex items-center justify-between px-3 py-5'>
                    <img src={assets.cancel_icon} alt="" onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] font-bold text-xl'>Deliver to</h1>
                    <img src={assets.maps_location_02} alt="" onClick={() => navigate('/selectlocation')} />
                </div>

                {/* Bottom */}
                <div className='bg-[#F8F8F8] w-[90%] mx-auto flex items-center gap-3 py-[10px] px-[20px] rounded-[13px]'>
                    <img src={assets.search} alt="" />
                    <input type="text" placeholder='Search your delivery location' className='bg-[#F8F8F8] w-full border-none outline-none' />
                </div>
            </div>
        </div>
    )
}

export default LocationSearchNav