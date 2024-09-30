import React from 'react'
import { assets } from '../../assets/assets'
import CountrySearchInput from './CountrySearchInput'

const SelectCountryPopup = ({ onCancelClick }) => {
    return (
        <div className='z-30 h-[93vh] w-full bg-white rounded-tl-[16px] rounded-tr-[16px] fixed bottom-0 left-0 px-3 py-5 border'>
            <div>
                <img src={assets.cancel_circle} alt="" className='float-right' onClick={onCancelClick} />
                <h2 className='text-[#2F2F3F] font-bold text-xl text-center'>Select your country</h2>
            </div>
            <CountrySearchInput />
            <div className='mt-7'>
                <h3 className='text-[#1E1E1E] text-lg mb-8'>A</h3>
                <div className='flex items-center gap-3'>
                    <img src={assets.afghanistan} alt="" />
                    <p className='text-[#333333] text-lg'>Afghanistan</p>
                </div>
            </div>
        </div>
    )
}

export default SelectCountryPopup