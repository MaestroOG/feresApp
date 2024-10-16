import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const CallTypePopup = () => {
    const { setCallTypePop } = useContext(FeresContext)
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-[#0606064D]'>
            <div className='bg-white w-full fixed bottom-0 left-0 py-4 rounded-tr-2xl rounded-tl-2xl'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='flex justify-between w-[65%] ml-auto items-center mt-4 pr-3'>
                    <h3 className='font-bold text-lg text-[#2F2F3F]'>Select call type</h3>
                    <img src={assets.close} alt="" onClick={() => setCallTypePop(false)} />
                </div>
                <hr className='mt-5 mb-4' />
                <div className='flex items-center gap-4 px-4 mb-8 mt-4'>
                    <img src={assets.call} alt="" />
                    <p className='text-[#2B2A2F] text-xl'>Voice call in app</p>
                </div>
                <div className='flex items-center gap-4 px-4 mb-8'>
                    <img src={assets.video_01} alt="" />
                    <p className='text-[#2B2A2F] text-xl'>Video call in app</p>
                </div>
                <div className='flex items-center gap-4 px-4 mb-2'>
                    <img src={assets.call} alt="" />
                    <p className='text-[#2B2A2F] text-xl'>Call driver by phone</p>
                </div>
            </div>
        </div>
    )
}

export default CallTypePopup