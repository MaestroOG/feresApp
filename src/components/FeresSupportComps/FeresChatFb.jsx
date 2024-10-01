import React from 'react'

const FeresChatFb = ({ onYesClick, onNoClick }) => {
    return (
        <div>
            {/* <button className='text-[#2F2F3F] text-lg bg-white rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max p-[13px] ml-4 mb-4' onClick={onYesClick}>Yes</button> */}
            <br />
            <button className='text-[#2F2F3F] text-lg bg-white rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max p-[13px] ml-4 mb-4' onClick={onNoClick}>No</button>
        </div>
    )
}

export default FeresChatFb