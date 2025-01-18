import React from 'react'
import { assets } from '../../assets/assets'
import Container from '../Container'

const NotAvailablePop = ({ onGotIt, onSched }) => {
    return (
        <div className='h-screen w-full fixed top-0 left-0 bg-[#06060626] z-[2000]'>
            <div className='bg-white fixed bottom-0 left-0 w-full min-h-[513px] rounded-t-2xl'>
                <img src={assets.popup_img} alt="" className='mt-4 mx-4' />
                <Container className={'mt-5'}>
                    <h3 className='text-xl text-[#2F2F3F] font-extrabold'>Sorry the restaurant is unavailable for ordering now</h3>
                    <p className='text-[#72737B] mt-[10px]'>You can find other nearby restaurants that are open or you can schedule your order</p>
                </Container>
                <Container className={'fixed w-full bottom-0 left-0 py-5 flex items-center justify-between'}>
                    <button className='text-lg font-semibold text-[#0AB247] bg-[#EBF9EE] rounded-[30px] px-4 py-[18px] w-[48%]' onClick={onGotIt}>Got it</button>
                    <button className='text-lg font-semibold text-white bg-[#0AB247] rounded-[30px] px-4 py-[18px] w-[48%]' onClick={onSched}>Schedule order</button>
                </Container>
            </div>
        </div>
    )
}

export default NotAvailablePop