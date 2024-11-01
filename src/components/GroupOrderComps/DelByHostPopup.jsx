import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const DelByHostPopup = () => {
    return (
        <div className='h-screen w-full fixed top-0 left-0 bg-[#06060626] z-[100]'>
            <Container className='bg-white fixed bottom-0 left-0 w-full min-h-[473px] rounded-t-2xl py-4'>
                <img src={assets.del_by_host} alt="" />

                <div className='mt-5 mb-7'>
                    <h3 className='text-[#2F2F3F] text-xl font-bold mb-2'>The host deleted the group order</h3>
                    <p className='text-[#979797]'>If you wish, you can start a new group order.</p>
                </div>

                <button className='w-full rounded-full p-4 text-white text-lg font-medium bg-[#0AB247]'>Back to Feres restaurant</button>
            </Container>
        </div>
    )
}

export default DelByHostPopup