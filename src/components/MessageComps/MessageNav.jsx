import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext';

const MessageNav = () => {
    const { setCallOrChat } = useContext(FeresContext);
    const [chatOrCall, setChatOrCall] = useState(0);
    return (
        <div className='bg-[#0AB247] w-full text-white pb-3 px-2 sticky top-0'>
            {/* Top */}
            <div className='flex items-center justify-between px-3 py-6 mb-3'>
                <h2 className='font-bold text-[23px]'>Messages</h2>
                <img src={assets.search_01} alt="" className='w-[24px] h-[24px]' />
            </div>

            {/* Chat or Call  */}
            <div className='w-full mx-auto py-1 mt-3 bg-gray-100 flex items-center rounded-full'>
                <div className={`${chatOrCall === 0 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all`} onClick={() => {
                    setChatOrCall(0)
                    setCallOrChat('chat')
                }
                }>Chats</div>
                <div className={`${chatOrCall === 1 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all`} onClick={() => {
                    setChatOrCall(1)
                    setCallOrChat('call')
                }}>Calls</div>
            </div>
        </div>
    )
}

export default MessageNav