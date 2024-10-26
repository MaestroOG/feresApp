import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const MartAllNav = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between px-4 py-6 sticky top-0 w-full transition-all z-40 bg-white'>
            <button onClick={() => navigate(-1)} className='flex items-center gap-3'>
                <div className='p-3 rounded-xl bg-transparent border border-[#EEEEEE]'>
                    <img src={assets.arrow_left} alt="" className='invert' />
                </div>
                <h2 className='text-[#2F2F3F] text-[23px] font-bold'>Costco wholesale</h2>
            </button>
            <div className='flex items-center gap-2'>
                <button className={`p-3 rounded-xl bg-transparent border border-[#EEEEEE]`}>
                    <img src={assets.share} alt="" className='invert' />
                </button>
                <button className={`p-3 rounded-xl bg-transparent border border-[#EEEEEE]`}>
                    <img src={assets.search} alt="" />
                </button>
            </div>

        </div>
    )
}

export default MartAllNav