import React from 'react'
import { assets } from '../../assets/assets'

const LanguageOp = () => {
    return (
        <div className='flex items-center justify-between px-4 mt-4 bg-white rounded-2xl py-5'>
            <div className='flex items-center gap-3'>
                <img src={assets.language_skill} alt="" />
                <div>
                    <h3 className='text-[#2F2F3F] text-lg'>Language</h3>
                    <p className='text-[#2F2F3F] text-xs'>English - GB</p>
                </div>
            </div>
            <img src={assets.arrow_right} alt="" />
        </div>
    )
}

export default LanguageOp