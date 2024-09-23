import React from 'react'
import { assets } from '../../assets/assets'

const PopSearchRec = ({ searchTerm, image }) => {
    return (
        <div className='flex items-center gap-2 px-3 pr-3 py-2 rounded-3xl border border-[#EEEEEE] w-max'>
            <img src={image} alt="" />
            <p className='text-sm text-[#A3A3A3]'>{searchTerm}</p>
        </div>
    )
}

export default PopSearchRec