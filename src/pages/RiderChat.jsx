import React, { useContext } from 'react'
import ChatRiderNav from '../components/ChatRiderComps/ChatRiderNav'
import DateBox from '../components/ChatSupportComps/DateBox'
import SecureWarnBox from '../components/ChatSupportComps/SecureWarnBox'
import MessageArea from '../components/ChatSupportComps/MessageArea'
import { FeresContext } from '../context/FeresContext'
import CallTypePopup from '../components/ChatRiderComps/CallTypePopup'
import ReceiverMessage from '../components/ChatSupportComps/ReceiverMessage'
import SenderMessage from '../components/ChatSupportComps/SenderMessage'

const RiderChat = () => {
    const { callTypePop } = useContext(FeresContext)
    return (
        <div>
            <ChatRiderNav />
            <div className='bg-[#F8F8F8] py-5 h-[79vh]'>
                <DateBox />
                <SecureWarnBox />
                <SenderMessage />
                <ReceiverMessage />
            </div>
            <MessageArea />
            {callTypePop && <CallTypePopup />}
        </div>
    )
}

export default RiderChat