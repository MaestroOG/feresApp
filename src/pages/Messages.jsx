import React, { useContext } from 'react'
import Menu from '../components/ServiceComps/Menu'
import MessageNav from '../components/MessageComps/MessageNav'
import NoMessageWarn from '../components/MessageComps/NoMessageWarn'
import { assets } from '../assets/assets'
import { FeresContext } from '../context/FeresContext'
import ChatLogs from '../components/MessageComps/ChatLogs'
import { chats } from '../components/MessageComps/chats'
import { calls } from '../components/MessageComps/calls'
import CallLogs from '../components/MessageComps/CallLogs'

const Messages = () => {
    const { callOrChat } = useContext(FeresContext)
    return (
        <div className='overflow-hidden'>
            <MessageNav />
            <Menu />
            {callOrChat === 'chat' ? chats.length === 0 ? <NoMessageWarn img={assets.message_multiple_01} mOrC={"messages"} desc={"chats"} /> : <div className='mt-6'>
                <ChatLogs />
            </div> : callOrChat === 'call' ? calls.length === 0 ? <NoMessageWarn img={assets.message_multiple_01} mOrC={"Calls"} desc={"calls"} /> : <div className='mt-6'>
                <CallLogs />
            </div> : null}

        </div>
    )
}

export default Messages