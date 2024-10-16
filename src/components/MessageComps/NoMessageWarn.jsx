import React from 'react'

const NoMessageWarn = ({ img, desc, mOrC }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-1 h-[60vh]'>
            <img src={img} alt="" />
            <h2 className='text-[#2F2F3FCC] font-medium text-xl'>No {mOrC}</h2>
            <p className='text-[#2F2F3FCC] text-sm'>Your {desc} with drivers and rider will appear here</p>
        </div>
    )
}

export default NoMessageWarn