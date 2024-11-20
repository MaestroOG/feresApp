import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const RiderCard = ({ providerInfo }) => {
    const navigate = useNavigate()
    return (
        <div className='border border-[#EEEEEE] rounded-[16px] flex items-center justify-between p-5 mt-5' onClick={() => navigate('/riderinfo')}>
            <div className='flex items-center gap-2'>
                <img src={providerInfo?.provider_image} alt="" width={'50px'} height={'50px'} style={{ borderRadius: '50px' }} />
                <div>
                    <h4 className='text-[#2F2F3F] font-medium text-base mb-1'>{`${providerInfo?.provider_first_name} ${providerInfo?.provider_last_name}`}</h4>
                    <p className='text-[#767578] text-sm'>Yamaha MX King</p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 justify-end mb-1'>
                    <img src={assets.star} alt="" />
                    <p>{providerInfo?.user_rate}</p>
                </div>
                <p className='text-[#2F2F3F] text-sm font-medium'>HSW 4736 XK</p>
            </div>
        </div>
    )
}

export default RiderCard