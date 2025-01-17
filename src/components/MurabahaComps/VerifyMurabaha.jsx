import React from 'react'
import { assets } from '../../assets/assets'
import PinInput from '../OrderComps/PinInput'

const VerifyMurabaha = ({ onVerify }) => {
    return (
        <div className='fixed h-screen w-full bg-[#06060640] top-0 left-0'>
            <div className='bg-white fixed w-full min-h-[464px] rounded-t-[20px] bottom-0 left-0'>
                <div className='border-b border-[#F7F7F7] mb-9'>
                    <img src={assets.popup_bar} alt="" className='mx-auto mt-[10px] mb-5' />
                    <h3 className='text-[#2F2F3F] text-xl font-extrabold text-center'>Verify Your Account</h3>
                </div>
                <div className='mt-5 px-[28px]'>
                    <h2 className='text-lg text-[#72737B] text-center mb-6'>Please enter the 5-digit code we sent to +44 7975 556677</h2>
                    <PinInput />
                </div>
                <div className='w-full mx-auto mb-[30px]'>
                    <h3 className='text-[#2B2A2F] text-center'>Didn’t receive SMS?</h3>
                    <h3 className='text-[#2B2A2F] text-center'>You can resend code in <span className='font-semibold text-[#0AB247]'>55</span> s</h3>
                </div>
                <div className='fixed bottom-0 left-0 w-full py-5 px-4'>
                    <button className='w-full rounded-full bg-[#0AB247] text-white font-semibold text-lg px-4 py-[15px]' onClick={onVerify}>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default VerifyMurabaha