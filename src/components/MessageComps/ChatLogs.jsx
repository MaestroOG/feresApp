import React from 'react'
import { chats } from './chats'
import { Link } from 'react-router-dom'

const ChatLogs = () => {
    return (
        <>
            {chats.map((chats) => (
                <Link to={'/messages/riderchat'} className='flex items-center justify-between px-3 mb-7' key={chats.id}>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={chats.img} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-base text-[#2F2F3F] font-medium'>{chats.name}</h3>
                            <p className='text-sm text-[#767578]'>{chats.message}</p>
                        </div>
                    </div>
                    {chats.isIncoming && <div className='flex flex-col items-center gap-1'>
                        <div className='bg-[#0AB247] rounded-full p-2 w-6 h-6 flex items-center justify-center text-white text-xs'>1</div>
                        <div className='text-sm text-[#767578]'>14:25</div>
                    </div>}
                </Link>
            ))}
        </>
    )
}

export default ChatLogs