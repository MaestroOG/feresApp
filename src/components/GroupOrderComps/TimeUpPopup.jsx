import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const TimeUpPopup = () => {
    return (
        <div className='h-screen w-full fixed top-0 left-0 bg-[#06060626] z-[100]'>
            <Container className={'py-4 bg-white fixed w-full bottom-0 left-0 rounded-t-2xl min-h-[569px]'}>
                <img src={assets.time_up_img} alt="" />
                <div className='mt-5 mb-7'>
                    <h3 className='text-[#2F2F3F] text-xl font-bold mb-2'>Time’s up</h3>
                    <p className='text-[#979797] w-[92%]'>The order deadline has passed. If the group needs more time, extend the deadline.</p>
                </div>

                <button className='w-full p-4 rounded-full text-lg font-medium text-white bg-[#0AB247] mb-5'>Extend deadline</button>
                <button className='w-full p-4 rounded-full text-lg font-medium text-[#0AB247] bg-[#EBF9EE]'>Review order</button>

            </Container>
        </div>
    )
}

export default TimeUpPopup