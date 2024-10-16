import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'

const ChatRiderNav = () => {
    const { setCallTypePop } = useContext(FeresContext)
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between px-4 py-6'>
            <div className='flex items-center gap-4'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <div className='flex items-center gap-2'>
                    <img src={assets.jacob_jones} alt="" />
                    <div>
                        <h3 className='text-[#2B2A2F] text-base font-medium'>Jacob Jones</h3>
                        <p className='text-[#2B2A2F] text-xs'>Online</p>
                    </div>
                </div>
            </div>
            <img src={assets.telephone} alt="" onClick={() => setCallTypePop(true)} />
        </div>
    )
}

export default ChatRiderNav