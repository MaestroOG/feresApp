import React from 'react'
import FeresChatTabs from './FeresChatTabs'
import FeresChatRec from './FeresChatRec'
import FeresChatFb from './FeresChatFb'

const FeresChats = () => {
    return (
        <div className='bg-[#F8F8F8] w-screen h-[90vh] py-5'>
            <FeresChatTabs text={"How to cancel trip"} />
            <FeresChatRec text={"To cancel a ride, simply tap the slider on the upcoming trips and select Cancel"} />
            <div className='text-[#2F2F3F] text-lg bg-white rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max p-[13px] ml-4 mb-4'>Is this helpful to you</div>
            <FeresChatTabs text={"Yes"} />
            <div className='text-[#2F2F3F] text-lg bg-white rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] w-max p-[13px] ml-4 mb-4'>Start over</div>
            {/* <FeresChatFb /> */}
        </div>
    )
}

export default FeresChats