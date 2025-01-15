import React from 'react'
import { assets } from '../../assets/assets'
import Container from '../Container'

const MurabahaPopUp = () => {
    return (
        <div className='fixed bottom-0 left-0 h-screen w-full bg-[#06060640]'>
            <div className='bg-white fixed bottom-0 left-0 w-full rounded-t-[20px]'>
                <img src={assets.popup_bar} alt="" className='mt-[10px] mx-auto' />
                <Container className={'mt-4'}>
                    <h1 className='text-[#2F2F3F] font-extrabold text-[23px]'>Fill account details</h1>
                    <p className='mt-[10px] mb-5 text-[#A8ADAE]'>These details will help process your orders.</p>
                    <form>
                        <input type="number" placeholder='Enter account number' className='bg-[#F8F8F8] w-full py-[18px] px-5 rounded-[13px] mb-5 outline-none transition-all placeholder:text-[#8E8E93] focus:bg-white focus:border focus:border-[#0AB247]' />
                        <input type="text" placeholder='Account name' className='bg-[#F8F8F8] w-full py-[18px] px-5 rounded-[13px] mb-5 outline-none transition-all placeholder:text-[#8E8E93] focus:bg-white focus:border focus:border-[#0AB247]' />
                        <div className='fixed bottom-0 left-0 w-full py-5 px-4'>
                            <button className='w-full rounded-full bg-[#0AB247] text-white font-semibold text-lg px-4 py-[15px]'>Verify</button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default MurabahaPopUp