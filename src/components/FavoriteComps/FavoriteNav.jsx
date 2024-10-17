import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const FavoriteNav = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full bg-white sticky top-0 left-0 px-4 py-5 flex items-center gap-[33vw]'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-2xl font-bold text-[#2F2F3F]'>Favorite</h1>
        </div>
    )
}

export default FavoriteNav