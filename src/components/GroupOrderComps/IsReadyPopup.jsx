import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const IsReadyPopup = ({ onReadyClick, onCancelClick }) => {
    return (
        <div className='h-screen w-full fixed top-0 left-0 bg-[#06060626]'>
            <Container className={'min-h-[333px] rounded-t-2xl w-full bg-white fixed bottom-0 left-0'}>
                <img src={assets.popup_bar} alt="" className='mx-auto pt-2' />

                <div className='my-5 text-center'>
                    <h2 className='text-[#2F2F3F] text-2xl font-black'>Everyone ready to order</h2>
                    <p className='mt-2 text-[#72737B] w-[94%] mx-auto'>Please ensure that everyone has added their items, as changes can’t be made in the next step</p>
                </div>

                <button className='w-full p-4 rounded-full text-lg font-bold text-white bg-[#0AB247] mb-5' onClick={onReadyClick}>We’re ready</button>
                <button className='w-full p-4 rounded-full text-lg font-bold text-[#2F2F3F] bg-[#F8F8F8]' onClick={onCancelClick}>Cancel</button>
            </Container>
        </div>
    )
}

export default IsReadyPopup