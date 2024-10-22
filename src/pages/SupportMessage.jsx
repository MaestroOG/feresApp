import React from 'react'
import SupportMessageNav from '../components/SupportMessageComps/SupportMessageNav'
import NoSupportMessage from '../components/SupportMessageComps/NoSupportMessage'
import { supportmessages } from '../components/SupportMessageComps/supportmessages'
import SupportChats from '../components/SupportMessageComps/SupportChats'

const SupportMessage = () => {
    return (
        <div>
            <SupportMessageNav />
            {supportmessages.length === 0 ? <NoSupportMessage /> : supportmessages.map(chats => (
                <SupportChats key={chats.id} img={chats.img} from={chats.from} highlight={chats.highlight} />
            ))}
        </div>
    )
}

export default SupportMessage