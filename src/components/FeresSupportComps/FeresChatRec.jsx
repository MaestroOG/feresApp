import React from 'react'

const FeresChatRec = ({ text }) => {
    return (
        <div className='text-[#2F2F3F] float-right text-lg bg-white rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max p-[13px] ml-4 mb-4'>
            <div className='w-[18rem]'>{text}</div>
            <p className='float-right text-xs text-[#8E8E93] mt-[9.5px]'>09:24</p>
        </div>
    )
}

export default FeresChatRec