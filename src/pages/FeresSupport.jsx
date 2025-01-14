import React from 'react'
import FeresSupportNav from '../components/FeresSupportComps/FeresSupportNav'
import FeresChats from '../components/FeresSupportComps/FeresChats'
import { useParams } from 'react-router-dom';


const FeresSupport = () => {
    const { roomId } = useParams();
    return (
        <div>
            <FeresSupportNav />
            <FeresChats roomId={roomId} />
        </div>
    )
}

export default FeresSupport