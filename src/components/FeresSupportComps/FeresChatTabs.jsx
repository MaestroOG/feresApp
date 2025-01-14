import React from 'react'

const FeresChatTabs = ({ text }) => {
    return (
        <div className='text-white text-lg bg-[#0AB247] rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max py-[14.5px] px-[19.5px] ml-auto mr-4 mb-5'>{text}
            <div className='float-right text-white text-xs mt-[9.5px]'>09:24</div>
        </div>
    )
}

export default FeresChatTabs