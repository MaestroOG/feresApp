import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const JoinQrPopup = () => {
    return (
        <div className='h-screen w-full bg-[#06060626] z-[100] fixed top-0 left-0'>
            <Container className={'fixed w-full bottom-0 left-0 rounded-t-2xl min-h-[588px] bg-white'}>
                <img src={assets.cancel_icon} alt="" className='py-4' />
                <div className='mt-[10px]'>
                    <h3 className='text-[#2F2F3F] text-xl font-bold'>Join my group order</h3>
                    <p className='text-[#979797] mt-2'>Scan this QR code to start adding items.</p>
                </div>

                <img src={assets.qr_feres} alt="" className='my-6 mx-auto' />
                <button className='w-full bg-[#0AB247] rounded-full p-4 text-white text-lg font-medium mb-5'>Start ordering</button>
            </Container>
        </div>
    )
}

export default JoinQrPopup