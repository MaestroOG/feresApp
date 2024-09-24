import React from 'react'
import ChatNav from '../components/ChatSupportComps/ChatNav'
import DateBox from '../components/ChatSupportComps/DateBox'
import SecureWarnBox from '../components/ChatSupportComps/SecureWarnBox'
import ReceiverMessage from '../components/ChatSupportComps/ReceiverMessage'
import SenderMessage from '../components/ChatSupportComps/SenderMessage'
import MessageArea from '../components/ChatSupportComps/MessageArea'

const ChatSupport = () => {
    return (
        <div>
            <ChatNav />
            <div className='bg-[#F8F8F8] py-5 h-[79vh]'>
                <DateBox />
                <SecureWarnBox />
                <ReceiverMessage />
                <SenderMessage />
            </div>
            <MessageArea />
        </div>
    )
}

export default ChatSupport