import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import PinInput from './PinInput'

const MurabahaPin = () => {
    return (
        <div className='fixed bottom-0 left-0 h-screen w-full bg-[#06060640]'>
            <div className='bg-white fixed bottom-0 left-0 w-full min-h-[374px] rounded-t-[20px]'>
                <img src={assets.popup_bar} alt="" className='mt-[10px] mx-auto' />
                <Container className={'mt-4'}>
                    <h1 className='text-[#2F2F3F] font-extrabold text-[23px]'>Enter your account PIN</h1>
                    <p className='mt-[10px] mb-5 text-[#A8ADAE]'>E-Murabaha has granted you with a loan of <span className='text-[#0AB247] font-semibold'>ETB 40,000</span> for your purchases on Feres.</p>
                    <PinInput />
                    <button className='w-full rounded-full bg-[#0AB247] text-white font-semibold text-lg px-4 py-[15px]'>Proceed</button>
                </Container>
            </div>
        </div>
    )
}

export default MurabahaPin