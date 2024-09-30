import React from 'react'
import { assets } from '../../assets/assets'

const CountrySearchInput = () => {
    return (
        <div className='border border-[#0AB247] rounded-[13px] py-[10px] px-[20px] flex items-center gap-2 mt-7'>
            <img src={assets.search_01} alt="" className='w-6' />
            <input type="text" className='w-full border-none outline-none placeholder:text-[#A1A1A1]' placeholder='Search for a country or region' />
        </div>
    )
}

export default CountrySearchInput