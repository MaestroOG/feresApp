import React from 'react'
import { assets } from '../../assets/assets'

const AnalysisCards = ({ name }) => {
    return (
        <div className='border border-[#EEEEEE] w-max flex items-center gap-1 rounded-3xl p-[10px]'>
            <img src={assets.analysis_icon} alt="" />
            <p className='text-[#A3A3A3] font-medium'>{name}</p>
        </div>
    )
}

export default AnalysisCards